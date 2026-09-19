# Catalogue d'exercices

Pour chaque exercice : **groupe** (à reprendre tel quel dans le champ `group` de l'app),
**cue** (une phrase, réutilisable tel quel comme `note`), **régression** et **progression**.

Rappel du cadre : séance du matin, 25 minutes tout compris. Préfère toujours un composé à deux
isolations, et un exercice sans installation à un exercice qui demande de tout déplacer.

**Pratiquant débutant en muscu et en kettlebell.** La ligne « Régression » est le **point de
départ par défaut**, pas un repli en cas de problème. La ligne « Progression » se propose plus
tard, quand l'exécution est propre — pas dès la première semaine. Les exercices marqués
**⛔ plus tard** ne se proposent pas à un débutant, même s'ils sont efficaces.

Les exercices notés `par jambe`, `par bras` ou `par côté` se font **des deux côtés** : le dire
explicitement dans la réponse, et préciser où se place la récup entre les deux côtés.

## Élastiques

### Poussée

**Pompes** — `group: "Poussée"`
Cue : « Élastique dans le dos, passé sous les mains. »
Régression : mains surélevées sur une chaise, ou sans élastique.
Progression : élastique plus fort, pieds surélevés, tempo 3 s à la descente, puis pompes
archer.

**Développé debout** — `group: "Poussée"`
Cue : « Élastique dans le dos, tu pousses vers l'avant. »
Régression : reculer d'un pas pour réduire la tension.
Progression : avancer, cumuler un élastique, passer à un bras (ajoute de l'anti-rotation).

**Développé au-dessus de la tête** — `group: "Épaules"`
Cue : « Debout sur l'élastique, tu pousses vers le plafond. »
Régression : à genoux pour verrouiller les lombaires, ou amplitude partielle.
Progression : un bras, tempo, cumuler un élastique.
Attention le matin : ne pas le mettre en premier exercice à froid, les épaules ont besoin de
mobilité thoracique disponible.

### Tirage

**Rowing horizontal** — `group: "Tirage"`
Cue : « Coudes serrés le long du corps, omoplates serrées. »
Régression : moins de tension, amplitude réduite.
Progression : un bras, pause 1 s en contraction, cumuler un élastique.

**Face pull** — `group: "Tirage"`
Cue : « Tirage vers le visage, coudes hauts. Santé d'épaule. »
Le poste qu'on ne coupe jamais quand on coupe : c'est l'assurance épaule d'un pratiquant de
sport de combat. Se marie parfaitement en superset avec n'importe quelle poussée.

**Tirage vertical (lat pulldown élastique)** — `group: "Tirage"`
Cue : « Élastique ancré en haut, tu tires les coudes vers les hanches. »
Régression : à genoux, tension réduite.
Progression : un bras, tempo.

### Jambes et chaîne postérieure

**Squat** — `group: "Jambes"`
Cue : « Debout sur l'élastique, poignées aux épaules. »
Progression : tempo, pause en bas, puis unilatéral.

**Fentes arrière** — `group: "Jambes · unilatéral"` — `unit: "par jambe"`
Cue : « Toutes les reps d'un côté, puis l'autre. Commence par la jambe faible. »
Coûte deux fois plus de temps qu'un exercice bilatéral : à budgéter.

**Squat bulgare** — `group: "Jambes · unilatéral"` — `unit: "par jambe"`
Cue : « Pied arrière sur une chaise. Debout sur l'élastique, poignées aux épaules. »
L'exercice de jambes le plus rentable en charge relative. À placer le plus loin possible du
prochain entraînement de combat — il laisse des courbatures.

**Good morning** — `group: "Chaîne postérieure"`
Cue : « Dos plat, tu penches le buste et tu remontes. Ischios et fessiers. »
**Jamais en premier exercice au lever** : flexion lombaire à froid. Le placer après un squat ou
un travail de hanche léger.

### Tronc

**Planche** — `group: "Tronc"` — `unit: "secondes"`, `band: false`
Cue : « Bassin verrouillé, fessiers serrés. »
Progression : planche sur un appui, ou ajouter un déplacement de main.

**Pallof press** — `group: "Tronc · anti-rotation"` — `unit: "par côté"`
Cue : « Élastique ancré de côté, tu tends les bras devant sans laisser le buste tourner. »
Le meilleur transfert vers le sport de combat du catalogue : c'est exactement ce que fait le
tronc quand on frappe. Pas de charge lombaire, donc parfait en séance du matin.

**Tirage de côté** — `group: "Tronc · unilatéral"` — `unit: "par côté"`
Cue : « Debout sur l'élastique, inclinaison latérale. Un côté entier, puis l'autre. »

**Superman** — `group: "Lombaires"` — `band: false`
Cue : « À plat ventre, relevé du buste. Sans à-coups. »

### Bras (à couper en premier si le temps manque)

**Curl biceps** — `group: "Bras"` — Cue : « Paumes vers le haut, coudes fixes. »
**Extension triceps** — `group: "Bras · optionnel"` — Cue : « Élastique ancré en haut, tu tends
les bras vers le bas. »

## Kettlebell

L'outil idéal du format 25 minutes : un seul engin, zéro installation, des mouvements composés.
Vérifie les poids réellement disponibles dans `PERSO.md`.

**Deadlift kettlebell** — `group: "Chaîne postérieure"`
Cue : « Kettlebell entre les pieds, dos plat, tu pousses le sol avec les talons. »
C'est l'exercice d'apprentissage du hinge. Prérequis à tout le reste.

**Swing à deux mains** — `group: "Hinge · explosif"`
Cue : « Le geste vient des hanches, pas des bras. La kettlebell flotte, elle ne se soulève pas. »
Régression : deadlift, puis swing à mi-amplitude.
Progression : plus de reps, kettlebell plus lourde, puis swing à une main (anti-rotation).
Placement : juste après l'échauffement, jamais en tout premier à froid ni en fin de séance sur
fatigue.

**Goblet squat** — `group: "Jambes"`
Cue : « Kettlebell contre la poitrine, coudes à l'intérieur des genoux en bas. »
La position avant du poids force un dos droit : c'est le squat le plus sûr à froid le matin.

**Clean** — `group: "Hinge · technique"` — `unit: "par bras"` — **⛔ plus tard**
Cue : « Tu guides la kettlebell le long du corps, elle se pose sur l'avant-bras sans claquer. »
Si ça claque sur l'avant-bras, le geste est faux : revenir au swing à une main.

**Press militaire** — `group: "Épaules"` — `unit: "par bras"`
Cue : « Gainage serré, tu pousses vers le plafond sans cambrer. »

**Clean & press** — `group: "Complexe"` — `unit: "par bras"` — **⛔ plus tard**
Deux exercices en un : le rendement temps est imbattable sur un format court. Suppose un clean
déjà propre.

**Turkish get-up** — `group: "Complexe · mobilité"` — `unit: "par côté"` — **⛔ plus tard**
Cue : « Lent, une étape à la fois, les yeux sur la kettlebell. »
Excellent en séance du matin : ça réveille l'épaule et la hanche. Mais c'est lent — une seule
répétition par côté coûte facilement une minute.

**Farmer's walk / valise** — `group: "Portés · anti-flexion"` — `unit: "secondes"`
Cue : « Une seule kettlebell d'un côté, tu marches sans te laisser pencher. »
Transfert direct en sport de combat, coût technique nul, se case en fin de séance.

**Snatch** — `group: "Hinge · explosif"` — `unit: "par bras"` — **⛔ plus tard**
N'y va que si le clean est propre. Sinon, ça ne sert à rien d'autre qu'à se faire mal à l'épaule.

## Poids du corps

`band: false` sur tous ces exercices.

**Gainage latéral** — `group: "Tronc · unilatéral"` — `unit: "par côté"`
Cue : « Appui sur l'avant-bras, hanches hautes, corps en ligne. »

**Hollow hold** — `group: "Tronc"` — `unit: "secondes"`
Cue : « Bas du dos plaqué au sol, épaules et jambes décollées. »

**Dead bug** — `group: "Tronc · anti-extension"` — `unit: "reps"`
Cue : « Bras et jambe opposés qui s'éloignent, sans que le bas du dos décolle. »
Parfait en échauffement de séance du matin.

**Pont fessier** — `group: "Chaîne postérieure"` — `unit: "reps"`
Cue : « Tu pousses le bassin vers le plafond, fessiers serrés en haut. »
Réveille la chaîne postérieure sans charge lombaire — idéal juste après le lever.

**Traction** — `group: "Tirage"` — `unit: "reps"`
Cue : « Omoplates basses avant de tirer, menton au-dessus de la barre. »
Nécessite une barre : vérifier dans `PERSO.md` avant de la proposer.

## Échauffement (à ne jamais couper)

Pour une séance du matin, 3 à 5 minutes, dans cet ordre :

1. **Élévation cardiaque** — 60–90 s : montées de genoux, corde à sauter, jumping jacks.
2. **Mobilité thoracique et hanches** — chat/vache, rotations thoraciques au sol, cercles de
   hanche, fentes avec rotation. 60–90 s.
3. **Activation du tronc** — dead bug ou pont fessier, une série courte. 30 s.
4. **Série de mise en route** du premier exercice, à charge très réduite. Elle ne compte pas
   dans le volume de la séance.
