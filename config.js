/* ============================================================================
   CONFIG.JS — LE SEUL FICHIER QUE TU REMPLIS (avec le tableur .xlsx)
   ============================================================================
   Modifie les valeurs ci-dessous, pousse sur GitHub, le site se met à jour.
   Ne touche pas à la structure (les noms de champs), seulement aux contenus.
   ============================================================================ */
window.CONFIG = {

  /* ── 1) Textes courts ─────────────────────────────────────────────────── */
  textes: {
    marque:        "Programmes 2027",         // haut à gauche (bandeau)
    eyebrowAccueil:"Comparateur de programmes",
    slogan1:       "Voter",                   // grand titre, 1re ligne
    slogan2:       "librement",               // grand titre, 2e ligne (en or)
    accroche:      "Programmes à jour du 23/06/2026",
    aproposTitre:  "Quel est cet outil ?",

    preclassIntro: "Avant de commencer, classez les listes selon vos affinités, telles que vous les percevez aujourd'hui. Glissez les noms pour les ordonner. Cette étape sert à mesurer votre cohérence à la fin. Elle est facultative.",

    tuto: {
      intro:   "Choisissez une ou plusieurs propositions",
      aucune:  "Si cette mesure vous semble importante, mais qu'aucune des mesures ne vous convainc, l'ensemble des candidats seront pénalisés.",
      ignorer: "Si vous ne vous sentez pas suffisamment concerné par cette mesure pour choisir une proposition, aucun des candidats ne sera pénalisé.",
    },

    // Slider « Degré d'approfondissement » : [niveaux 1-2, 3-4, 5]
    profondeur: [
      "Principales mesures uniquement et points couverts par le plus de programmes",
      "Plus précis, couvre l'ensemble des mesures des candidats",
      "Couvre l'intégralité de tous les programmes. Beaucoup plus précis mais plus long",
    ],
  },

  /* ── 2) Onglet « Quel est cet outil ? » ───────────────────────────────────
     Dans « texte » : un saut de ligne = paragraphe ; « - » = puce ;
     [page d'accueil] et [Données] deviennent des liens cliquables.          */
  apropos: [
    { titre: "Objectif",
      texte: "Cet outil a pour but de vous permettre de comparer les différentes propositions des candidats en vue de l'élection présidentielle de 2027, de la manière la plus neutre possible. En effet, le traitement de l'information par les médias, l'interprétation des propositions ou les discours des politiciens eux-mêmes sont remplis de biais, parfois volontaires, visant à orienter l'opinion politique des électeurs. Ce processus, bien qu'obligatoire dans la communication politique, peut poser problème pour les publics exposés à un manque de pluralisme idéologique voire à des discours fallacieux et compromettre la liberté d'opinion." },
    { titre: "Principe",
      texte: "Dans les questionnaires proposés, vous êtes invité à choisir des solutions parmi celles proposées par les candidats sur un panel de problématiques. Vous ne savez pas à quel candidat appartient quelle proposition avant la fin du questionnaire. De cette manière, vous êtes débarrassé de nombreux biais de choix, vous permettant de vous fier à votre seule opinion." },
    { titre: "Données et fonctionnement",
      texte: "Les solutions proposées sont issues du programme officiel de chaque candidat, et sont laissées telles quelles. Chaque programme utilisé est référencé dans l'onglet [Données]. Chaque proposition sélectionnée donne un « point » au candidat à qui elle appartient. Si aucune des propositions ne convient, l'ensemble des candidats est pénalisé. Le score final de chaque candidat correspond simplement au nombre de points lui ayant été attribué sur le nombre de points distribué sur l'ensemble du questionnaire." },
    { titre: "Limites",
      texte: "Bien que cet outil élimine un grand nombre de biais, il en conserve voire en accentue certains.\n"
           + "- Les propositions proposées sont rédigées par les partis politiques et ne sont par définition pas neutres.\n"
           + "- Si un parti propose 10 fois plus de mesures qu'un autre, il sera ici surreprésenté d'un facteur 10. Pour qu'un programme avec peu de mesures soit en tête des résultats, cela demande d'ignorer un grand nombre de mesures couvertes par les autres programmes.\n"
           + "- Dans le questionnaire avancé, le choix des paramètres influence fortement la représentation de chaque programme. Essayez de conserver un panel assez large de thèmes et candidats couverts pour ne pas artificiellement gonfler le résultat d'une liste avant même le début du test." },
    { titre: "Disclaimer",
      texte: "Cet outil comporte des biais et n'est en aucun cas une représentation objective de vos opinions ni une consigne de vote. Cet outil n'a pas non plus vocation à hiérarchiser les candidats sur la base de leur programme ou opinion, et tous les classements montrés sont uniquement à but statistique. Faites vos choix et forgez vos opinions de manière éclairée et responsable." },
  ],

  /* ── 3) Messages de résultat selon la cohérence (x %) ─────────────────────
     Évalués dans l'ordre : 1er dont « max » ≥ x. Liens [..] cliquables.     */
  coherence: [
    { max: 0,   msg: "Même en faisant exprès je n'ai pas réussi. Signé le développeur" },
    { max: 50,  msg: "Il semble que vos opinions ne soient pas tout à fait en accord avec vos affinités politiques. Il serait pertinent de consulter le programme de chaque candidat, disponible sur la [page d'accueil], ou sur l'onglet [Données]." },
    { max: 90,  msg: "Bonne nouvelle, vous savez pour qui et surtout pour quoi vous votez. Consultez les résultats détaillés pour essayer de trouver les derniers points où ça coince." },
    { max: 99,  msg: "Très solide ! Votre éducation et culture politique doivent être assez avancées pour obtenir une telle cohérence." },
    { max: 100, msg: "Impressionnant ! Vos opinions politiques sont en parfait accord avec vos valeurs et pensées. Vous avez une compréhension avancée du programme des candidats qui vous intéressent." },
  ],

  /* ── 3 bis) Onglet « Données » : liste de liens de référence ──────────────
     Le premier lien doit pointer vers le dépôt GitHub du projet.            */
  liens: [
    { label: "Code source et données du projet (GitHub)", url: "https://github.com/Enzoooooooooooooooooooo/programmes-2027" },
    // { label: "Autre source…", url: "https://…" },
  ],


  /* ── 4) Fonds d'image par thème (URL ou chemin local ; vide = repli) ─────
     Clé = nom EXACT du thème (ligne 1 du tableur).                          */
  imagesThemes: {
    "Agriculture et Alimentation": "",
    "Antiracisme": "",
    "Banques": "",
    "Condition Animale": "",
    "Constitution": "",
    "Culture": "",
    "Défense": "",
    "Droits LGBTI": "",
    "Écologie": "",
    "Économie et Pouvoir d'Achat": "",
    "Éducation": "",
    "Égalité Hommes-Femmes": "",
    "Emploi": "",
    "Énergie": "",
    "Enfance": "",
    "Enseignement Supérieur et Recherche": "",
    "Espace": "",
    "Francophonie": "",
    "Gestion de l'Eau": "",
    "Gestion des Déchets": "",
    "Gestion des Forêts": "",
    "Handicap": "",
    "Jeunesse": "",
    "Justice": "",
    "Justice Fiscale": "",
    "Laïcité": "",
    "Logement": "",
    "Pêche": "",
    "Migrations": "",
    "Numérique": "",
    "Outre-Mer": "",
    "Paix et International": "",
    "Pauvreté": "",
    "Presse et Médias": "",
    "Quartiers Populaires": "",
    "Ruralité": "",
    "Santé": "",
    "Sécurité": "",
    "Sport": "",
    "Transport": "",
    "Vieillesse et Fin de Vie": "",
  },

  /* ── 5) TABLEAU PRINCIPAL DES CANDIDATS ────────────────────────────────────
     Clé = nom EXACT (colonne A du tableur). Champs optionnels :
       parti, couleur (#hex), logo (URL/chemin), photo (URL/chemin),
       lien (programme officiel → onglet « Données »).                        */
  candidats: {
    "Nathalie Arthaud":      { parti: "Lutte Ouvrière (LO)",                              couleur: "#CC0000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Logo_Lutte_Ouvri%C3%A8re.svg/960px-Logo_Lutte_Ouvri%C3%A8re.svg.png", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nathalie_Arthaud_%28LO%29_19-05-2024.jpg/500px-Nathalie_Arthaud_%28LO%29_19-05-2024.jpg", lien: "https://www.lutte-ouvriere.org/" },
    "François Asselineau":    { parti: "Union Populaire Républicaine (UPR)",              couleur: "#00737C", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/a/ac/UPR-Logo-2015.png/960px-UPR-Logo-2015.png", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Fran%C3%A7ois_ASSELINEAU.jpg/500px-Fran%C3%A7ois_ASSELINEAU.jpg", lien: "https://upr.fr/" },
    "Gabriel Attal":         { parti: "Renaissance (RE)",                                 couleur: "#0B49B6", logo: "https://cdn.prod.website-files.com/652418149107f2736cbe65d9/652958ff3990300a6e831543_LOGO%20RE%20Grand%20NOIR.svg", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gabriel_Attal_2025_%28close_crop%29.jpg/500px-Gabriel_Attal_2025_%28close_crop%29.jpg", lien: "https://parti-renaissance.fr/" },
    "Delphine Batho":        { parti: "Génération Écologie (GE)",                         couleur: "#57B546", logo: "https://upload.wikimedia.org/wikipedia/fr/d/d8/G%C3%A9n%C3%A9ration_%C3%A9cologie_logo.png", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Delphine_Batho_%28cropped-2%29.png/500px-Delphine_Batho_%28cropped-2%29.png", lien: "https://www.generationecologie.fr/" },
    "Xavier Bertrand":       { parti: "Les Républicains (LR)",                            couleur: "#1A3162", logo: "https://republicains.fr/wp-content/uploads/2025/09/Les_republicains_logo-01.svg", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Xavier_Bertrand_-_2025_%28cropped%29.jpg/500px-Xavier_Bertrand_-_2025_%28cropped%29.jpg", lien: "https://republicains.fr/" },
    "Karim Bouamrane":       { parti: "Parti Socialiste (PS)",                            couleur: "#FF0055", logo: "https://parti-socialiste.fr/wp-content/uploads/2026/04/xlogo_PS.png.pagespeed.ic.yIWhuePOMn.webp", photo: "https://img.lemde.fr/2026/06/09/0/0/6902/4601/664/0/75/0/a845ac3_upload-1-cjn3x8pw9epp-000-43fg29g.jpg", lien: "https://parti-socialiste.fr/" },
    "Nicolas Dupont-Aignan": { parti: "Debout la France (DLF)",                           couleur: "#0265AC", logo: "https://www.debout-la-france.fr/wp-content/uploads/2022/11/logo-debout-la-france-fr.png", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Nicolas_Dupont-Aignan%2C_homme_politique_fran%C3%A7ais.jpg/500px-Nicolas_Dupont-Aignan%2C_homme_politique_fran%C3%A7ais.jpg", lien: "https://www.debout-la-france.fr/" },
    "Jérôme Guedj":          { parti: "Parti Socialiste (PS)",                            couleur: "#FF0055", logo: "https://parti-socialiste.fr/wp-content/uploads/2026/04/xlogo_PS.png.pagespeed.ic.yIWhuePOMn.webp", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/J%C3%A9r%C3%B4me_Guedj_2010.jpg/500px-J%C3%A9r%C3%B4me_Guedj_2010.jpg", lien: "https://parti-socialiste.fr/" },
    "Anasse Kazib":          { parti: "Révolution Permanente (RP)",                       couleur: "#C12627", logo: "https://www.revolutionpermanente.fr/squelettes/assets/img/logo.svg", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Anasse_Kazib%2C_d%C3%A9cembre_2021.jpg/500px-Anasse_Kazib%2C_d%C3%A9cembre_2021.jpg", lien: "https://www.revolutionpermanente.fr/" },
    "Selma Labib":           { parti: "Nouveau Parti Anticapitaliste Révolutionnaire (NPA)", couleur: "#BE1621", logo: "https://npa-lanticapitaliste.org/sites/default/files/signal-2024-04-29-171053_002_1.png", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJR74RQfoLwBUL41lHGmRbC67zSaxO_jrm4spcyDDiww&s=10", lien: "https://npa-lanticapitaliste.org/" },
    "Marine Le Pen":         { parti: "Rassemblement National (RN)",                      couleur: "#2982C6", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Logo_Rassemblement_National.svg/langfr-960px-Logo_Rassemblement_National.svg.png", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Marine_Le_Pen_2025_%28cropped%29.jpg/500px-Marine_Le_Pen_2025_%28cropped%29.jpg", lien: "https://rassemblementnational.fr/" },
    "Jean-Luc Mélenchon":    { parti: "La France Insoumise (LFI)",                        couleur: "#7B13D6", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7VAdr9w9wBPyCXARpkWr-TUI7Y5wqa6RlBX_4L0&usqp=CAE&s", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/M%C3%A9lenchon_2027_-_55263136641_%28cropped_3-4%2C_2%29.png/500px-M%C3%A9lenchon_2027_-_55263136641_%28cropped_3-4%2C_2%29.png", lien: "https://lafranceinsoumise.fr/" },
    "Édouard Philippe":      { parti: "Horizons (HOR)",                                   couleur: "#27348A", logo: "https://horizonsleparti.fr/wp-content/uploads/2021/10/logo-blanc.svg", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Edouard_Philippe_3x4_crop.jpg/500px-Edouard_Philippe_3x4_crop.jpg", lien: "https://horizonsleparti.fr/" },
    "Florian Philippot":     { parti: "Les Patriotes (LP)",                               couleur: "#E88A28", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/31/Les_Patriotes_2018.png/330px-Les_Patriotes_2018.png", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2022-04-16_16-49-26_MAM-Paris_02.jpg/500px-2022-04-16_16-49-26_MAM-Paris_02.jpg", lien: "https://les-patriotes.fr/" },
    "Bruno Retailleau":      { parti: "Les Républicains (LR)",                            couleur: "#1A3162", logo: "https://republicains.fr/wp-content/uploads/2025/09/Les_republicains_logo-01.svg", photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2022-04-16_16-49-26_MAM-Paris_02.jpg/500px-2022-04-16_16-49-26_MAM-Paris_02.jpg", lien: "https://republicains.fr/" },
  },

  /* ── 6) Test rapide (« Faire le test ») ────────────────────────────────────
     candidats : les 4 listes du test rapide (mets les noms que TU veux).
     priorite  : niveau de priorité conservé pour le test rapide.
                 La priorité est désormais CALCULÉE automatiquement : plus de
                 partis se prononcent sur une mesure, plus elle est prioritaire.
                 1 = mesures les plus consensuelles (couvertes par 80-100 % des
                 partis) … 5 = les moins couvertes (0-20 %).                   */
  test: {
    candidats: ["Gabriel Attal", "Marine le Pen", "Jean-Luc Mélenchon", "Bruno Retailleau"],
    priorite: 1,
  },
};
