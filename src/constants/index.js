import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  logo,
  kobieta1,
  kobieta2,
  kobieta3,
  mezczyzna1,
  salon,
} from '../assets';

export const navigation = [
  {
    id: '0',
    title: 'Masaże',
    url: '#massage',
  },
  {
    id: '1',
    title: 'Cennik',
    url: '#pricing',
  },
  {
    id: '2',
    title: 'Opinie',
    url: '#opinions',
  },
  {
    id: '3',
    title: 'Jak dojechać',
    url: '#map',
  },
  {
    id: '4',
    title: 'Kontakt',
    url: '#contact',
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [kobieta1, kobieta2, kobieta3, mezczyzna1, salon];

export const brainwaveServices = [
  'Photo generating',
  'Photo enhance',
  'Seamless Integration',
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: '0',
    title: 'Voice recognition',
    text: 'Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.',
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: '1',
    title: 'Gamification',
    text: 'Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap2,
  },
  {
    id: '2',
    title: 'Chatbot customization',
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: 'May 2023',
    status: 'done',
    imageUrl: roadmap3,
  },
  {
    id: '3',
    title: 'Integration with APIs',
    text: 'Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.',
    date: 'May 2023',
    status: 'progress',
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: '0',
    title: 'Seamless Integration',
    text: collabText,
  },
  {
    id: '1',
    title: 'Smart Automation',
  },
  {
    id: '2',
    title: 'Top-notch Security',
  },
];

export const collabApps = [
  {
    id: '0',
    title: 'Figma',
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: '1',
    title: 'Notion',
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: '2',
    title: 'Discord',
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: '3',
    title: 'Slack',
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: '4',
    title: 'Photoshop',
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: '5',
    title: 'Protopie',
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: '6',
    title: 'Framer',
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: '7',
    title: 'Raindrop',
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: '0',
    title: 'Masaże klasyczne',
    description:
      'Masaż klasyczny jest jedną z najpopularniejszych form masażu o bardzo szerokim spectrum zastosowań. Posiada charakter  leczniczy oraz relaksacyjny .Głównym zadaniem masażu jest  usunięcie napięć  mięśniowych,poprawa samopoczucia, lepsze ukrwienieni tkanek czy też usunięcie bóli głowy.',
    price: 'od 100 zł',
    features: [
      'Masaż klasyczny pleców 120 zł',
      'Masaż klasyczny całe ciało 140 zł',
      'Masaż tkanek głebokich pleców 120 zł',
      'Masaż tkanek głebokich całe ciało 140 zł',
    ],
  },
  {
    id: '1',
    title: 'Facemodeling / Kobido',
    description:
      'Facemodeling to naturalna terapia modelowania  i odmłodzenia twarzy.W  skład facemodelingu  wchodzi  szereg unikatowych technik  masażu:masaż  tkanek głębokich, masaż transbukalny czyli masaż wewnątrz  jamy ustnej ,drenaż limfatyczny,kinesiotaping. Dzięki zastosowaniu tych technik możemy odmłodzić naszą twarz o nawet kilkanaście lat. Ponadto to także praca z brzuchem ,stopami, szwami czaszki,klatką piersiową  ponieważ przekłada się to także na wygląd twarzy.\n Kobido to masaż  który   przywraca  jedność skórze twarzy,szyii i dekoltu. Masaż twarzy to najskuteczniejsza forma terapi odmłodzenia skóry ,dzięki odpowiednim technikom usuwane są  napięcia  mięśniowe,zmarszczki, oraz obrzęki. Etapy masażu kobido  to masaż tkanek głębokich,relaksacja,drenaż limfatyczny oraz lifting.',
    price: 'od 150 zł',
    features: [
      'Kobido 150 zł',
      'Facemodeling 350 zł',
      'Priority support to solve issues quickly',
    ],
  },
  {
    id: '2',
    title: 'Terapia wisceralna',
    description:
      'Terapia wisceralna  czyli inaczej terapia narządów wewnętrznych której  zadaniem jest poprawa lepszego krążenia krwi i limfy. To masaż który przywraca prawidłowy stan układu  trzewnego  oraz powiezi i mięśni.To wskazana terapia dla osób borykających się z problemami  między innymi: rwa kulszowa,obrzęki nóg,bóle barków, refluks,bóle kręgosłupa i wiele innych.',
    price: 'od 100 zł',
    features: ['Terapia Wisceralna 100 zł'],
  },
];

export const benefits = [
  {
    id: '0',
    title: 'Eksperckie doradztwo',
    text: 'Nasi doświadczeni terapeuci masażu służą fachowym doradztwem i pomocą, aby zapewnić Ci najlepsze doznania relaksacyjne.',
    backgroundUrl: './src/assets/benefits/card-1.svg',
    iconUrl: benefitIcon1,
    imageUrl: logo,
  },
  {
    id: '1',
    title: 'Indywidualne podejście',
    text: 'Zapewniamy spersonalizowane podejście do Twoich potrzeb, dostosowując każdy masaż do Twoich preferencji i wymagań.',
    backgroundUrl: './src/assets/benefits/card-2.svg',
    iconUrl: benefitIcon2,
    imageUrl: logo,
    light: true,
  },
  {
    id: '2',
    title: 'Pełne odprężenie',
    text: 'Poczuj pełne odprężenie i ulgę w naszym ośrodku, gdzie dbamy o każdy detal, aby zapewnić Ci wyjątkowe doświadczenie.',
    backgroundUrl: './src/assets/benefits/card-3.svg',
    iconUrl: benefitIcon3,
    imageUrl: logo,
  },
  {
    id: '3',
    title: 'Szybka reakcja',
    text: 'Nasza obsługa zapewnia szybką reakcję na Twoje potrzeby, abyś mógł/mogła cieszyć się naszymi usługami w najbardziej komfortowy sposób.',
    backgroundUrl: './src/assets/benefits/card-4.svg',
    iconUrl: benefitIcon4,
    imageUrl: logo,
    light: true,
  },
  {
    id: '4',
    title: 'Rzetelne wsparcie',
    text: 'Oferujemy rzetelne wsparcie i profesjonalną opiekę na każdym etapie Twojej podróży ku lepszemu samopoczuciu i relaksowi.',
    backgroundUrl: './src/assets/benefits/card-5.svg',
    iconUrl: benefitIcon1,
    imageUrl: logo,
  },
  {
    id: '5',
    title: 'Odkryj harmonię',
    text: 'Odkryj harmonię ciała i umysłu podczas sesji masażu zaprojektowanych specjalnie dla Ciebie, byś poczuł/poczuła się w pełni zregenerowany/zregenerowana.',
    backgroundUrl: './src/assets/benefits/card-6.svg',
    iconUrl: benefitIcon2,
    imageUrl: logo,
  },
];

export const socials = [
  {
    id: '0',
    title: 'Discord',
    iconUrl: discordBlack,
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    iconUrl: twitter,
    url: '#',
  },
  {
    id: '2',
    title: 'Instagram',
    iconUrl: instagram,
    url: '#',
  },
  {
    id: '3',
    title: 'Telegram',
    iconUrl: telegram,
    url: '#',
  },
  {
    id: '4',
    title: 'Facebook',
    iconUrl: facebook,
    url: '#',
  },
];
