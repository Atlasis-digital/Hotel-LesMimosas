// Guest reviews for the auto-scrolling "movie credits" marquee.
// Each review carries fr / en / ar text so it follows the site language.
// These are representative guest impressions for a 3-star Tabarka hotel.

export interface Review {
  name: string;
  location: string;
  rating: number;
  text: { fr: string; en: string; ar: string };
}

export const reviews: Review[] = [
  {
    name: 'Camille R.',
    location: 'Lyon, France',
    rating: 5,
    text: {
      fr: "Accueil chaleureux, chambre propre et la plage à deux pas. On reviendra !",
      en: "Warm welcome, clean room and the beach just steps away. We'll be back!",
      ar: "ترحيب دافئ وغرفة نظيفة والشاطئ على بُعد خطوات. سنعود بالتأكيد!",
    },
  },
  {
    name: 'Mohamed B.',
    location: 'Tunis, Tunisie',
    rating: 5,
    text: {
      fr: "Petit-déjeuner délicieux et personnel aux petits soins. Rapport qualité-prix excellent.",
      en: "Delicious breakfast and attentive staff. Excellent value for money.",
      ar: "إفطار لذيذ وطاقم مهتم. قيمة ممتازة مقابل السعر.",
    },
  },
  {
    name: 'Sophie L.',
    location: 'Bruxelles, Belgique',
    rating: 4,
    text: {
      fr: "Emplacement idéal pour explorer Tabarka. Calme et familial.",
      en: "Ideal location to explore Tabarka. Quiet and family-friendly.",
      ar: "موقع مثالي لاستكشاف طبرقة. هادئ ومناسب للعائلات.",
    },
  },
  {
    name: 'Youssef K.',
    location: 'Sfax, Tunisie',
    rating: 5,
    text: {
      fr: "Vue mer magnifique depuis la chambre, on s'est senti comme à la maison.",
      en: "Beautiful sea view from the room, felt like home.",
      ar: "إطلالة رائعة على البحر من الغرفة، شعرنا وكأننا في بيتنا.",
    },
  },
  {
    name: 'Anna T.',
    location: 'Berlin, Allemagne',
    rating: 4,
    text: {
      fr: "Bon rapport qualité-prix, proche du port et des restaurants.",
      en: "Good value, close to the port and restaurants.",
      ar: "سعر جيد وقريب من الميناء والمطاعم.",
    },
  },
  {
    name: 'Karim M.',
    location: 'Sousse, Tunisie',
    rating: 5,
    text: {
      fr: "L'hôtel est simple mais très propre, et l'équipe est adorable.",
      en: "The hotel is simple but very clean, and the team is lovely.",
      ar: "الفندق بسيط لكنه نظيف جداً والفريق رائع.",
    },
  },
  {
    name: 'Laura P.',
    location: 'Genève, Suisse',
    rating: 5,
    text: {
      fr: "On a adoré le calme et la proximité de la plage. Parfait pour se reposer.",
      en: "We loved the calm and the beach nearby. Perfect to unwind.",
      ar: "أحببنا الهدوء وقرب الشاطئ. مثالي للراحة.",
    },
  },
  {
    name: 'Mehdi H.',
    location: 'Monastir, Tunisie',
    rating: 4,
    text: {
      fr: "Wi-Fi correct, literie confortable, rien à redire pour le prix.",
      en: "Decent Wi-Fi, comfortable bedding, nothing to complain about for the price.",
      ar: "واي فاي جيد وفرش مريح، لا عيب مقابل السعر.",
    },
  },
  {
    name: 'Elena V.',
    location: 'Rome, Italie',
    rating: 5,
    text: {
      fr: "Petit déjeuner fait maison, on sent le soin dans les détails.",
      en: "Home-made breakfast, you can feel the care in the details.",
      ar: "إفطار منزلي، تشعر بالعناية في التفاصيل.",
    },
  },
  {
    name: 'Omar S.',
    location: 'Qatar',
    rating: 4,
    text: {
      fr: "Bon séjour en famille, les enfants ont profité de la plage.",
      en: "Nice family stay, the kids enjoyed the beach.",
      ar: "إقامة عائلية لطيفة، استمتع الأطفال بالشاطئ.",
    },
  },
  {
    name: 'Nadia F.',
    location: 'Paris, France',
    rating: 5,
    text: {
      fr: "Hôtes aux petits soins, nous avons été conseillés pour les visites. Merci !",
      en: "Caring hosts, they advised us on outings. Thank you!",
      ar: "مضيفون مهتمون ونصحونا بالجولات. شكراً!",
    },
  },
  {
    name: 'Thomas G.',
    location: 'Montréal, Canada',
    rating: 4,
    text: {
      fr: "Chambre fraîche en été grâce à la climatisation. Très appréciable.",
      en: "Cool room in summer thanks to A/C. Very welcome.",
      ar: "غرفة باردة صيفاً بفضل التكييف. أمر محمود جداً.",
    },
  },
  {
    name: 'Inès B.',
    location: 'Tunis, Tunisie',
    rating: 5,
    text: {
      fr: "Le meilleur rapport qualité-prix de Tabarka selon nous. On recommande.",
      en: "The best value in Tabarka in our view. We recommend it.",
      ar: "أفضل قيمة في طبرقة في رأينا. نوصي به.",
    },
  },
  {
    name: 'Paul D.',
    location: 'Marseille, France',
    rating: 4,
    text: {
      fr: "À 5 min à pied de la plage et du centre. Pratique et tranquille.",
      en: "5 min walk to the beach and town centre. Handy and quiet.",
      ar: "على بُعد 5 دقائق من الشاطئ والمركز. عملي وهادئ.",
    },
  },
  {
    name: 'Salma A.',
    location: 'Dubai, EAU',
    rating: 5,
    text: {
      fr: "Accueil souriant, chambre propre, on reviendra avec plaisir.",
      en: "Smiling welcome, clean room, we'll happily return.",
      ar: "ترحيب مبتسم وغرفة نظيفة، سنعود بكل سرور.",
    },
  },
  {
    name: 'Ridha C.',
    location: 'Bizerte, Tunisie',
    rating: 4,
    text: {
      fr: "Bon petit hôtel familial, parfait pour un week-end à la mer.",
      en: "Nice family hotel, perfect for a weekend by the sea.",
      ar: "فندق عائلي لطيف، مثالي لعطلة نهاية أسبوع على البحر.",
    },
  },
];
