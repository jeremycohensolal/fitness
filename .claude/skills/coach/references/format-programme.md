# Format d'un programme et installation dans l'app

À lire **dès que le résultat du coaching doit atterrir dans l'app**, et à relire avant de
rendre le fichier. Le modèle de référence est `programmes/01-elastique.js` : ouvre-le, copie-le,
modifie la copie. Ne réécris jamais la structure de mémoire.

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

```js
/* Programme <nom> — données seules, aucun code d'application ici.
   Pour ajouter un programme : copier ce fichier, changer « id » et « name »,
   puis l'inscrire dans index.html (<script src>) et dans ASSETS de sw.js. */
(function(){
  "use strict";

  window.PROGRAMMES = window.PROGRAMMES || [];

  window.PROGRAMMES.push({
    id:"kettlebell",                 /* clé de stockage — ne jamais renommer */
    name:"Kettlebell",               /* libellé dans le sélecteur */
    title:"Programme kettlebell",    /* <h1> et <title> */
    rule:"25 min · repos 60 s",      /* bandeau règle */
    seances:[
      {
        id:"A", tab:"Prog 1", label:"Haut du corps",
        exos:[
          {id:"k1", group:"Hinge · explosif", name:"Swing à deux mains",
           reps:"4 × 15", unit:"reps", band:false,
           note:"Le geste vient des hanches, pas des bras."},

          {id:"k2", group:"Épaules", name:"Press militaire",
           reps:"3 × 8", unit:"par bras", band:false,
           note:"Gainage serré, tu pousses vers le plafond sans cambrer."}
        ]
      },
      {
        id:"B", tab:"Prog 2", label:"Bas du corps + tronc",
        exos:[
          {id:"k3", group:"Jambes", name:"Goblet squat",
           reps:"4 × 10", unit:"reps", band:false,
           note:"Kettlebell contre la poitrine, coudes à l'intérieur des genoux en bas."}
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
- **Un exercice tient sur trois lignes**, toujours découpées de la même façon :
  1. `{id:…, group:…, name:…,`
  2. ` reps:…, unit:…, band:…,` — alignée sous le `i` de `id` (11 espaces)
  3. ` note:…},` — même alignement
- **Une ligne vide entre deux exercices**, aucune après le dernier.
- **Typographie française** : `×` (U+00D7) pour la multiplication, `–` (tiret demi-cadratin)
  pour les fourchettes, `·` pour les séparateurs de `group`, apostrophes courbes `'`.
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
| `band` | booléen | `true` ⇒ sélecteur de couleurs d'élastique. `false` ⇒ affiche « Poids du corps ». |
| `note` | chaîne | **Une phrase, un seul cue**, en langage courant — elle est lue par un débutant, seul, à 7 h du matin. Décris le geste, pas la sensation. Pas de paragraphe : la carte se lit sur un téléphone. |

### Points d'attention

- **Le nombre de séances n'est pas limité à deux** — l'app construit un onglet par entrée de
  `seances`. Mais sur mobile, au-delà de trois onglets ça devient serré.
- Les `id` d'exercice servent de clés de stockage sous `prog.band.<progId>.<exoId>` et dans
  `prog.ticks.<progId>`. Renommer un `id` rattache un ancien réglage au mauvais exercice.
- Les élastiques sont **cumulables** : le sélecteur stocke une liste de couleurs. C'est le
  levier de progression en charge — inutile de créer un exercice « version lourde ».
- `band:false` pour tout ce qui est kettlebell ou poids du corps : le sélecteur de couleurs n'a
  pas de sens là.
- `rule` est le seul endroit de l'app où le temps de repos est écrit : il doit y être
  **chiffré** (`"25 min · repos 60 s"`), jamais « repos court ».
- **Les côtés passent par `unit`**, pas par la note : `"par jambe"`, `"par bras"`, `"par côté"`.
  C'est ce qui dit au lecteur que l'exercice se fait des deux côtés.
- **Aucune donnée personnelle dans le fichier** — il est commité, le dépôt est public. Pas de
  poids de corps, pas d'âge, pas de jour de la semaine dans une `note`.

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
3. Ajouter `"./programmes/NN-nom.js"` au tableau `ASSETS` de `sw.js`.
4. **Bumper les deux versions** : `var CACHE = "programme-vN";` dans `sw.js` **et**
   `<p class="saved">version N</p>` dans `index.html`. Sans ça, les appareils gardent l'ancienne
   version en cache.
5. Vérifier : `python3 -m http.server 8000`, puis `http://localhost:8000`.

## Contrôle avant de rendre

Relis le fichier produit et vérifie, une par une :

- [ ] `node --check programmes/NN-nom.js` passe (ou à défaut, aucune erreur dans la console).
- [ ] Tous les `id` d'exercice sont uniques dans le programme.
- [ ] Chaque `reps` est une **chaîne**, avec `×` et `–`.
- [ ] Chaque `unit` fait partie de la liste autorisée.
- [ ] Chaque exercice non-élastique a `band:false`.
- [ ] Chaque `note` tient en une phrase.
- [ ] Une ligne vide entre chaque exercice, aucune virgule finale parasite.
- [ ] Aucune donnée personnelle nulle part.
- [ ] Les trois autres fichiers (`index.html`, `sw.js` ×2) sont à jour.

Puis, dans le navigateur :

- Le programme apparaît dans le sélecteur, ses onglets se construisent, aucune erreur console.
- Cocher un exercice puis recharger : la coche persiste (elle se remet à zéro le lendemain).
- Sélectionner une couleur d'élastique puis recharger : la sélection persiste.
- Les réglages de l'autre programme n'ont pas bougé.
