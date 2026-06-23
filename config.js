/* ============================================================================
   CONFIG.JS — LE SEUL FICHIER QUE TU REMPLIS (avec le tableur .xlsx)
   ============================================================================
   Modifie les valeurs ci-dessous, pousse sur GitHub, le site se met à jour.
   Ne touche pas à la structure (les noms de champs), seulement aux contenus.

   Tu remplis ici :
     1) textes        → slogan, accroche, micro-textes
     2) apropos       → contenu de l'onglet « Quel est cet outil ? »
     3) coherence     → messages de résultat selon le score de cohérence
     4) imagesThemes  → un fond d'image par thème (test + résultats détaillés)
     5) candidats     → LE TABLEAU PRINCIPAL : parti, couleur, logo, photo, lien
                        (clé = nom EXACT, identique à la colonne A du tableur)
     6) test          → les 4 candidats du test rapide + la priorité utilisée
   ============================================================================ */
window.CONFIG = {

  /* ── 1) Textes courts ─────────────────────────────────────────────────── */
  textes: {
    marque:        "Programmes 2027",        // haut à gauche (bandeau)
    eyebrowAccueil:"Comparateur de programmes",
    slogan1:       "Voter",                  // grand titre, 1re ligne
    slogan2:       "librement",              // grand titre, 2e ligne (en or)
    accroche:      "Programmes à jour du 23/06/2026",
    aproposTitre:  "Quel est cet outil ?",
    contactIntro:  "[À insérer : court texte d'introduction au formulaire de contact.]",

    // Préclassement (avant le test)
    preclassIntro: "Avant de commencer, classez les listes selon vos affinités, telles que vous les percevez aujourd'hui. Cette étape sert à mesurer votre cohérence à la fin. Elle est facultative.",

    // Textes du tutoriel (écran d'exemple avant le test)
    tuto: {
      intro:   "Choisissez une ou plusieurs propositions",
      aucune:  "Si cette mesure vous semble importante, mais qu'aucune des mesures ne vous convainc, l'ensemble des candidats seront pénalisés.",
      ignorer: "Si vous ne vous sentez pas suffisamment concerné par cette mesure pour choisir une proposition, aucun des candidats ne sera pénalisé.",
    },

    // Slider « Degré d'approfondissement » (comparateur avancé) : [niveaux 1-2, 3-4, 5]
    profondeur: [
      "Principales mesures uniquement et points couverts par le plus de programmes",
      "Plus précis, couvre l'ensemble des mesures des candidats",
      "Couvre l'intégralité de tous les programmes. Beaucoup plus précis mais plus long",
    ],
  },

  /* ── 2) Onglet « Quel est cet outil ? » ───────────────────────────────────
     Liste de sections {titre, texte}. Dans « texte » :
       • un saut de ligne = nouveau paragraphe
       • une ligne commençant par « - » = puce
       • [page d'accueil] et [Données] deviennent des liens cliquables    */
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
     Évalués dans l'ordre : on prend le 1er dont « max » ≥ x.
     [page d'accueil] et [Données] deviennent des liens.                    */
  coherence: [
    { max: 0,   msg: "Même en faisant exprès je n'ai pas réussi. Signé le développeur" },
    { max: 50,  msg: "Il semble que vos opinions ne soient pas tout à fait en accord avec vos affinités politiques. Il serait pertinent de consulter le programme de chaque candidat, disponible sur la [page d'accueil], ou sur l'onglet [Données]." },
    { max: 90,  msg: "Bonne nouvelle, vous savez pour qui et surtout pour quoi vous votez. Consultez les résultats détaillés pour essayer de trouver les derniers points où ça coince." },
    { max: 99,  msg: "Très solide ! Votre éducation et culture politique doivent être assez avancées pour obtenir une telle cohérence." },
    { max: 100, msg: "Impressionnant ! Vos opinions politiques sont en parfait accord avec vos valeurs et pensées. Vous avez une compréhension avancée du programme des candidats qui vous intéressent." },
  ],

  /* ── 4) Fonds d'image par thème (URL ou chemin local ; vide = repli) ───── */
  imagesThemes: {
    "Transition écologique": "",   // ex : "img/ecologie.jpg"
    "Sécurité": "",
  },

  /* ── 5) TABLEAU PRINCIPAL DES CANDIDATS ────────────────────────────────────
     Clé = nom EXACT (colonne A du tableur). Tous les champs sont optionnels :
       parti   : nom affiché (sinon repris du tableur)
       couleur : couleur d'accent dans les classements (#hex)
       logo    : URL/chemin du logo du parti
       photo   : URL/chemin de la photo du candidat
       lien    : URL du programme officiel (affiché dans l'onglet « Données »)   */
  candidats: {
    "Jean Truc":       { parti: "Parti de gauche droitière", couleur: "#B23A48", logo: "", photo: "", lien: "" },
    "José Palfaire":   { parti: "Parti du haut",             couleur: "#3E7CB1", logo: "", photo: "", lien: "" },
    "Golden Julien":   { parti: "Parti du milieu",           couleur: "#C6A052", logo: "", photo: "", lien: "" },
    "Christ Cosmique": { parti: "Parti vert",                couleur: "#4C9A6B", logo: "", photo: "", lien: "" },
    "Mickey":          { parti: "Parti parti",               couleur: "#8E7CC3", logo: "", photo: "", lien: "" },
  },

  /* ── 6) Test rapide (« Faire le test ») ──────────────────────────────────── */
  test: {
    candidats: ["Jean Truc", "José Palfaire", "Golden Julien", "Christ Cosmique"],
    priorite: 1,
  },
};
