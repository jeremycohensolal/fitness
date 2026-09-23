/* Aides d'exercice — données seules, aucun code d'application ici.
   Une entrée par exercice, indexée par le champ « aide » des fichiers
   programmes/*.js. Deux programmes qui partagent un exercice partagent son
   aide : on réutilise la clé, on ne duplique pas le texte.
   Toute clé référencée par un programme doit exister ici, sinon le bouton
   d'aide ne s'affiche pas sur la carte. */
(function(){
  "use strict";

  window.AIDES = window.AIDES || {};

  var A = window.AIDES;

  /* ---------- Kettlebell : bas du corps ---------- */

  A["goblet-squat"] = {
    titre:"Goblet squat",
    resume:"Le squat le plus sûr à froid : le poids devant t'oblige à garder le dos droit.",
    installation:[
      "Attrape la kettlebell à deux mains par les côtés de la poignée, comme un gobelet.",
      "Cale-la contre ta poitrine, coudes pointés vers le bas et serrés contre toi.",
      "Pieds écartés à la largeur des épaules, pointes légèrement tournées vers l'extérieur."
    ],
    mouvement:[
      "Descends en poussant les genoux vers l'extérieur, dans l'axe de tes pieds.",
      "En bas, tes coudes passent à l'intérieur de tes genoux. Marque un temps d'arrêt.",
      "Remonte en poussant le sol avec les talons, sans laisser les genoux rentrer.",
      "Reste grand : la kettlebell ne doit jamais t'entraîner vers l'avant."
    ],
    reglage:[
      "Trop dur : descends moins bas, ou pose les fesses sur une chaise et relève-toi.",
      "Trop facile : marque 2 secondes d'arrêt en bas, puis descends en 3 secondes."
    ],
    rate:[
      "Tes talons décollent du sol — descends moins bas.",
      "Ton dos s'arrondit en bas : c'est le signal d'arrêt de la série.",
      "Tes genoux rentrent vers l'intérieur à la remontée."
    ],
    pourquoi:"Le poids placé devant toi force ton tronc à tenir le buste droit. C'est ce qui rend ce squat plus sûr qu'un squat chargé sur les épaules, surtout au réveil quand le dos est encore raide."
  };

  A["swing"] = {
    titre:"Swing à deux mains",
    resume:"Le geste du coup de poing : la puissance part des hanches, pas des bras.",
    installation:[
      "Pose la kettlebell au sol, à une trentaine de centimètres devant tes pieds.",
      "Pieds un peu plus écartés que les épaules.",
      "Pousse les fesses vers l'arrière, dos plat, et attrape la poignée à deux mains.",
      "Bascule-la entre tes jambes pour prendre l'élan du premier coup."
    ],
    mouvement:[
      "Laisse la kettlebell passer entre tes jambes, très haut, presque contre ton entrejambe.",
      "Projette les hanches vers l'avant d'un coup sec, en serrant les fessiers.",
      "La kettlebell monte toute seule jusqu'à hauteur de poitrine. Tes bras ne tirent pas, ils suivent.",
      "Laisse-la redescendre et repasser entre les jambes : c'est un balancier, pas un soulevé."
    ],
    reglage:[
      "Trop dur ou geste incertain : reviens au soulevé de terre kettlebell, sans balancier.",
      "Trop facile : monte à 20 répétitions, puis raccourcis le repos."
    ],
    rate:[
      "Tu le sens dans le bas du dos : tu plies le dos au lieu des hanches. Arrête la série.",
      "Tu squattes au lieu de pousser les fesses en arrière : tes genoux plient trop.",
      "Tu soulèves la kettlebell avec les bras — elle doit flotter, pas être tirée."
    ],
    pourquoi:"C'est la charnière de hanche explosive, exactement le schéma moteur d'un coup de poing et d'une projection. Aucun autre exercice du programme n'entraîne cette qualité."
  };

  A["fentes-arriere"] = {
    titre:"Fentes arrière",
    resume:"L'exercice de jambes le plus rentable : une jambe à la fois, donc deux fois la charge.",
    installation:[
      "Debout, pieds joints. Tiens la kettlebell contre ta poitrine — ou, sans kettlebell, debout au milieu de la boucle que tu tiens aux épaules.",
      "Grandis-toi, regard droit devant."
    ],
    mouvement:[
      "Fais un grand pas en ARRIÈRE avec une jambe.",
      "Descends jusqu'à ce que ton genou arrière frôle le sol, sans le toucher.",
      "Ton genou avant reste au-dessus de ton pied, il ne part pas devant les orteils.",
      "Pousse sur le talon avant pour revenir pieds joints.",
      "Fais toutes les répétitions du même côté, puis passe à l'autre jambe."
    ],
    reglage:[
      "Trop dur : descends moins bas, ou fais-le sans charge.",
      "Bras qui fatiguent avant les jambes : pose la kettlebell au sol entre les deux côtés.",
      "Trop facile : marque un arrêt d'une seconde en bas."
    ],
    rate:[
      "Ton buste part vers l'avant : tu as fait un pas trop court.",
      "Ton genou avant dépasse largement tes orteils.",
      "Tu perds l'équilibre à chaque répétition : réduis l'amplitude avant d'ajouter des reps."
    ],
    pourquoi:"Le combat se fait rarement en appui symétrique. Travailler une jambe à la fois corrige les déséquilibres et double la charge relative sans matériel supplémentaire."
  };

  A["gainage-lateral"] = {
    titre:"Gainage latéral",
    resume:"Le seul exercice qui t'apprend à ne pas te plier sur le côté.",
    installation:[
      "Allonge-toi sur le côté, jambes tendues, l'une sur l'autre.",
      "Pose l'avant-bras du dessous au sol, coude juste sous l'épaule.",
      "L'autre main sur la hanche, ou le bras tendu vers le plafond."
    ],
    mouvement:[
      "Décolle les hanches du sol et monte jusqu'à former une ligne droite des chevilles à la tête.",
      "Serre les fessiers et rentre légèrement les côtes.",
      "Tiens la position sans bouger. Respire normalement.",
      "Repose-toi, change de côté, recommence."
    ],
    reglage:[
      "Trop dur : plie les genoux à 90 degrés et prends appui sur le genou du dessous.",
      "La durée se coche sur la carte, et elle est mémorisée : monte d'un palier quand le précédent passe sans que les hanches descendent.",
      "Trop facile au dernier palier : lève la jambe du dessus."
    ],
    rate:[
      "Tes hanches redescendent vers le sol : arrête, c'est fini pour cette série.",
      "Ton corps n'est pas dans un plan : le bassin part vers l'arrière.",
      "Tu bloques ta respiration."
    ],
    pourquoi:"Quand tu frappes, la force monte du sol par le tronc. Ce qui fuit en premier chez un débutant, c'est le côté : le buste se plie et la puissance se perd en route."
  };

  /* ---------- Kettlebell : tirage ---------- */

  A["rowing-un-bras"] = {
    titre:"Rowing kettlebell à un bras",
    resume:"Ton meilleur constructeur de dos sans barre de traction. C'est lui qui donne l'épaisseur.",
    installation:[
      "Place une chaise devant toi. Une table basse ou un bord de lit font aussi bien l'affaire.",
      "Pose la kettlebell au sol, à côté du pied droit.",
      "Pieds décalés : pied gauche devant, pied droit en arrière, d'un pas environ.",
      "Main gauche à plat sur l'appui. Pousse les fesses en arrière pour pencher le buste jusqu'à l'horizontale, dos plat.",
      "Regarde le sol à un mètre devant toi : le cou reste dans l'axe du dos."
    ],
    mouvement:[
      "Attrape la kettlebell de la main droite. Bras tendu, laisse l'épaule descendre : c'est l'étirement de départ.",
      "Tire vers la HANCHE, pas vers l'épaule. Le coude part en arrière en frôlant les côtes.",
      "Pense « je pousse mon coude vers le plafond » plutôt que « je tire avec la main ».",
      "En haut, serre l'omoplate vers la colonne pendant une seconde.",
      "Redescends en 2 secondes, bras complètement tendu en bas.",
      "Enchaîne l'autre bras sans repos, puis repose-toi."
    ],
    reglage:[
      "Trop dur : descends à 6 répétitions et penche-toi moins, buste à 45 degrés.",
      "Trop facile, dans l'ordre : monter à 10 reps sur toutes les séries, puis pause d'1 s en haut, puis descente en 3 s, puis repos réduit."
    ],
    rate:[
      "Ton buste tourne à chaque répétition : tes deux épaules doivent rester parallèles au sol.",
      "Ton dos s'arrondit : redresse-toi d'un cran.",
      "Tu tires vers l'épaule coude écarté au lieu de la hanche coude serré.",
      "Tu donnes un coup de jambes pour lancer la charge : la série est terminée."
    ],
    pourquoi:"Sans barre de traction, c'est lui qui charge le grand dorsal. Bonus : comme tu tires d'un seul côté, ton tronc doit empêcher le buste de tourner — tu travailles l'anti-rotation gratuitement."
  };

  A["rowing-horizontal"] = {
    titre:"Rowing horizontal à l'élastique",
    resume:"Du volume de travail pour le dos, sans aucune charge sur la colonne.",
    installation:[
      "Assieds-toi au sol, jambes tendues devant toi.",
      "Fléchis légèrement les genoux, 10 à 15 degrés. Jambes trop tendues le matin, ce sont les ischios qui tirent et le bas du dos qui s'arrondit.",
      "Passe l'élastique autour de la voûte des deux pieds, pas autour des orteils.",
      "Saisis la boucle à deux mains, bras tendus devant. Plus tes mains sont près de tes pieds, plus c'est dur."
    ],
    mouvement:[
      "Tire les mains vers le bas de tes côtes, au niveau du nombril — pas vers la poitrine.",
      "Les coudes filent vers l'arrière en frôlant tes flancs.",
      "En fin de course, serre les omoplates comme si tu coinçais un crayon entre les deux.",
      "Reviens lentement, bras complètement tendus, sans arrondir le dos ni bouger le buste."
    ],
    reglage:[
      "Trop dur : élastique plus souple, ou avance tes mains pour le rallonger.",
      "Trop facile : cumule un deuxième élastique, ou vrille la boucle en 8 et mets une main dans chaque moitié — tu divises sa longueur par deux d'un coup.",
      "Bas du dos qui tire : assieds-toi sur un coussin ou une serviette pliée."
    ],
    rate:[
      "Ton buste balance d'avant en arrière : tu rames avec le corps au lieu du dos.",
      "Ton dos s'arrondit quand tu reviens bras tendus.",
      "Tes épaules montent vers les oreilles.",
      "Tu tires vers la poitrine coudes écartés au lieu du ventre coudes serrés."
    ],
    pourquoi:"Il complète le rowing lourd sur un angle différent, sans charger la colonne — précieux juste après le mouvement lourd de la séance."
  };

  A["tirage-ecarte"] = {
    titre:"Tirage écarté",
    resume:"Tu ne fixes l'élastique nulle part : tes deux mains sont les points d'ancrage.",
    installation:[
      "Saisis la boucle à deux mains, écartées d'environ la largeur des épaules.",
      "Tends les bras devant toi, à hauteur d'épaules, paumes face à face.",
      "L'élastique passe devant ta poitrine, légèrement tendu au départ."
    ],
    mouvement:[
      "Bras tendus — les coudes ne plient pas — écarte les mains vers l'extérieur, comme si tu ouvrais des rideaux.",
      "Va jusqu'à former un T avec tes bras, l'élastique venant toucher ta poitrine.",
      "Serre les omoplates l'une vers l'autre.",
      "Reviens LENTEMENT : c'est le retour freiné qui fait le travail, pas l'aller."
    ],
    reglage:[
      "Trop dur : écarte tes mains sur l'élastique, ou prends-en un plus souple.",
      "Trop facile : rapproche tes mains, ou enroule un tour d'élastique autour de chaque main."
    ],
    rate:[
      "Tes coudes plient : tu transformes l'exercice en rowing.",
      "Tes épaules montent vers les oreilles : prends un élastique plus souple.",
      "Tu cambres le dos pour t'aider : garde les côtes basses."
    ],
    pourquoi:"C'est l'exercice de santé d'épaule du programme. Pour quelqu'un qui encaisse des gardes et des parades, c'est le poste qu'on ne coupe jamais, même quand on manque de temps."
  };

  A["marche-valise"] = {
    titre:"Marche valise",
    resume:"Tout le travail est dans ce que tu ne fais pas : ne pas te pencher.",
    installation:[
      "Pose la kettlebell à côté de ton pied. Pousse les fesses en arrière, dos plat, et attrape-la d'une main.",
      "Si tu n'es pas sûr de ton dos : attrape-la à deux mains, relève-toi, puis lâche une main.",
      "Debout, bras tendu le long du corps, comme une valise dans un couloir d'aéroport.",
      "Épaules à la même hauteur. Le bras libre pend naturellement, ne l'écarte pas pour t'équilibrer."
    ],
    mouvement:[
      "Grandis-toi, rentre légèrement les côtes, serre fort la poignée.",
      "Marche à rythme de promenade, regard droit devant.",
      "Ne te penche ni du côté de la kettlebell, ni de l'autre côté pour compenser : le buste reste vertical.",
      "Respire normalement, ne bloque pas ta respiration.",
      "Pose la kettlebell, change de main, repars pour la même durée."
    ],
    reglage:[
      "Pas la place de marcher : fais des allers-retours sur 4 ou 5 pas, ou reste immobile debout — c'est aussi valable.",
      "La durée se coche sur la carte, et elle est mémorisée : c'est ton levier de progression.",
      "Trop facile : passe au palier de durée suivant, puis ralentis tes pas.",
      "Palier suivant, quand 60 s passent sans effort : la kettlebell tenue à l'envers, cloche vers le ciel. Même poids, difficulté sans commune mesure."
    ],
    rate:[
      "Tu te penches du côté de la kettlebell : c'est l'erreur principale, tout l'exercice consiste à ne pas le faire.",
      "Tu te penches à l'opposé, hanche sortie.",
      "Ton épaule chargée descend ou part vers l'avant.",
      "Tu ne peux pas parler en marchant : c'est trop long."
    ],
    pourquoi:"Le meilleur transfert vers le combat pour un coût technique nul. Quand on te tire sur le côté, c'est ce muscle qui t'empêche de te plier. Filme-toi une fois de face : c'est le seul exercice où l'erreur ne se sent pas mais se voit immédiatement."
  };

  A["curl-biceps"] = {
    titre:"Curl biceps",
    resume:"Exercice d'isolation, le premier à sacrifier si tu débordes des 25 minutes.",
    installation:[
      "Debout au milieu de l'élastique, pieds écartés à la largeur des hanches.",
      "Saisis la boucle à deux mains, bras le long du corps, paumes tournées vers l'avant."
    ],
    mouvement:[
      "Monte les mains vers les épaules en pliant seulement les coudes.",
      "Tes coudes restent collés à tes flancs et ne partent pas vers l'avant.",
      "Redescends lentement, bras complètement tendus en bas."
    ],
    reglage:[
      "Trop dur : écarte moins les pieds pour réduire la tension.",
      "Trop facile : cumule un deuxième élastique, ou écarte davantage les pieds."
    ],
    rate:[
      "Tu balances le buste en arrière pour lancer la charge.",
      "Tes coudes avancent : ce sont les épaules qui travaillent, plus les biceps."
    ],
    pourquoi:"L'élastique garde de la tension en haut du mouvement, là où un poids libre n'en a plus. C'est ce qui rend cet exercice utile malgré son faible rendement."
  };

  /* ---------- Kettlebell : poussée ---------- */

  A["floor-press"] = {
    titre:"Floor press",
    resume:"Le développé le plus sûr pour un débutant : le sol borne la descente et protège l'épaule.",
    installation:[
      "Allonge-toi sur le dos, genoux pliés, pieds à plat au sol.",
      "Amène la kettlebell près de ton épaule et attrape-la d'une main, poignée en diagonale dans la paume.",
      "Le corps de la kettlebell repose contre ton avant-bras, il ne pend pas dans le vide.",
      "Plaque le bas de ton dos et tes côtes au sol."
    ],
    mouvement:[
      "Pousse la kettlebell vers le plafond jusqu'à avoir le bras tendu.",
      "Redescends en 2 secondes : ton coude se pose au sol et marque un temps d'arrêt.",
      "Repars du sol sans rebondir.",
      "Fais toutes les répétitions d'un bras, puis enchaîne l'autre sans repos."
    ],
    reglage:[
      "Trop dur : tiens la kettlebell à deux mains.",
      "Trop facile : marque 1 seconde coude au sol, puis passe à une descente en 3 secondes."
    ],
    rate:[
      "Tu cambres le dos pour lancer la charge : plaque tes côtes au sol.",
      "Ton poignet se casse en arrière : la poignée doit être en diagonale dans la paume, poignet droit.",
      "Tu rebondis sur le sol pour repartir."
    ],
    pourquoi:"C'est ton seul vrai constructeur de pectoraux avec une kettlebell unique, et il ne demande ni banc ni installation. Le sol limite l'amplitude, ce qui protège l'épaule quand on débute."
  };

  A["pompes"] = {
    titre:"Pompes",
    resume:"Le mouvement de poussée de base. L'élastique ajoute la charge qui manque.",
    installation:[
      "Passe l'élastique dans ton dos, au niveau des omoplates, et coince chaque extrémité sous une main.",
      "Mains au sol un peu plus écartées que les épaules.",
      "Corps en ligne droite des chevilles à la tête. Fessiers serrés."
    ],
    mouvement:[
      "Descends en gardant les coudes à environ 45 degrés du corps, pas écartés en croix.",
      "Descends jusqu'à ce que ta poitrine frôle le sol.",
      "Remonte en poussant le sol loin de toi, sans laisser les hanches traîner."
    ],
    reglage:[
      "Trop dur : pose les mains sur une chaise ou un plan de travail. Plus c'est haut, plus c'est facile.",
      "Trop facile : élastique plus fort, ou pieds surélevés, ou descente en 3 secondes."
    ],
    rate:[
      "Tes hanches s'affaissent ou pointent vers le haut : le corps doit rester une planche.",
      "Tu ne descends qu'à moitié : mieux vaut 5 pompes complètes que 12 partielles.",
      "Tes coudes partent en croix à 90 degrés : mauvais pour l'épaule."
    ],
    pourquoi:"Elle travaille la poitrine, l'avant des épaules et les triceps en un seul geste, et ton tronc doit tenir la position tout du long."
  };

  A["ecarte-poitrine"] = {
    titre:"Écarté à l'élastique",
    resume:"Attention : ici tu RAPPROCHES les mains, élastique dans le dos. C'est l'inverse du tirage écarté.",
    installation:[
      "Passe la boucle dans ton dos, au niveau des omoplates.",
      "Saisis-la à deux mains, de part et d'autre de ton buste.",
      "Debout, bras tendus sur les côtés, à hauteur d'épaules."
    ],
    mouvement:[
      "Bras quasi tendus, coudes à peine fléchis et FIXES, rapproche tes mains devant toi.",
      "Va jusqu'à ce que tes mains se touchent devant ta poitrine.",
      "Reviens lentement en écartant les bras, sans les laisser partir trop en arrière."
    ],
    reglage:[
      "Trop dur : avance tes mains sur l'élastique.",
      "Trop facile : cumule un deuxième élastique, ou marque 1 seconde mains jointes."
    ],
    rate:[
      "Tes coudes plient : tu fais une pompe debout, plus un écarté.",
      "Tu tires avec les épaules en haussant les trapèzes.",
      "Tu cambres le dos pour t'aider."
    ],
    pourquoi:"Il attrape le pectoral sur un angle que la pompe ne donne pas. C'est de l'isolation : utile quand la poitrine est un objectif affiché, à couper en premier sinon."
  };

  A["press-militaire"] = {
    titre:"Press militaire",
    resume:"La poussée au-dessus de la tête, un bras à la fois.",
    installation:[
      "Amène la kettlebell contre ton épaule : le corps de la cloche repose sur ton avant-bras, poignet droit.",
      "Pour l'y mettre sans technique : attrape-la à deux mains et hisse-la contre l'épaule.",
      "Debout, pieds largeur de hanches, fessiers et ventre serrés."
    ],
    mouvement:[
      "Pousse vers le plafond jusqu'au bras complètement tendu, biceps près de l'oreille.",
      "Ton buste ne bouge pas : pas de cambrure, pas de bascule sur le côté.",
      "Redescends en contrôlant jusqu'à l'épaule.",
      "Toutes les répétitions d'un bras, puis l'autre sans repos."
    ],
    reglage:[
      "Trop dur : fais-le à genoux, ça verrouille le bas du dos et supprime la triche.",
      "Trop facile : descente en 3 secondes, ou 1 seconde d'arrêt bras tendu."
    ],
    rate:[
      "Tu cambres le dos et pars en arrière pour lancer la charge.",
      "Ton poignet se casse en arrière sous le poids.",
      "Tu plies les jambes pour donner de l'élan : ce n'est plus un press."
    ],
    pourquoi:"C'est le meilleur constructeur d'épaules disponible avec ton matériel. Debout et sur un seul bras, ton tronc travaille aussi pour t'empêcher de basculer."
  };

  A["elevation-laterale"] = {
    titre:"Élévation latérale",
    resume:"C'est ce mouvement qui donne la largeur d'épaules. Charge légère obligatoire.",
    installation:[
      "Debout au milieu de l'élastique, pieds serrés.",
      "Saisis la boucle à deux mains, bras le long du corps, paumes tournées vers l'intérieur."
    ],
    mouvement:[
      "Lève les bras sur les côtés, coudes à peine fléchis, jusqu'à l'horizontale.",
      "Pas plus haut que les épaules.",
      "Redescends lentement, sans laisser l'élastique te ramener d'un coup."
    ],
    reglage:[
      "Trop dur : rapproche les pieds pour réduire la tension, ou monte moins haut.",
      "Trop facile : monte à 20 répétitions plutôt que d'alourdir — cet exercice se rate en le chargeant trop."
    ],
    rate:[
      "Tes épaules montent vers les oreilles : ce sont tes trapèzes qui prennent tout, baisse la tension.",
      "Tu balances le buste pour lancer les bras.",
      "Tu montes au-dessus des épaules."
    ],
    pourquoi:"Le press construit surtout l'avant de l'épaule. C'est ce mouvement qui travaille le côté, celui qu'on voit de face et qui élargit la silhouette."
  };

  /* ---------- Élastiques : programme haut du corps ---------- */

  A["developpe-debout"] = {
    titre:"Développé debout",
    resume:"Une pompe debout : même mouvement, sans avoir à porter son poids de corps.",
    installation:[
      "Passe l'élastique dans ton dos, au niveau des omoplates.",
      "Saisis la boucle à deux mains, au niveau de la poitrine, coudes vers l'arrière.",
      "Un pied légèrement en avant pour la stabilité."
    ],
    mouvement:[
      "Pousse les mains droit devant toi jusqu'aux bras tendus.",
      "Les coudes restent à environ 45 degrés du corps, pas écartés en croix.",
      "Reviens lentement jusqu'à ce que tes mains touchent ta poitrine."
    ],
    reglage:[
      "Trop dur : recule d'un pas pour détendre l'élastique.",
      "Trop facile : avance, cumule un deuxième élastique, ou passe à un seul bras."
    ],
    rate:[
      "Ton buste part en avant pour accompagner la poussée.",
      "Tes épaules montent vers les oreilles."
    ],
    pourquoi:"Il travaille la même chaîne que la pompe, sans charger les poignets. À un seul bras, il ajoute du travail anti-rotation pour le tronc."
  };

  A["developpe-tete"] = {
    titre:"Développé au-dessus de la tête",
    resume:"Poussée verticale. À ne jamais mettre en tout premier exercice le matin.",
    installation:[
      "Debout au milieu de l'élastique, pieds largeur de hanches.",
      "Saisis la boucle à deux mains, au niveau des épaules, paumes vers l'avant.",
      "Serre les fessiers et le ventre avant de pousser."
    ],
    mouvement:[
      "Pousse vers le plafond jusqu'aux bras tendus, bras près des oreilles.",
      "Ton buste ne bouge pas, pas de cambrure.",
      "Redescends en contrôlant jusqu'aux épaules."
    ],
    reglage:[
      "Trop dur : fais-le à genoux, ça verrouille le bas du dos.",
      "Trop facile : un seul bras, ou cumule un deuxième élastique."
    ],
    rate:[
      "Tu cambres le bas du dos pour finir le mouvement.",
      "Tu ne montes pas jusqu'au bout : l'amplitude complète compte plus que la charge."
    ],
    pourquoi:"La poussée au-dessus de la tête demande de la mobilité du haut du dos, qui est au plus bas au réveil. Place-le après un autre exercice, jamais à froid."
  };

  A["face-pull"] = {
    titre:"Face pull",
    resume:"L'assurance épaule. Demande un point d'ancrage devant toi, à hauteur de visage.",
    installation:[
      "Accroche l'élastique à un point fixe solide, à hauteur de visage.",
      "Sans point d'ancrage disponible, remplace cet exercice par le tirage écarté : même travail, rien à accrocher.",
      "Saisis la boucle à deux mains, recule jusqu'à la mettre en tension, bras tendus devant toi."
    ],
    mouvement:[
      "Tire les mains vers ton visage en gardant les coudes HAUTS, au niveau des épaules.",
      "Termine les mains de part et d'autre de la tête, comme si tu montrais tes biceps.",
      "Serre les omoplates, puis reviens lentement bras tendus."
    ],
    reglage:[
      "Trop dur : recule moins pour réduire la tension.",
      "Trop facile : marque 1 seconde en fin de course."
    ],
    rate:[
      "Tes coudes tombent vers le bas : tu fais un rowing, pas un face pull.",
      "Tu tires avec le buste en te penchant en arrière."
    ],
    pourquoi:"L'épaule encaisse les gardes, les parades et les chutes. C'est le poste qu'on ne coupe jamais, même quand on manque de temps."
  };

  A["extension-triceps"] = {
    titre:"Extension triceps",
    resume:"Isolation des triceps. Demande un ancrage haut, ou une variante derrière la nuque.",
    installation:[
      "Version ancrée : accroche l'élastique en hauteur, saisis-le à deux mains, coudes serrés le long du corps.",
      "Version sans ancrage : passe l'élastique dans ton dos, tiens une extrémité en bas d'une main, et l'autre main saisit l'élastique derrière ta nuque."
    ],
    mouvement:[
      "Tends les bras — vers le bas en version ancrée, vers le plafond en version derrière la nuque.",
      "Seuls tes avant-bras bougent. Tes coudes restent parfaitement immobiles.",
      "Reviens lentement."
    ],
    reglage:[
      "Trop dur : réduis la tension de départ.",
      "Trop facile : cumule un deuxième élastique, ou marque 1 seconde bras tendus."
    ],
    rate:[
      "Tes coudes bougent ou s'écartent : tu recrutes les épaules et le dos.",
      "Tu utilises le buste pour pousser."
    ],
    pourquoi:"Pur exercice d'isolation, décoratif. C'est le tout premier à couper quand la séance déborde."
  };

  /* ---------- Élastiques : programme bas du corps ---------- */

  A["squat-elastique"] = {
    titre:"Squat",
    resume:"Le mouvement de jambes de base, chargé par l'élastique sous les pieds.",
    installation:[
      "Debout au milieu de l'élastique, pieds largeur d'épaules, pointes légèrement vers l'extérieur.",
      "Remonte la boucle jusqu'à tes épaules et tiens-la à deux mains, coudes vers l'avant."
    ],
    mouvement:[
      "Descends en poussant les fesses vers l'arrière et les genoux vers l'extérieur.",
      "Descends jusqu'à ce que tes cuisses soient à peu près parallèles au sol, ou moins bas si le dos s'arrondit.",
      "Remonte en poussant le sol avec les talons."
    ],
    reglage:[
      "Trop dur : écarte moins les pieds, ou descends moins bas.",
      "Trop facile : marque un arrêt en bas, puis passe à une jambe."
    ],
    rate:[
      "Tes talons décollent.",
      "Ton dos s'arrondit en bas : arrête la série.",
      "Tes genoux rentrent vers l'intérieur."
    ],
    pourquoi:"Mouvement composé le plus complet pour le bas du corps. L'élastique charge davantage en haut du mouvement, là où tu es le plus fort."
  };

  A["squat-bulgare"] = {
    titre:"Squat bulgare",
    resume:"L'exercice de jambes le plus rentable en charge relative. Il laisse des courbatures.",
    installation:[
      "Place une chaise derrière toi.",
      "Pose le dessus du pied arrière sur l'assise, jambe avant à un grand pas devant.",
      "Si tu charges : pied avant sur la boucle, que tu tiens aux épaules à deux mains."
    ],
    mouvement:[
      "Descends à la verticale en pliant la jambe avant, genou arrière vers le sol.",
      "Ton buste reste droit, ton poids reste sur le talon avant.",
      "Remonte sans t'aider de la jambe arrière : elle sert d'appui, pas de moteur.",
      "Toutes les répétitions d'un côté, puis l'autre."
    ],
    reglage:[
      "Trop dur : sans charge, ou chaise plus basse, ou amplitude réduite.",
      "Trop facile : arrêt d'une seconde en bas, puis ajoute de la tension."
    ],
    rate:[
      "Tu perds l'équilibre à chaque répétition : rapproche ta jambe avant.",
      "Ton genou avant part très loin devant tes orteils.",
      "Tu pousses sur la jambe arrière pour remonter."
    ],
    pourquoi:"Charge relative maximale sans matériel lourd. À placer le plus loin possible du prochain entraînement de combat : il laisse les jambes marquées deux jours."
  };

  A["good-morning"] = {
    titre:"Good morning",
    resume:"Charnière de hanche pour les ischios et les fessiers. Jamais en premier exercice au lever.",
    installation:[
      "Debout au milieu de l'élastique, pieds largeur de hanches.",
      "Passe la boucle derrière ta nuque, sur le haut des épaules.",
      "Genoux très légèrement fléchis, et ils ne bougeront plus."
    ],
    mouvement:[
      "Pousse les fesses vers l'arrière et penche le buste vers l'avant, dos parfaitement plat.",
      "Descends jusqu'à sentir une tension à l'arrière des cuisses, pas plus loin.",
      "Remonte en poussant les hanches vers l'avant."
    ],
    reglage:[
      "Trop dur : réduis l'amplitude, ou fais-le sans élastique.",
      "Trop facile : descends en 3 secondes."
    ],
    rate:[
      "Ton dos s'arrondit : c'est le signal d'arrêt immédiat.",
      "Tu plies les genoux : tu fais un squat, pas une charnière de hanche.",
      "Tu le sens dans le bas du dos plutôt qu'à l'arrière des cuisses."
    ],
    pourquoi:"C'est une flexion du buste chargée : à froid, le matin, elle demande d'être placée après un autre exercice, jamais en ouverture de séance."
  };

  A["planche"] = {
    titre:"Planche",
    resume:"Gainage de face : empêcher le bas du dos de se creuser.",
    installation:[
      "À plat ventre, pose les avant-bras au sol, coudes juste sous les épaules.",
      "Pieds largeur de hanches, en appui sur les pointes."
    ],
    mouvement:[
      "Décolle le bassin et monte en ligne droite des chevilles à la tête.",
      "Serre les fessiers, rentre légèrement les côtes, bascule le bassin vers l'arrière.",
      "Tiens sans bouger. Respire normalement, le regard vers le sol."
    ],
    reglage:[
      "Trop dur : pose les genoux au sol.",
      "Trop facile : lève un pied quelques secondes, puis l'autre."
    ],
    rate:[
      "Tes hanches s'affaissent et tu creuses le bas du dos : arrête la série.",
      "Tes fesses pointent vers le plafond.",
      "Tu bloques ta respiration."
    ],
    pourquoi:"Gainage de base. Il vieillit mal : au bout de quelques semaines, il devient un test d'endurance qui ne construit plus grand-chose."
  };

  A["tirage-cote"] = {
    titre:"Tirage de côté",
    resume:"Flexion latérale contrôlée, un côté après l'autre.",
    installation:[
      "Debout sur la boucle avec un seul pied, l'autre extrémité saisie dans la main du même côté.",
      "L'autre main sur la hanche ou derrière la tête.",
      "Tiens-toi bien droit au départ."
    ],
    mouvement:[
      "Penche-toi lentement sur le côté chargé, en gardant le buste dans un seul plan.",
      "Remonte en te redressant, sans dépasser la verticale.",
      "Fais tout un côté, puis l'autre."
    ],
    reglage:[
      "Trop dur : réduis la tension.",
      "Trop facile : ralentis la descente."
    ],
    rate:[
      "Tu tournes le buste au lieu de le pencher.",
      "Tu bascules en avant ou en arrière."
    ],
    pourquoi:"Travail des muscles du flanc, utiles pour transmettre la force du bas vers le haut du corps."
  };

  A["superman"] = {
    titre:"Superman",
    resume:"Réveil des muscles du bas du dos, sans aucune charge.",
    installation:[
      "À plat ventre, bras tendus devant toi ou le long du corps.",
      "Front posé au sol, regard vers le sol."
    ],
    mouvement:[
      "Décolle le buste et les jambes de quelques centimètres seulement.",
      "Monte lentement, sans à-coup, et tiens une seconde en haut.",
      "Redescends en contrôlant."
    ],
    reglage:[
      "Trop dur : ne décolle que le buste, jambes au sol.",
      "Trop facile : tiens 3 secondes en haut."
    ],
    rate:[
      "Tu montes très haut en cassant la nuque en arrière : quelques centimètres suffisent.",
      "Tu te lances par à-coups."
    ],
    pourquoi:"Renforce les muscles qui tiennent la colonne. Amplitude volontairement faible : ici, monter plus haut n'apporte rien et charge les vertèbres."
  };
})();
