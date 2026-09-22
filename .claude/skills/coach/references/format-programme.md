# Format d'un programme et installation dans l'app

À lire **dès que le résultat du coaching doit atterrir dans l'app**, et à relire avant de
rendre le fichier. Le modèle de référence est `programmes/01-elastique.js` : ouvre-le, copie-le,
modifie la copie. Ne réécris jamais la structure de mémoire.

Attention : `01-elastique.js` est le modèle de **forme**, jamais de **dosage**. Il date d'avant
le cadre 25 minutes (7 exercices par séance) — copie son style, pas son volume. Il précède aussi
le champ `charge` et utilise encore l'ancien `band` : pour ce champ-là, le modèle à jour est
`programmes/02-kettlebell.js`.

## Comment l'app charge les programmes

Un fichier par programme dans `programmes/`, nommé `NN-nom.js` — **le préfixe numérique fixe
l'ordre du sélecteur**. Chaque fichier se contente de pousser un objet dans `window.PROGRAMMES` ;
il ne contient **aucun code d'application**.

`index.html` charge ces fichiers en `<script src>` **avant** son propre script, puis lit
`window.PROGRAMMES`. Le sélecteur de programme apparaît tout seul dès qu'il y en a plus d'un.

Le nom du fichier et l'`id` du programme sont indépendants : le fichier peut être renommé (pour
changer l'ordre), l'`id` non — c'est une clé de `localStorage`.

## Gabarit — à reproduire exactement

Indentation, alignement des commentaires, absence d'espace après les `:`, ligne vide entre deux
exercices : tout est significatif. Le fichier produit doit être indiscernable, en style, de
`01-elastique.js`.

**C'est un squelette de mise en forme, pas une proposition d'entraînement.** Les noms, les
séries et les reps qui y figurent sont des remplissages neutres, volontairement : un gabarit qui
ressemble à un programme fini finit recopié tel quel, et personne n'a conçu la séance. Reprends
sa forme, conçois son contenu.

```js
/* Programme <nom> — données seules, aucun code d'application ici.
   Pour ajouter un programme : copier ce fichier, changer « id » et « name »,
   puis l'inscrire dans index.html (<script src>) et dans ASSETS de sw.js. */
(function(){
  "use strict";

  window.PROGRAMMES = window.PROGRAMMES || [];

  window.PROGRAMMES.push({
    id:"exemple",               /* clé de stockage — ne jamais renommer */
    name:"Exemple",             /* libellé dans le sélecteur */
    title:"Programme exemple",  /* <h1> et <title> */
    rule:"25 min · repos 60 s", /* bandeau règle, repos toujours chiffré */
    seances:[
      {
        id:"A", tab:"Prog 1", label:"Première séance",
        exos:[
          {id:"x1", group:"Groupe", name:"Premier exercice",
           reps:"4 × 8", unit:"reps", charge:["kettlebell"],
           note:"Le cue d'exécution, en une phrase.",
           aide:"premier-exercice"},

          {id:"x2", group:"Groupe · qualificatif", name:"Deuxième exercice",
           reps:"3 × 10–15", unit:"par bras", charge:["elastique"],
           note:"Un seul repère à retenir, qui décrit le geste.",
           aide:"deuxieme-exercice"}
        ]
      },
      {
        id:"B", tab:"Prog 2", label:"Deuxième séance",
        exos:[
          {id:"x3", group:"Groupe", name:"Troisième exercice",
           reps:"3 × 45–60", unit:"secondes", charge:[],
           note:"Ce que le corps fait, pas ce que le muscle ressent.",
           aide:"troisieme-exercice"}
        ]
      }
    ]
  });
})();
```

### Règles de mise en forme, non négociables

- **En-tête** : le bloc de commentaire `/* … */` en tête de fichier, adapté au nom du programme.
- **IIFE + `"use strict";`**, puis une ligne vide, puis
  `window.PROGRAMMES = window.PROGRAMMES || [];`, puis une ligne vide.
- **Pas d'espace après les deux-points** : `id:"k1"`, jamais `id: "k1"`.
- **Guillemets doubles** partout. Pas de virgule finale après le dernier élément d'un tableau
  ou d'un objet.
- **Commentaires des quatre premières clés alignés** en colonne, comme dans le modèle.
- **Un exercice tient sur quatre lignes**, toujours découpées de la même façon :
  1. `{id:…, group:…, name:…,`
  2. ` reps:…, unit:…, charge:…,` — alignée sous le `i` de `id` (11 espaces)
  3. ` note:…,` — même alignement
  4. ` aide:…},` — même alignement
- **Une ligne vide entre deux exercices**, aucune après le dernier.
- **Typographie française** : `×` (U+00D7) pour la multiplication, `–` (tiret demi-cadratin)
  pour les fourchettes, `·` pour les séparateurs de `group`, et l'apostrophe **droite** `'` —
  celle de `01-elastique.js`, jamais la courbe.
- **ES5 strict** : `var`, `function(){}`. Pas de `let`, pas d'arrow function, pas de module,
  aucune dépendance. Français partout, commentaires compris.

## Champs d'un exercice

| Champ | Type | Règle |
|---|---|---|
| `id` | chaîne | **Clé de `localStorage`.** Unique dans le programme, jamais renommé, jamais réutilisé. Préfixe par famille : `k1`, `k2`… |
| `group` | chaîne | Courte étiquette au-dessus du nom. Le séparateur ` · ` sert à qualifier (`"Jambes · unilatéral"`). Reprendre celles de `references/exercices.md`. |
| `name` | chaîne | Nom de l'exercice, en français. |
| `reps` | **chaîne** | Pas un nombre. Format `"3 × 12"` ou `"3 × 10–15"`. |
| `unit` | chaîne | Affiché sous les reps. Valeurs utilisées : `"reps"`, `"par jambe"`, `"par bras"`, `"par côté"`, `"secondes"`. |
| `charge` | tableau | Le matériel de l'exercice, dans l'ordre d'affichage : `["elastique"]`, `["kettlebell"]`, `["kettlebell","elastique"]`, ou `[]` ⇒ « Poids du corps ». Un bloc de réglage mémorisé par matériel. |
| `band` | booléen | **Hérité, à ne plus écrire.** `01-elastique.js` l'utilise encore : `true` vaut `["elastique"]`, `false` vaut `[]`. Jamais `charge` et `band` sur le même exercice. |
| `aide` | chaîne | Clé d'une entrée de `aides.js` — le contenu du bouton « Comment faire ? ». Réutilise la clé d'un exercice déjà documenté plutôt que d'écrire deux fois le même texte. Clé absente du catalogue ⇒ pas de bouton, sans erreur. |
| `note` | chaîne | **Une phrase, un seul cue**, en langage courant — elle est lue par un débutant, seul, à 7 h du matin. Décris le geste, pas la sensation. Pas de paragraphe : la carte se lit sur un téléphone. |

### Points d'attention

- **Le nombre de séances n'est pas limité à deux** — l'app construit un onglet par entrée de
  `seances`. Mais sur mobile, au-delà de trois onglets ça devient serré.
- Les `id` d'exercice servent de clés de stockage sous `prog.band.<progId>.<exoId>`,
  `prog.kb.<progId>.<exoId>` et dans `prog.ticks.<progId>`. Renommer un `id` rattache un ancien
  réglage au mauvais exercice.
- Les élastiques sont **cumulables** : le sélecteur stocke une liste de couleurs. C'est le
  levier de progression en charge — inutile de créer un exercice « version lourde ».
- La kettlebell, non : le sélecteur de poids est **exclusif**, une seule cloche à la fois. Les
  poids proposés sont ceux du tableau `KETTLEBELLS` d'`index.html` — n'écris **jamais** un poids
  en kilos dans un `programmes/*.js` ni dans une `note` : c'est un réglage que le pratiquant
  coche, et le matériel réellement possédé est une donnée de `PERSO.md`.
- **Élastique et kettlebell peuvent coexister** : dans un même programme, dans une même séance,
  et même sur un même exercice (`charge:["kettlebell","elastique"]` affiche les deux blocs).
  Ne t'en sers que si l'exercice combine vraiment les deux.
- `charge:[]` pour le poids du corps : aucun sélecteur, la carte affiche « Poids du corps ».
- `rule` est le seul endroit de l'app où le temps de repos est écrit : il doit y être
  **chiffré** (`"25 min · repos 60 s"`), jamais « repos court ».
- **Les côtés passent par `unit`**, pas par la note : `"par jambe"`, `"par bras"`, `"par côté"`.
  C'est ce qui dit au lecteur que l'exercice se fait des deux côtés.
- **Aucune donnée personnelle dans le fichier** — il est commité, le dépôt est public. Pas de
  poids de corps, pas d'âge, pas de jour de la semaine dans une `note`.

## Le fichier `aides.js`

Un programme livré sans ses aides est un programme à moitié livré : la `note` d'une carte tient
en une phrase, tout le reste — installation, déroulé, réglage, erreurs — vit dans `aides.js`.

Une entrée, indexée par la clé que porte le champ `aide` :

```js
  A["rowing-un-bras"] = {
    titre:"Rowing kettlebell à un bras",
    resume:"Une phrase : à quoi sert l'exercice, ou le piège principal.",
    installation:[
      "Une étape par entrée, à l'impératif, dans l'ordre chronologique.",
      "Tout ce qu'il faut placer AVANT de bouger : matériel, appuis, position de départ."
    ],
    mouvement:[
      "Le geste, décomposé. Où va le coude, ce qui bouge, ce qui ne bouge pas.",
      "Toujours dire où se placent les récups et si l'exercice se fait des deux côtés."
    ],
    reglage:[
      "Trop dur : …",
      "Trop facile : … — pour un élastique, cumuler ; pour une kettlebell unique, tempo et densité."
    ],
    rate:[
      "Le signe visible ou ressenti que l'exécution est fausse, et quoi faire."
    ],
    pourquoi:"Une ou deux phrases : ce que l'exercice apporte, et pourquoi il est à cette place."
  };
```

Règles :

- **Les cinq champs de liste sont obligatoires**, `pourquoi` compris. Une aide amputée se
  remarque tout de suite sur le téléphone.
- **Une clé par exercice réel, pas par ligne de programme.** Les pompes apparaissent dans deux
  programmes : une seule entrée `pompes`, référencée deux fois.
- **Clés en minuscules, sans accent, tirets comme séparateurs** : `rowing-un-bras`.
- **Ton identique aux `note`** : on décrit un geste, jamais une sensation, et on écrit pour
  quelqu'un qui lit seul, à 7 h du matin, sans rien savoir.
- **Aucune donnée personnelle** : le fichier est commité. Pas de poids de corps, pas de jour de
  la semaine, pas de poids de kettlebell en kilos. Si un exercice suppose un matériel qu'on peut
  ne pas avoir (point d'ancrage, barre), écris la condition — « sans point d'ancrage, remplace
  par… » — jamais l'instanciation.

## Avant de toucher au moindre fichier

**Un programme existant ne se modifie que sur demande explicite** (voir `SKILL.md`). La
checklist ci-dessous concerne la création d'un **nouveau** fichier. Si la demande porte sur un
programme déjà en place, relis la demande : si elle ne nomme pas ce programme, ne l'ouvre pas.

Quand une modification est explicitement demandée :

- **Ajouter** un exercice : nouvel `id` jamais utilisé dans ce programme, même si un ancien est
  libre.
- **Retirer** un exercice : signaler que son réglage d'élastique reste orphelin dans
  `localStorage` — sans conséquence, mais le dire.
- **Ne jamais renommer un `id`** pour « mieux ranger ». Le nom du fichier peut changer, l'`id`
  non.

## Checklist d'installation

Dans cet ordre, **dans le même commit** :

1. Créer `programmes/NN-nom.js` sur le modèle de `01-elastique.js` (`NN` = rang voulu dans le
   sélecteur).
2. Ajouter `<script src="programmes/NN-nom.js"></script>` dans `index.html`, à côté des autres,
   **avant** le `<script>` applicatif. L'ordre des `<script>` est l'ordre du sélecteur.
3. Écrire dans `aides.js` l'entrée de chaque exercice qui n'en a pas encore, et relier chaque
   exercice par son champ `aide`.
4. Ajouter `"./programmes/NN-nom.js"` au tableau `ASSETS` de `sw.js`.
5. **Bumper les deux versions** : `var CACHE = "programme-vN";` dans `sw.js` **et**
   `<p class="saved">version N</p>` dans `index.html`. Sans ça, les appareils gardent l'ancienne
   version en cache.
6. Vérifier : `python3 -m http.server 8000`, puis `http://localhost:8000`.

## Contrôle avant de rendre

D'abord le vérificateur. Il passe en une seconde, depuis la racine du dépôt :

```sh
node .claude/skills/coach/scripts/verifier-programme.js programmes/NN-nom.js
```

Il contrôle la syntaxe, l'unicité des `id`, la typographie de `reps`, les `unit` autorisées, le
type de `band`, la longueur des `note`, la mise en forme (deux-points, virgules finales, lignes
vides, alignement), l'absence de donnée personnelle, la déclaration du fichier dans `index.html`
et dans `ASSETS` de `sw.js`, et le bump de version des deux côtés. Tant qu'il sort en erreur, le
fichier n'est pas prêt — inutile de relire le reste.

Ensuite, ce qu'aucun script ne peut voir. Relis et vérifie, une par une :

- [ ] La séance tient vraiment dans 25 minutes, échauffement et repos compris — refais le calcul
      à voix haute, un exercice unilatéral compte double.
- [ ] 3 à 5 exercices par séance, **un seul** mouvement lourd, le reste en superset.
- [ ] Chaque `note` est exécutable seul à 7 h du matin sans rien savoir : elle décrit un geste,
      pas une sensation.
- [ ] Aucun exercice marqué ⛔ dans `references/exercices.md` (clean, snatch, get-up) : le
      pratiquant est débutant.
- [ ] `unit` dit les côtés (`"par jambe"`, `"par bras"`, `"par côté"`) dès que l'exercice est
      unilatéral — c'est le seul endroit où l'app le signale.
- [ ] Un mouvement balistique n'est ni en premier à froid, ni en dernier sur fatigue.

Puis, dans le navigateur :

- Le programme apparaît dans le sélecteur, ses onglets se construisent, aucune erreur console.
- Cocher un exercice puis recharger : la coche persiste (elle se remet à zéro le lendemain).
- Sélectionner une couleur d'élastique puis recharger : la sélection persiste.
- Sur un exercice kettlebell, cocher un poids puis recharger : il persiste, et cocher un autre
  poids remplace le premier au lieu de s'y ajouter.
- Sur un exercice `charge:[]`, la carte affiche « Poids du corps » et aucun sélecteur.
- Le bouton « Comment faire ? » ouvre le bon exercice, les cinq sections sont là, et « Fermer »
  ramène au même endroit dans la liste.
- Les réglages de l'autre programme n'ont pas bougé.
