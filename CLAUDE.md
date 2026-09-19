# CLAUDE.md

Suivi personnel de séances d'entraînement (élastiques / kettlebell). PWA d'une seule page,
sans build, déployée sur GitHub Pages : https://jeremycohensolal.github.io/fitness/

## Contraintes non négociables

- **Pas de build, pas de dépendances.** GitHub Pages sert les fichiers bruts de `main`.
  Pas de npm, pas de bundler, pas de framework, pas de CDN externe. JS vanilla uniquement.
- **Mobile d'abord.** L'app est utilisée au téléphone, souvent installée sur l'écran d'accueil
  iOS. Cibles tactiles ≥ 30 px, `env(safe-area-inset-*)` respecté, layout en une colonne.
- **Aucune donnée personnelle.** Tout l'état reste en `localStorage`. Pas de backend, pas
  d'analytics, pas de tracker, pas de requête réseau vers un tiers. Le dépôt est public :
  les données du pratiquant vivent dans `PERSO.md`, gitignoré, et n'en sortent jamais.
- **Un programme existant ne se modifie que sur demande explicite.** Les `id` d'exercice sont
  des clés de `localStorage` : y toucher casse des réglages accumulés séance après séance.
- **Chemins relatifs uniquement** (`./index.html`, `icon-180.png`). Le site est servi depuis le
  sous-chemin `/fitness/` : un chemin absolu `/...` casse tout.

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | L'app : HTML, CSS (`<style>`), JS (`<script>` en IIFE). Aucune donnée d'exercice. |
| `programmes/NN-nom.js` | Un fichier par programme : titre, règle, onglets, exercices. Chargés par `<script src>`. Le préfixe numérique fixe l'ordre du sélecteur. |
| `sw.js` | Service worker. Page = réseau d'abord ; assets = cache d'abord + rafraîchissement silencieux. |
| `manifest.webmanifest` | Manifeste PWA. |
| `icon-180.png`, `icon-512.png` | Icônes (iOS / PWA). |
| `PERSO.md` | Profil, matériel et planning du pratiquant. **Gitignoré — ne jamais le commiter ni recopier son contenu dans un fichier versionné.** Source de vérité pour tout le coaching. |
| `.claude/skills/coach/` | Skill de coaching : règles de programmation, catalogue d'exercices, format des fichiers `programmes/`. |

## À faire à chaque modification de l'app

Incrémenter **les deux** dans le même commit :

1. `sw.js` → `var CACHE = "programme-vN";`
2. `index.html` → `<p class="saved">version N</p>` (bas de page)

Sans ce bump, les appareils gardent l'ancienne version en cache. Si un asset est ajouté ou
renommé, l'inscrire aussi dans `ASSETS` de `sw.js`.

## Ajouter un programme

1. Créer `programmes/NN-nom.js` sur le modèle de `programmes/01-elastique.js` (`NN` = rang
   dans le sélecteur).
2. L'inclure dans `index.html` : `<script src="programmes/NN-nom.js"></script>`, avant le
   `<script>` de l'app. L'ordre des `<script>` est l'ordre du sélecteur.
3. L'ajouter à `ASSETS` dans `sw.js` : `"./programmes/NN-nom.js"`.
   Renommer un fichier de programme compte aussi : mettre à jour les deux endroits.
   Le `id` du programme, lui, est une clé de `localStorage` : il ne suit pas le nom du
   fichier et ne doit jamais changer.
4. Bumper la version (voir ci-dessus).

Le sélecteur de programme apparaît tout seul dès qu'il y a plus d'un programme ; il reste
masqué s'il n'y en a qu'un. Rien d'autre à toucher dans `index.html`.

## Concevoir un entraînement

Tout ce qui touche au contenu des séances — choix des exercices, séries, reps, progression,
répartition de la semaine — passe par le skill `coach` (`.claude/skills/coach/`). Il porte le
cadre : séances le matin au lever, 25 minutes maximum, pratiquant débutant en muscu et en
kettlebell. Le profil et le planning, eux, ne sont pas dans le skill — ils se lisent dans
`PERSO.md`, qui ne doit jamais être commité.

## Conventions de code

- **JS style ES5** : `var`, `function(){}`, `"use strict"`, tout dans une IIFE. Pas de `let`,
  d'arrow function ni de module — rester homogène avec l'existant.
- **Construction du DOM** via `document.createElement` + `textContent`. Jamais `innerHTML`.
- **CSS** : variables dans `:root`, classes en minuscules avec tirets (`.exo-name`, `.bands-label`).
  Palette : `--paper`, `--card`, `--ink`, `--ink-soft`, `--rule`. Couleurs d'élastiques en dur
  dans le tableau `BANDS` *et* dans `:root`.
- **Français partout** : libellés d'interface, commentaires, `aria-label`.
- **Accessibilité** : onglets en `role="tab"` / `aria-selected`, boutons bascules en
  `aria-pressed`, `:focus-visible` visible. Conserver ces attributs à chaque ajout.

## Modèle de données

- Chaque fichier `programmes/*.js` s'ajoute lui-même à `window.PROGRAMMES` :
  `{id, name, title, rule, seances}`. `name` est le libellé du sélecteur, `title` le `<h1>` et
  le `<title>`, `rule` le bandeau noir.
- Une séance = `{id, tab, label, exos}` — `tab` et `label` sont les deux lignes de l'onglet.
  Le nombre de séances est libre (1, 2, 3…) ; les onglets sont générés à partir de cette liste.
- Un exercice = `{id, group, name, reps, unit, charge, note}`. `charge` liste le matériel :
  `["elastique"]`, `["kettlebell"]`, les deux (un bloc de réglage par matériel, dans cet ordre),
  ou `[]` ⇒ affiche « Poids du corps ».
- **`band` est l'ancien champ, conservé pour les programmes antérieurs** : `band:true` vaut
  `["elastique"]`, `band:false` vaut `[]`. Un nouveau programme utilise `charge`, jamais les
  deux ensemble. Ne pas retirer ce repli tant que `01-elastique.js` est en place.
- Les deux catalogues de charge sont en dur dans `index.html` : `BANDS` (cinq couleurs,
  **cumulables** — le sélecteur mémorise une liste) et `KETTLEBELLS` (poids en kilos,
  **exclusifs** — une seule cloche à la fois). Aucun poids de kettlebell dans les
  `programmes/*.js` : c'est un réglage, pas une donnée de programme.
- Les `id` de programme (`elastiques`, `kettlebell`) et d'exercice (`a1`…`a7`, `b1`…`b7`,
  `k1`…`k9`) sont les clés de `localStorage` : **ne jamais les réutiliser ni les renommer**,
  sous peine de rattacher un ancien réglage au mauvais exercice.
- Clés `localStorage`, toutes préfixées par le programme :
  `prog.current` (id du programme affiché), `prog.ticks.<progId>` (`{date, done}`, remis à zéro
  chaque jour), `prog.band.<progId>.<exoId>` (liste d'ids d'élastiques),
  `prog.kb.<progId>.<exoId>` (un poids de kettlebell), `prog.tab.<progId>`.
- `prog.migrated.v6` marque la migration unique depuis les anciennes clés non préfixées
  (`prog.ticks`, `prog.band.<exoId>`, `prog.tab`). Ne pas supprimer ce code tant que des
  téléphones peuvent encore porter l'ancien stockage.

## Tester

Pas de suite de tests. Servir localement et vérifier au téléphone / en mode responsive :

```sh
python3 -m http.server 8000   # puis http://localhost:8000
```

Pour retester le service worker proprement : DevTools → Application → Service Workers →
Unregister, puis vider le cache.

## Déployer

`git push` sur `main` — GitHub Pages publie la racine du dépôt. Aucun workflow CI.
