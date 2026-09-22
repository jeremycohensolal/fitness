/* Programme élastiques — données seules, aucun code d'application ici.
   Pour ajouter un programme : copier ce fichier, changer « id » et « name »,
   puis l'inscrire dans index.html (<script src>) et dans ASSETS de sw.js. */
(function(){
  "use strict";

  window.PROGRAMMES = window.PROGRAMMES || [];

  window.PROGRAMMES.push({
    id:"elastiques",                 /* clé de stockage — ne jamais renommer */
    name:"Élastiques",               /* libellé dans le sélecteur */
    title:"Programme élastiques",    /* <h1> et <title> */
    rule:"3 séries · repos 60–90 s", /* bandeau règle */
    seances:[
      {
        id:"A", tab:"Prog 1", label:"Haut du corps",
        exos:[
          {id:"a1", group:"Poussée", name:"Pompes",
           reps:"3 × 10–15", unit:"reps", band:true,
           note:"Élastique dans le dos, passé sous les mains.",
           aide:"pompes"},

          {id:"a2", group:"Poussée", name:"Développé debout",
           reps:"3 × 12", unit:"reps", band:true,
           note:"Élastique dans le dos, tu pousses vers l'avant.",
           aide:"developpe-debout"},

          {id:"a3", group:"Épaules", name:"Développé au-dessus de la tête",
           reps:"3 × 12", unit:"reps", band:true,
           note:"Debout sur l'élastique, tu pousses vers le plafond.",
           aide:"developpe-tete"},

          {id:"a4", group:"Tirage", name:"Rowing horizontal",
           reps:"3 × 12", unit:"reps", band:true,
           note:"Coudes serrés le long du corps, omoplates serrées.",
           aide:"rowing-horizontal"},

          {id:"a5", group:"Tirage", name:"Face pull",
           reps:"3 × 15", unit:"reps", band:true,
           note:"Tirage vers le visage, coudes hauts. Santé d'épaule.",
           aide:"face-pull"},

          {id:"a6", group:"Bras", name:"Curl biceps",
           reps:"3 × 12", unit:"reps", band:true,
           note:"Paumes vers le haut, coudes fixes.",
           aide:"curl-biceps"},

          {id:"a7", group:"Bras · optionnel", name:"Extension triceps",
           reps:"3 × 12", unit:"reps", band:true,
           note:"Élastique ancré en haut, tu tends les bras vers le bas.",
           aide:"extension-triceps"}
        ]
      },
      {
        id:"B", tab:"Prog 2", label:"Bas du corps + tronc",
        exos:[
          {id:"b1", group:"Jambes", name:"Squat",
           reps:"3 × 12–15", unit:"reps", band:true,
           note:"Debout sur l'élastique, poignées aux épaules.",
           aide:"squat-elastique"},

          {id:"b2", group:"Jambes · unilatéral", name:"Fentes arrière",
           reps:"3 × 10", unit:"par jambe", band:true,
           note:"Toutes les reps d'un côté, puis l'autre. Commence par la jambe faible.",
           aide:"fentes-arriere"},

          {id:"b3", group:"Jambes · unilatéral", name:"Squat bulgare",
           reps:"3 × 8–10", unit:"par jambe", band:true,
           note:"Pied arrière sur une chaise. Debout sur l'élastique, poignées aux épaules.",
           aide:"squat-bulgare"},

          {id:"b4", group:"Chaîne postérieure", name:"Good morning",
           reps:"3 × 12", unit:"reps", band:true,
           note:"Dos plat, tu penches le buste et tu remontes. Ischios et fessiers.",
           aide:"good-morning"},

          {id:"b5", group:"Tronc", name:"Planche",
           reps:"3 × 45–60", unit:"secondes", band:false,
           note:"Bassin verrouillé, fessiers serrés.",
           aide:"planche"},

          {id:"b6", group:"Tronc · unilatéral", name:"Tirage de côté",
           reps:"2 × 20", unit:"par côté", band:true,
           note:"Debout sur l'élastique, inclinaison latérale. Un côté entier, puis l'autre.",
           aide:"tirage-cote"},

          {id:"b7", group:"Lombaires", name:"Superman",
           reps:"2 × 15", unit:"reps", band:false,
           note:"À plat ventre, relevé du buste. Sans à-coups.",
           aide:"superman"}
        ]
      }
    ]
  });
})();
