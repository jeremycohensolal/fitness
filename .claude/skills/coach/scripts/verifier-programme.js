/* Vérificateur de fichier programmes/*.js — usage :
     node .claude/skills/coach/scripts/verifier-programme.js programmes/NN-nom.js

   Il n'attrape que le mécanique : syntaxe, contrat de format, déclaration du
   fichier dans index.html et sw.js, bump de version. Il ne juge jamais le
   contenu de l'entraînement — dosage, pertinence, clarté d'une note : à toi.
   Sort en 1 s'il reste une erreur. */
"use strict";

var fs = require("fs");
var vm = require("vm");
var path = require("path");
var child = require("child_process");

var RACINE = path.resolve(__dirname, "..", "..", "..", "..");
var UNITES = ["reps", "par jambe", "par bras", "par côté", "secondes"];
var JOURS = /\b(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)\b/i;

var erreurs = [];
var alertes = [];

function ko(msg){ erreurs.push(msg); }
function attention(msg){ alertes.push(msg); }

/* ---------- lecture des arguments ---------- */

var cible = process.argv[2];
if(!cible){
  console.error("usage : node verifier-programme.js programmes/NN-nom.js");
  process.exit(2);
}
var chemin = path.resolve(RACINE, cible);
if(!fs.existsSync(chemin)){
  console.error("fichier introuvable : " + chemin);
  process.exit(2);
}
var base = path.basename(chemin);
var source = fs.readFileSync(chemin, "utf8");

/* ---------- 1. syntaxe et chargement ---------- */

function charger(fichiers){
  var bac = {window:{}};
  vm.createContext(bac);
  fichiers.forEach(function(f){
    vm.runInContext(fs.readFileSync(f, "utf8"), bac, {filename:f});
  });
  return bac.window.PROGRAMMES || [];
}

var prog = null;
try {
  var seul = charger([chemin]);
  if(seul.length !== 1){
    ko("le fichier doit pousser exactement un programme dans window.PROGRAMMES (il en pousse " + seul.length + ")");
  }
  prog = seul[0] || null;
} catch(e){
  console.error("✗ le fichier ne s'exécute pas : " + e.message);
  process.exit(1);
}

/* ---------- 2. mise en forme (sur le texte brut) ---------- */

if(source.indexOf("/*") !== 0){
  ko("il manque le bloc de commentaire /* … */ en tête de fichier");
}
if(!/\(function\(\)\{/.test(source)){
  ko("le fichier doit être une IIFE : (function(){ … })();");
}
if(source.indexOf('"use strict";') === -1){
  ko('il manque "use strict";');
}
if(source.indexOf("window.PROGRAMMES = window.PROGRAMMES || [];") === -1){
  ko("il manque la ligne window.PROGRAMMES = window.PROGRAMMES || [];");
}
if(/\b(id|group|name|reps|unit|band|note|tab|label|title|rule|seances|exos):\s/.test(source)){
  ko("espace après des deux-points : écrire id:\"k1\", jamais id: \"k1\"");
}
if(/,(\s*[\]}])/.test(source)){
  ko("virgule finale avant un ] ou un } — à supprimer");
}
if(/\},\r?\n[ \t]*\{id:/.test(source)){
  ko("il manque une ligne vide entre deux exercices");
}
if(/’/.test(source)){
  ko("apostrophe courbe (’) : 01-elastique.js n'utilise que l'apostrophe droite (')");
}
if(/(let |const |=>)/.test(source)){
  ko("ES5 uniquement : pas de let, pas de const, pas d'arrow function");
}
if(/'/.test(source.replace(/[a-zA-ZÀ-ÿ]'[a-zA-ZÀ-ÿ]/g, ""))){
  attention("apostrophe ou guillemet simple isolé : les chaînes se délimitent avec des guillemets doubles");
}

/* alignement des trois lignes d'un exercice */
var lignes = source.split(/\r?\n/);
lignes.forEach(function(l, i){
  var m = l.match(/^(\s*)\{id:/);
  if(!m) return;
  var colonne = m[1].length + 1;
  [1, 2].forEach(function(d){
    var suite = lignes[i + d];
    if(suite === undefined) return;
    if(!/^\s*(reps|note):/.test(suite)) return;
    var indent = suite.match(/^(\s*)/)[1].length;
    if(indent !== colonne){
      ko("ligne " + (i + d + 1) + " : indentation " + indent + " au lieu de " + colonne +
         " (les lignes reps: et note: s'alignent sous le « i » de id:)");
    }
  });
});

/* ---------- 3. contrat de données ---------- */

if(prog){
  ["id", "name", "title", "rule", "seances"].forEach(function(cle){
    if(!prog[cle]) ko("champ de programme manquant : " + cle);
  });
  if(prog.rule && !/\d/.test(prog.rule)){
    ko('rule doit chiffrer le repos : "25 min · repos 60 s", jamais « repos court »');
  }

  var vus = {};
  var nbExos = 0;
  (prog.seances || []).forEach(function(s){
    if(!s.id || !s.tab || !s.label) ko("séance incomplète : il faut id, tab et label");
    (s.exos || []).forEach(function(e){
      nbExos++;
      var ou = "exercice " + (e.id || "?") + " (" + (e.name || "sans nom") + ")";
      if(!e.id) ko(ou + " : id manquant");
      else if(vus[e.id]) ko("id dupliqué : " + e.id + " — c'est une clé de localStorage");
      else vus[e.id] = true;

      if(!e.group) ko(ou + " : group manquant");
      if(!e.name) ko(ou + " : name manquant");

      if(typeof e.reps !== "string") ko(ou + " : reps doit être une chaîne, pas un nombre");
      else {
        if(e.reps.indexOf("×") === -1) ko(ou + ' : reps doit utiliser × (U+00D7), pas "x"');
        if(e.reps.indexOf("-") !== -1) ko(ou + " : fourchette avec – (tiret demi-cadratin), pas -");
      }

      if(UNITES.indexOf(e.unit) === -1){
        ko(ou + ' : unit="' + e.unit + '" hors liste (' + UNITES.join(", ") + ")");
      }
      if(typeof e.band !== "boolean") ko(ou + " : band doit être true ou false");

      if(typeof e.note !== "string" || !e.note) ko(ou + " : note manquante");
      else {
        if(e.note.length > 120) ko(ou + " : note de " + e.note.length + " caractères — une phrase, lue sur un téléphone");
        if((e.note.match(/\./g) || []).length > 2) attention(ou + " : note en plusieurs phrases, un seul cue suffit");
      }
    });
    var n = (s.exos || []).length;
    if(n > 5) attention("séance " + s.id + " : " + n + " exercices — le cadre 25 minutes en tient 3 à 5");
  });
  if((prog.seances || []).length > 3){
    attention((prog.seances || []).length + " onglets : au-delà de trois, c'est serré sur mobile");
  }
  if(nbExos === 0) ko("aucun exercice dans le programme");

  /* id de programme unique parmi tous les fichiers */
  var dossier = path.join(RACINE, "programmes");
  fs.readdirSync(dossier).filter(function(f){
    return /\.js$/.test(f) && f !== base;
  }).forEach(function(f){
    try {
      charger([path.join(dossier, f)]).forEach(function(p){
        if(p.id === prog.id) ko("id de programme « " + prog.id + " » déjà pris par " + f);
      });
    } catch(e){ /* un autre fichier cassé n'est pas notre sujet */ }
  });
}

/* ---------- 4. aucune donnée personnelle ---------- */

if(JOURS.test(source)){
  ko("un jour de la semaine apparaît dans le fichier — c'est une donnée de PERSO.md, le dépôt est public");
}
if(/\b\d{1,2}\s*ans\b/i.test(source)) ko("un âge apparaît dans le fichier — jamais de donnée personnelle ici");
if(/\b1\s?m\s?\d{2}\b/.test(source)) ko("une taille apparaît dans le fichier — jamais de donnée personnelle ici");
if(/\b\d{2,3}\s?kg\b/i.test(source)){
  attention("« kg » dans le fichier : légitime pour une kettlebell, interdit pour un poids de corps — vérifie");
}

/* ---------- 5. installation ---------- */

function lire(f){
  var p = path.join(RACINE, f);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}

var html = lire("index.html");
var sw = lire("sw.js");

if(html.indexOf('programmes/' + base) === -1){
  ko('index.html ne charge pas le fichier : ajouter <script src="programmes/' + base + '"></script> avant le script de l\'app');
}
if(sw.indexOf('"./programmes/' + base + '"') === -1){
  ko('sw.js ne liste pas le fichier dans ASSETS : ajouter "./programmes/' + base + '"');
}

var vSw = sw.match(/programme-v(\d+)/);
var vHtml = html.match(/version\s+(\d+)/);
if(!vSw) ko("sw.js : CACHE introuvable");
if(!vHtml) ko("index.html : le numéro de version en bas de page est introuvable");
if(vSw && vHtml && vSw[1] !== vHtml[1]){
  ko("versions désynchronisées : sw.js dit v" + vSw[1] + ", index.html dit " + vHtml[1]);
}
/* le bump ne se contrôle que si le programme a bougé depuis le dernier commit */
var modifie = true;
try {
  modifie = child.execSync("git status --porcelain -- " + JSON.stringify(cible),
                           {cwd:RACINE, stdio:["ignore", "pipe", "ignore"]}).toString().trim() !== "";
} catch(e){ modifie = false; }

if(vSw && modifie){
  try {
    var swCommite = child.execSync("git show HEAD:sw.js", {cwd:RACINE, stdio:["ignore", "pipe", "ignore"]}).toString();
    var vAvant = swCommite.match(/programme-v(\d+)/);
    if(vAvant && Number(vSw[1]) <= Number(vAvant[1])){
      ko("version non bumpée depuis le dernier commit (toujours v" + vAvant[1] +
         ") — sans ça, les téléphones gardent l'ancienne version en cache");
    }
  } catch(e){ /* pas de dépôt git ou pas de HEAD : on laisse passer */ }
}

/* ---------- verdict ---------- */

alertes.forEach(function(m){ console.log("⚠  " + m); });
erreurs.forEach(function(m){ console.log("✗  " + m); });

if(erreurs.length){
  console.log("\n" + erreurs.length + " erreur(s) — le fichier n'est pas prêt.");
  process.exit(1);
}
console.log("✓  " + base + " : format, installation et version conformes." +
            (alertes.length ? " (" + alertes.length + " point(s) à vérifier à la main)" : ""));
console.log("   Reste à ta charge : dosage, budget 25 min, clarté des notes.");
