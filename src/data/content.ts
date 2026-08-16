// Centralized page copy in fr / en / ar. Every page reads from siteContent[lang]
// so the language switch is consistent across the whole site (no hardcoded French).

export type Lang = 'fr' | 'en' | 'ar';

export const siteContent: Record<Lang, any> = {
  fr: {
    home: {
      ctaBook: 'Réservez votre séjour',
      highlightsTitle: 'Les atouts',
    },
    about: {
      body: "Havre de paix et de douceur, l'Hôtel Les Mimosas est à l'origine une gentilhommière bâtie en 1895. Ses 74 chambres s'étalent sur 4 hectares en plein centre-ville et surplombent Tabarka, entre la mer, la montagne et la forêt de chênes-lièges.",
      p2: "Si l'hôtel — très confortable par ailleurs — n'affiche pas un luxe ostentatoire, il offre ce que le luxe n'apporte pas forcément : le calme, la quiétude, la sérénité.",
      p3: "Chaque chambre offre à l'amoureux de la nature une vue imprenable sur la mer et la montagne, rare en Tunisie.",
    },
    rooms: {
      intro: "L'Hôtel Les Mimosas vous offre ses 72 chambres et ses 2 suites juniors, pour un total de 154 lits, construites en pavillons et en bungalows, avec des vues panoramiques exceptionnelles sur la mer, entre la ville, la montagne et la forêt.",
      equipHeading: 'Toutes les chambres sont équipées de',
      equip: ['Salle de bain ou douche', 'Toilettes privées', 'Téléphone', 'Chauffage et climatisation individuels', 'Télévision sur satellite'],
      cards: [
        { name: 'Chambre vue mer', desc: "Pavillons et bungalows avec vue panoramique sur la mer, la ville, la montagne et la forêt." },
        { name: 'Chambre confort', desc: 'Chambres judicieusement étalées sur 4 hectares, au calme, en plein centre-ville.' },
        { name: 'Suite junior', desc: '2 suites juniors pour un séjour en famille ou en couple, plus d’espace et de confort.' },
      ],
    },
    dining: {
      intro: "L'hôtel Les Mimosas vous offre une cuisine internationale et tunisienne dans son restaurant principal avec service à table, où la vue donne sur la mer et sur la montagne. Ces mêmes vues se retrouvent au restaurant à la carte, basé principalement sur les fruits de mer et le gibier local, à l'intérieur comme à l'extérieur sur sa terrasse autour d'une piscine à vue panoramique — sans oublier son snack-bar avec terrasse et son barbecue.",
      venues: [
        { title: 'Restaurant principal', text: 'Cuisine internationale et tunisienne, service à table, vue sur la mer et la montagne.' },
        { title: 'Restaurant à la carte', text: 'Principalement fruits de mer et gibier local, à l’intérieur comme sur la terrasse autour de la piscine, vue panoramique imprenable.' },
        { title: 'Snack-bar & barbecue', text: 'Snack-bar avec terrasse et son barbecue, en saison, face à la baie de Tabarka.' },
      ],
    },
    piscine: { text: "Au cœur des Mimosas, une piscine à la vue panoramique imprenable sur la baie de Tabarka. Le jour comme la nuit, elle invite à la détente, face à la mer et à la montagne." },
    tabarka: {
      intro: "Tabarka est un endroit rare, qui allie la mer, la montagne et les dunes de sable — l'une des régions les moins polluées du pays.",
      tourisme: "Avec nos partenaires, nous organisons des randonnées, des plongées sous-marines, des sorties en mer, des balades en quad et des pique-niques. Un cadre propice à l'exercice d'activités sportives.",
      activities: [
        { title: 'Chasse', text: "Pionnier de la chasse au sanglier en Tunisie, l'hôtel Les Mimosas a une vraie tradition qui remonte à la fin des années quarante. Plus de 200 000 ha de forêt dense et luxuriante, un site exceptionnel où le sanglier est abondant." },
        { title: 'Golf', text: "Le Golf de Tabarka : 18 trous à 10 minutes de l'aéroport international, entre bord de mer, forêt et dunes. Œuvre de Ronald Fream, architecte de renommée internationale. 110 hectares sur une plage unique en Tunisie." },
        { title: 'Plongée', text: "Tabarka, l'une des meilleures zones de plongée sous-marine de Tunisie, avec épaves et faune méditerranéenne. Nos partenaires organisent plongées pour tous les niveaux." },
        { title: 'Sortie en mer', text: "Sorties en mer au départ de Tabarka : criques, îles et falaises de corail, pêche et baignade loin des sentiers battus." },
      ],
    },
    livredor: { intro: 'Des artistes et personnalités ont conquis Les Mimosas et y ont laissé leur trace.' },
    contact: { intro: 'Pour nous contacter' },
    reservation: { intro: 'Réservez votre séjour' },
    form: {
      nom: 'Nom', prenom: 'Prénom', age: 'Age', nationalite: 'Nationalité', adresse: 'Adresse', pays: 'Pays',
      email: 'Adresse e-mail', tel: 'Tel', fax: 'Fax', gsm: 'GSM', objet: 'Objet',
      telDomicile: 'Tel domicile', telPortable: 'Tel portable',
      adultes: 'Adultes', enfantsMoins2: 'Enfants -2 ans', enfantsPlus2: 'Enfants +2 ans', logements: 'Nombre de logements',
      dateArrivee: "Date d'arrivée", dateDepart: 'Date de départ',
      arrangement: 'Arrangement', commentaire: 'Commentaire',
      arrangements: ['Logement et Petit Déjeuner', 'Demi Pension', 'Pension Complète'],
    },
  },

  en: {
    home: {
      ctaBook: 'Book your stay',
      highlightsTitle: 'Highlights',
    },
    about: {
      body: 'A haven of peace and gentleness, the Hôtel Les Mimosas was originally a manor house built in 1895. Its 74 rooms spread across 4 hectares right in the town centre, overlooking Tabarka, between the sea, the mountain and the cork-oak forest.',
      p2: 'If the hotel — otherwise very comfortable — does not display ostentatious luxury, it offers what luxury does not always bring: calm, quiet, serenity.',
      p3: 'Each room offers nature lovers a breathtaking view of the sea and the mountain, rare in Tunisia.',
    },
    rooms: {
      intro: 'The Hôtel Les Mimosas offers 72 rooms and 2 junior suites, for a total of 154 beds, built as pavilions and bungalows, with exceptional panoramic views of the sea, between the town, the mountain and the forest.',
      equipHeading: 'All rooms are equipped with',
      equip: ['Bath or shower', 'Private toilets', 'Telephone', 'Individual heating and air-conditioning', 'Satellite television'],
      cards: [
        { name: 'Sea-view room', desc: 'Pavilions and bungalows with panoramic views of the sea, town, mountain and forest.' },
        { name: 'Comfort room', desc: 'Rooms nicely spread over 4 hectares, quiet, in the heart of the town.' },
        { name: 'Junior suite', desc: '2 junior suites for a family or couple stay, with more space and comfort.' },
      ],
    },
    dining: {
      intro: 'The Hôtel Les Mimosas offers international and Tunisian cuisine in its main restaurant with table service, overlooking the sea and the mountain. The same views are found in the à la carte restaurant, based mainly on seafood and local game, indoors and on its terrace around a pool with a breathtaking panorama — not to mention its snack-bar with terrace and barbecue.',
      venues: [
        { title: 'Main restaurant', text: 'International and Tunisian cuisine, table service, view of the sea and mountain.' },
        { title: 'À la carte restaurant', text: 'Mainly seafood and local game, indoors and on the terrace around the pool, breathtaking panorama.' },
        { title: 'Snack-bar & barbecue', text: 'Snack-bar with terrace and barbecue, in season, facing the bay of Tabarka.' },
      ],
    },
    piscine: { text: 'At the heart of Les Mimosas, a pool with a breathtaking panoramic view of the bay of Tabarka. By day and by night, it invites relaxation, facing the sea and the mountain.' },
    tabarka: {
      intro: 'Tabarka is a rare place, blending the sea, the mountain and sand dunes — one of the least polluted regions of the country.',
      tourisme: 'With our partners, we organise hikes, scuba diving, sea outings, quad biking and picnics. A setting ideal for sporting activities.',
      activities: [
        { title: 'Hunting', text: 'A pioneer of wild-boar hunting in Tunisia, the Hôtel Les Mimosas has a true tradition dating back to the late 1940s. Over 200,000 ha of dense, lush forest, an exceptional site where wild boar are abundant.' },
        { title: 'Golf', text: 'The Tabarka Golf Course: 18 holes 10 minutes from the international airport, between seafront, forest and dunes. The work of Ronald Fream, a renowned international architect. 110 hectares on a beach unique in Tunisia.' },
        { title: 'Diving', text: 'Tabarka, one of the best scuba-diving areas in Tunisia, with wrecks and Mediterranean wildlife. Our partners organise dives for all levels.' },
        { title: 'Sea outings', text: 'Sea trips from Tabarka: coves, islands and coral cliffs, fishing and swimming off the beaten track.' },
      ],
    },
    livredor: { intro: 'Artists and personalities have been won over by Les Mimosas and left their mark here.' },
    contact: { intro: 'To contact us' },
    reservation: { intro: 'Book your stay' },
    form: {
      nom: 'Last name', prenom: 'First name', age: 'Age', nationalite: 'Nationality', adresse: 'Address', pays: 'Country',
      email: 'Email', tel: 'Phone', fax: 'Fax', gsm: 'Mobile', objet: 'Subject',
      telDomicile: 'Home phone', telPortable: 'Mobile phone',
      adultes: 'Adults', enfantsMoins2: 'Children -2 yrs', enfantsPlus2: 'Children +2 yrs', logements: 'Number of rooms',
      dateArrivee: 'Arrival date', dateDepart: 'Departure date',
      arrangement: 'Board', commentaire: 'Comment',
      arrangements: ['Room and Breakfast', 'Half Board', 'Full Board'],
    },
  },

  ar: {
    home: {
      ctaBook: 'احجز إقامتك',
      highlightsTitle: 'المميزات',
    },
    about: {
      body: 'ملاذ للسكينة والهدوء، يعود فندق الميموزا في أصله إلى قصر ريفي شُيّد عام 1895. تنتشر غرفه البالغ عددها 74 على مساحة 4 هكتارات في قلب المدينة، مطلّاً على طبرقة بين البحر والجبل وغابة البلوط الفليني.',
      p2: 'فإن الفندق — وهو مريح جداً — لا يتباهى بترف متكلّف، لكنه يقدّم ما قد لا يقدّمه الترف بالضرورة: الهدوء والسكينة والصفاء.',
      p3: 'تطلّ كل غرفة، لمحبّي الطبيعة، على منظر بانورامي نادر في تونس يشرف على البحر والجبل.',
    },
    rooms: {
      intro: 'يقدّم فندق الميموزا 72 غرفة و suite Junior، بإجمالي 154 سريراً، مبنية على شكل أجنحة وبيوت خشبية، بإطلالات بانورامية استثنائية على البحر بين المدينة والجبل والغابة.',
      equipHeading: 'جميع الغرف مجهّزة بـ',
      equip: ['حمّام أو دوش', 'مراحيض خاصة', 'هاتف', 'تدفئة وتكييف فردي', 'تلفزيون بالقمر الصناعي'],
      cards: [
        { name: 'غرفة بإطلالة على البحر', desc: 'أجنحة وبيوت خشبية بإطلالة بانورامية على البحر والمدينة والجبل والغابة.' },
        { name: 'غرفة مريحة', desc: 'غرف موزّعة بعناية على 4 هكتارات، في هدوء قلب المدينة.' },
        { name: 'جناح جونيور', desc: 'جناحان جونيور لإقامة عائلية أو لشخصين، بمساحة وراحة أكبر.' },
      ],
    },
    dining: {
      intro: 'يقدّم فندق الميموزا مأكولات عالمية وتونسية في مطعمه الرئيسي بخدمة الطاولات، حيث تطلّ النافذة على البحر والجبل. وتتكرّر المناظر ذاتها في المطعم حسب الطلب، الذي يعتمد أساساً على المأكولات البحرية والصيد المحلي، داخلاً وعلى التراس المحيط بالمسبح بإطلالة بانورامية خلّابة — فضلاً عن مقهى وجبات خفيفة مع تراس وشواء.',
      venues: [
        { title: 'المطعم الرئيسي', text: 'مأكولات عالمية وتونسية، خدمة طاولات، إطلالة على البحر والجبل.' },
        { title: 'مطعم حسب الطلب', text: 'بشكل أساسي مأكولات بحرية وصيد محلي، داخلاً وعلى التراس حول المسبح بإطلالة بانورامية.' },
        { title: 'مقهى وجبات خفيفة وشواء', text: 'مقهى وجبات خفيفة مع تراس وشواء، في الموسم، مقابل خليج طبرقة.' },
      ],
    },
    piscine: { text: 'في قلب الميموزا، مسبح بإطلالة بانورامية خلّابة على خليج طبرقة. نهاراً كان أم ليلاً، يدعو إلى الاسترخاء مقابل البحر والجبل.' },
    tabarka: {
      intro: 'طبرقة مكان نادر يجمع البحر والجبل وكثبان الرمل — من أقل مناطق البلاد تلوّثاً.',
      tourisme: 'مع شركائنا، ننظّم مسيرات وغطساً تحت الماء وخروجاً للبحر وجولات بالكواد وتنزّهات. إطار مثالي لممارسة الأنشطة الرياضية.',
      activities: [
        { title: 'الصيد', text: 'رائد في صيد الخنزير البري في تونس، يتمتّع فندق الميموزا بتقاليد حقيقية تعود إلى أواخر الأربعينيات. أكثر من 200 ألف هكتار من غابة كثيفة غنّاء، موقع استثنائي يكثر فيه الخنزير البري.' },
        { title: 'الغولف', text: 'ملعب غولف طبرقة: 18 حفرة على بُعد 10 دقائق من المطار الدولي، بين البحر والغابة والكثبان. من تصميم رونالد فريم، المهندس المعماري العالمي. 110 هكتارات على شاطئ فريد في تونس.' },
        { title: 'الغطس', text: 'طبرقة من أفضل مناطق الغطس تحت الماء في تونس، بوجود حطام وكائنات بحر متوسطية. ينظّم شركاؤنا غطساً لكل المستويات.' },
        { title: 'خرجات بحرية', text: 'خرجات بحرية انطلاقاً من طبرقة: خلجان وجزر وجروف مرجانية وصيد وسباحة بعيداً عن المسارات المعتادة.' },
      ],
    },
    livredor: { intro: 'لقد أعجب فنانون وشخصيات بارزة بالميموزا وتركوا بصمتهم هنا.' },
    contact: { intro: 'للتواصل معنا' },
    reservation: { intro: 'احجز إقامتك' },
    form: {
      nom: 'اللقب', prenom: 'الاسم', age: 'العمر', nationalite: 'الجنسية', adresse: 'العنوان', pays: 'البلد',
      email: 'البريد الإلكتروني', tel: 'الهاتف', fax: 'الفاكس', gsm: 'الجوال', objet: 'الموضوع',
      telDomicile: 'هاتف المنزل', telPortable: 'الجوال',
      adultes: 'البالغون', enfantsMoins2: 'أطفال أقل من سنتين', enfantsPlus2: 'أطفال أكثر من سنتين', logements: 'عدد الغرف',
      dateArrivee: 'تاريخ الوصول', dateDepart: 'تاريخ المغادرة',
      arrangement: 'نظام الإقامة', commentaire: 'ملاحظة',
      arrangements: ['سكن وفطور', 'نصف إقامة', 'إقامة كاملة'],
    },
  },
};
