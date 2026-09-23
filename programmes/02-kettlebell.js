/* Programme kettlebell — données seules, aucun code d'application ici.
   Pour ajouter un programme : copier ce fichier, changer « id » et « name »,
   puis l'inscrire dans index.html (<script src>) et dans ASSETS de sw.js. */
(function(){
  "use strict";

  window.PROGRAMMES = window.PROGRAMMES || [];

  window.PROGRAMMES.push({
    id:"kettlebell",               /* clé de stockage — ne jamais renommer */
    name:"Kettlebell",             /* libellé dans le sélecteur */
    title:"Programme kettlebell",  /* <h1> et <title> */
    rule:"25 min · repos 45–75 s", /* bandeau règle */
    seances:[
      {
        id:"A", tab:"Prog 1", label:"Bas du corps",
        exos:[
          {id:"k1", group:"Jambes", name:"Goblet squat",
           reps:"4 × 8–10", unit:"reps", charge:["kettlebell"],
           note:"Kettlebell contre la poitrine, coudes à l'intérieur des genoux en bas.",
           aide:"goblet-squat"},

          {id:"k2", group:"Hinge · explosif", name:"Swing à deux mains",
           reps:"3 × 15", unit:"reps", charge:["kettlebell"],
           note:"Le geste vient des hanches, pas des bras. La kettlebell flotte.",
           aide:"swing"},

          {id:"k3", group:"Jambes · unilatéral", name:"Fentes arrière",
           reps:"3 × 8", unit:"par jambe", charge:["kettlebell"],
           note:"Kettlebell contre la poitrine, toutes les reps d'un côté puis l'autre.",
           aide:"fentes-arriere"},

          {id:"k4", group:"Tronc · unilatéral", name:"Gainage latéral",
           reps:"3 séries", unit:"par côté", charge:[], durees:[20,25,30,45],
           note:"Appui sur l'avant-bras, hanches hautes, corps en ligne.",
           aide:"gainage-lateral"}
        ]
      },
      {
        id:"B", tab:"Prog 2", label:"Dos + tirage",
        exos:[
          {id:"k10", group:"Tirage · unilatéral", name:"Rowing kettlebell à un bras",
           reps:"4 × 8–10", unit:"par bras", charge:["kettlebell"],
           note:"Main libre en appui sur une chaise, dos plat, tu tires la kettlebell vers la hanche.",
           aide:"rowing-un-bras"},

          {id:"k7", group:"Tirage", name:"Rowing horizontal",
           reps:"3 × 12", unit:"reps", charge:["elastique"],
           note:"Assis au sol, élastique autour des pieds, tu tires les coudes le long du corps.",
           aide:"rowing-horizontal"},

          {id:"k8", group:"Tirage", name:"Tirage écarté",
           reps:"3 × 15", unit:"reps", charge:["elastique"],
           note:"Élastique tendu devant toi à deux mains, tu écartes les bras sans hausser les épaules.",
           aide:"tirage-ecarte"},

          {id:"k11", group:"Bras · optionnel", name:"Curl biceps",
           reps:"2 × 12", unit:"reps", charge:["elastique"],
           note:"Debout sur l'élastique, paumes vers le haut, coudes fixes le long du corps.",
           aide:"curl-biceps"},

          {id:"k9", group:"Portés · anti-flexion", name:"Marche valise",
           reps:"2 séries", unit:"par côté", charge:["kettlebell"], durees:[30,45,60],
           note:"Une seule kettlebell d'un côté, tu marches sans te laisser pencher.",
           aide:"marche-valise"}
        ]
      },
      {
        id:"C", tab:"Prog 3", label:"Pecs + épaules",
        exos:[
          {id:"k12", group:"Poussée · unilatéral", name:"Floor press",
           reps:"4 × 8", unit:"par bras", charge:["kettlebell"],
           note:"Allongé sur le dos, tu pousses la kettlebell vers le plafond, le coude s'arrête au sol.",
           aide:"floor-press"},

          {id:"k6", group:"Poussée", name:"Pompes",
           reps:"3 × 8–12", unit:"reps", charge:["elastique"],
           note:"Élastique dans le dos, passé sous les mains.",
           aide:"pompes"},

          {id:"k13", group:"Poussée · isolation", name:"Écarté à l'élastique",
           reps:"3 × 12", unit:"reps", charge:["elastique"],
           note:"Élastique dans le dos, bras tendus, tu rapproches les mains devant toi.",
           aide:"ecarte-poitrine"},

          {id:"k5", group:"Épaules", name:"Press militaire",
           reps:"3 × 6–8", unit:"par bras", charge:["kettlebell"],
           note:"Gainage serré, tu pousses vers le plafond sans cambrer.",
           aide:"press-militaire"},

          {id:"k14", group:"Épaules · isolation", name:"Élévation latérale",
           reps:"3 × 15", unit:"reps", charge:["elastique"],
           note:"Debout sur l'élastique, tu lèves les bras sur les côtés jusqu'à l'horizontale.",
           aide:"elevation-laterale"}
        ]
      }
    ]
  });
})();
