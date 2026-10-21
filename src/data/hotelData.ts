export interface Department {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  hours: string;
  image: string;
  description: string;
  capabilities: string[];
}

export interface HotelService {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
}

export interface ExperienceStep {
  step: number;
  title: string;
  timeframe: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "prenotazioni" | "servizi" | "posizione" | "accessibilita";
}

export interface LocationDistance {
  place: string;
  distance: string;
  duration: string;
  mode: string;
  icon: string;
  note: string;
}

export const HOTEL_INFO = {
  name: "Hotel Italia Cagliari",
  fullName: "Contatti Hotel Italia - Cagliari | Info e Prenotazioni",
  stars: 3,
  foundationYear: 1928,
  address: "Via Sardegna, 31",
  postalCode: "09124",
  city: "Cagliari",
  province: "CA",
  region: "Sardegna",
  country: "Italia",
  district: "Quartiere Storico Marina",
  phones: [
    { label: "Ricevimento Principale", number: "+39 070 660410", callValue: "+39070660410" },
    { label: "Linea Secondaria", number: "+39 070 660510", callValue: "+39070660510" },
  ],
  emails: [
    { label: "Informazioni & Prenotazioni", address: "info@hotelitaliacagliari.com", purpose: "Disponibilita, preventivi su misura, modifiche" },
    { label: "Direzione Generale", address: "direzione@hotelitaliacagliari.com", purpose: "Gestione soggiorni speciali e accordi quadro" },
    { label: "Ufficio Sales & Marketing", address: "sales@hotelitaliacagliari.com", purpose: "Convenzioni aziendali e gruppi" },
  ],
  skype: "hotelitalia3",
  checkIn: "Dalle ore 14:00 (Reception attiva h24)",
  checkOut: "Entro le ore 11:00",
  legal: {
    companyName: "Hotel Italia Co.s.s.a.t. s.p.a.",
    registeredOffice: "Via Sardegna, 31 - 09124 Cagliari (CA)",
    reaNumber: "CA-67249",
    shareCapital: "Euro 103.300,00 i.v.",
    vatNumber: "00140160920",
    taxCode: "00140160920",
    grants: [
      {
        title: "Fondo (R)esisto - Legge Regionale n. 22/2020 art. 14",
        description: "Sovvenzioni a favore delle imprese per la salvaguardia dei livelli occupazionali.",
        badge: "Regione Sardegna"
      },
      {
        title: "PNRR Missione 1, Componente 3, Investimento 4.2.5",
        description: "Finanziato con risorse dell'Unione Europea - NextGenerationEU per l'ampliamento e la sostenibilita della struttura produttiva ricettiva.",
        badge: "NextGenEU"
      }
    ]
  }
};

export const OPERATIONAL_DEPARTMENTS: Department[] = [
  {
    id: "front-desk",
    name: "Ricevimento & Concierge",
    role: "Front Desk H24 & Accoglienza Ospiti",
    email: "info@hotelitaliacagliari.com",
    phone: "+39 070 660410",
    hours: "24 ore su 24, 7 giorni su 7",
    image: "/images/team-reception.png",
    description: "Presidio continuo per check-in diurni e notturni, consegna chiavi, informazioni sulla citta e custodia bagagli.",
    capabilities: ["Check-in notturno garantito", "Informazioni trasporti e traghetti", "Deposito bagagli custodito", "Assistenza in 4 lingue"]
  },
  {
    id: "booking-office",
    name: "Ufficio Prenotazioni",
    role: "Booking Desk & Miglior Prezzo Garantito",
    email: "info@hotelitaliacagliari.com",
    phone: "+39 070 660410",
    hours: "Lun - Dom: 08:00 - 21:00",
    image: "/images/team-concierge.png",
    description: "Gestione diretta delle tariffe web garantite, applicazione codici promozionali Traghetti Lines e richieste per gruppi o eventi.",
    capabilities: ["Conferma immediata senza intermediari", "Gestione modifiche e cancellazioni flessibili", "Fatturazione elettronica per aziende", "Sconti convenzione marittima"]
  },
  {
    id: "hospitality-service",
    name: "Servizio ai Piani & Qualita",
    role: "Housekeeping & Manutenzione Comfort",
    email: "direzione@hotelitaliacagliari.com",
    phone: "+39 070 660510",
    hours: "Tutti i giorni: 07:30 - 16:00",
    image: "/images/team-housekeeping.png",
    description: "Cura minuziosa dell'igiene, sanificazione e riassetto quotidiano secondo rigorosi standard di ospitalita.",
    capabilities: ["Sanificazione quotidiana", "Biancheria anallergica di pregio", "Dotazioni cortesia sostenibili", "Preparazione camere comunicanti"]
  },
  {
    id: "management",
    name: "Direzione & Coordinamento",
    role: "Direzione Operativa Co.s.s.a.t. s.p.a.",
    email: "direzione@hotelitaliacagliari.com",
    phone: "+39 070 660410",
    hours: "Lun - Ven: 09:00 - 18:30",
    image: "/images/team-direzione.png",
    description: "Supervisione delle linee guida dell'ospitalita, rapporti con partner istituzionali e monitoraggio dell'accessibilita.",
    capabilities: ["Supervisione accessibilita WCAG", "Rapporti con enti e partner territoriali", "Garanzia conformita statutaria", "Gestione feedback di soggiorno"]
  }
];

export const HOTEL_SERVICES: HotelService[] = [
  {
    id: "h24-reception",
    icon: "bi-clock-history",
    title: "Reception & Portineria H24",
    subtitle: "Liberta di arrivo a qualsiasi ora",
    description: "Nessun vincolo di orario per il check-in: il nostro personale e sempre presente per accogliervi all'arrivo dei traghetti o dei voli notturni.",
    badge: "Sempre Attivo"
  },
  {
    id: "sardinian-breakfast",
    icon: "bi-cup-hot",
    title: "Prima Colazione Sarda",
    subtitle: "Autenticita e dolci tradizionali",
    description: "Buffet mattutino con pardulas, sebadas, miele sardo, marmellate locali, formaggi del territorio, pane carasau e caffetteria espressa italiana.",
    badge: "Tipicita Locale"
  },
  {
    id: "wifi-fiber",
    icon: "bi-wifi",
    title: "Fibra Ottica ad Alta Velocita",
    subtitle: "Connessione continua in ogni area",
    description: "Rete Wi-Fi ad alte prestazioni disponibile gratuitamente sia nelle camere che negli spazi comuni, ideale per smart working.",
    badge: "Fibra 1 Gbps"
  },
  {
    id: "luggage-storage",
    icon: "bi-backpack",
    title: "Deposito Bagagli Custodito",
    subtitle: "Godetevi Cagliari senza pensieri",
    description: "Servizio gratuito per lasciare i bagagli in sicurezza prima del check-in o dopo il check-out per le vostre ultime ore in citta.",
    badge: "Gratuito"
  },
  {
    id: "parking-agreement",
    icon: "bi-p-circle",
    title: "Parcheggio Convenzionato",
    subtitle: "Sosta agevole vicino al porto",
    description: "Posti auto riservati in garage custodito a breve distanza dall'hotel (circa 250m) con tariffe concordate speciali per gli ospiti.",
    badge: "Convenzione"
  },
  {
    id: "ac-soundproof",
    icon: "bi-volume-mute",
    title: "Isolamento Acustico & Clima",
    subtitle: "Tranquillita nel cuore vivo della Marina",
    description: "Infissi a doppio vetro termoacustico di ultima generazione e climatizzazione regolabile autonomamente in ogni stanza.",
    badge: "Comfort Garantito"
  },
  {
    id: "ferry-discount",
    icon: "bi-tsunami",
    title: "Convenzione Traghetti Lines",
    subtitle: "Sconti per chi viaggia via mare",
    description: "Agevolazioni tariffarie per i collegamenti marittimi da e per la Sardegna per tutti gli ospiti con prenotazione diretta confermata.",
    badge: "Vantaggio Diretto"
  },
  {
    id: "meeting-space",
    icon: "bi-easel",
    title: "Sale Meeting & Spazio Mostre",
    subtitle: "Eventi intimi e mostre d'arte",
    description: "Spazi polifunzionali per presentazioni, incontri di lavoro riservati o esposizioni culturali nel cuore storico cagliaritano.",
    badge: "Su Richiesta"
  }
];

export const GUEST_JOURNEY_STEPS: ExperienceStep[] = [
  {
    step: 1,
    title: "Richiesta Diretta & Miglior Tariffa",
    timeframe: "Prima del soggiorno",
    description: "Utilizzate i canali diretti (telefono, email o booking mask) per concordare la tipologia ideale di camera senza sovrapprezzi di intermediazione.",
    highlight: "Risposta rapida entro 2 ore nelle fasce diurne",
    icon: "bi-chat-dots"
  },
  {
    step: 2,
    title: "Conferma Trasparente & Agevolazioni",
    timeframe: "Pochi istanti dopo",
    description: "Ricezione voucher di prenotazione con indicazioni stradali dettagliate dal porto e dalla stazione ferroviaria, con codice convenzione traghetto.",
    highlight: "Politica di cancellazione chiara e flessibile",
    icon: "bi-check2-circle"
  },
  {
    step: 3,
    title: "Arrivo & Check-in Personalizzato",
    timeframe: "Giorno di arrivo h24",
    description: "Accoglienza professionale nella nostra hall storica. Consegna immediata della camera o custodia gratuita dei bagagli se arrivate in anticipo.",
    highlight: "Accesso comodo e immediato dai collegamenti marittimi",
    icon: "bi-door-open"
  },
  {
    step: 4,
    title: "Soggiorno & Guida Territoriale",
    timeframe: "Durante la permanenza",
    description: "Il nostro personale di ricevimento consiglia le migliori trattorie tipiche della Marina, le botteghe artigiane e le calette del litorale cagliaritano.",
    highlight: "Mappa stampata e suggerimenti autentici della citta",
    icon: "bi-compass"
  },
  {
    step: 5,
    title: "Risveglio con Sapori dell'Isola",
    timeframe: "Ogni mattina (07:00 - 10:00)",
    description: "Colazione a buffet dolce e salata con prodotti della tradizione sarda per iniziare la giornata con la giusta energia.",
    highlight: "Opzioni per intolleranze alimentari su richiesta",
    icon: "bi-egg-fried"
  },
  {
    step: 6,
    title: "Partenza Semplice & Assistenza Transfer",
    timeframe: "Check-out entro le 11:00",
    description: "Chiusura rapida della pratica di soggiorno, possibilita di late check-out concordato e prenotazione taxi o orari treno per l'aeroporto di Elmas.",
    highlight: "Custodia bagagli fino all'orario di imbarco",
    icon: "bi-send"
  }
];

export const STRATEGIC_DISTANCES: LocationDistance[] = [
  {
    place: "Porto di Cagliari & Molo Sanita",
    distance: "300 metri",
    duration: "3 min a piedi",
    mode: "Passeggiata pianeggiante",
    icon: "bi-ship",
    note: "Ideale per imbarchi e arrivi serali con traghetti da Civitavecchia, Napoli e Palermo."
  },
  {
    place: "Stazione Ferroviaria & Piazza Matteotti",
    distance: "500 metri",
    duration: "5 min a piedi",
    mode: "Percorso pedonale lungo Via Roma",
    icon: "bi-train-front",
    note: "Capolinea di tutti i treni regionali e della metropolitana leggera di superficie."
  },
  {
    place: "Aeroporto di Cagliari-Elmas (CAG)",
    distance: "8 km",
    duration: "6-8 min in treno / 12 min in auto",
    mode: "Treno diretto dalla Stazione Centrale",
    icon: "bi-airplane",
    note: "Treni ogni 15-20 minuti con tariffa ordinaria di € 1,30 a tratta."
  },
  {
    place: "Spiaggia del Poetto & Marina Piccola",
    distance: "5 km",
    duration: "15 min con bus CTM",
    mode: "Linee PF, PQ, Poetto Express da Via Roma",
    icon: "bi-sun",
    note: "Fermata del bus a 150 metri dall'hotel per raggiungere la spiaggia cittadina."
  },
  {
    place: "Bastione di Saint Remy & Castello",
    distance: "600 metri",
    duration: "8 min a piedi",
    mode: "Passeggiata verso Piazza Costituzione",
    icon: "bi-bank",
    note: "Ascensori pubblici gratuiti disponibili per salire agevolmente alla rocca medievale."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "Quali sono gli orari di check-in e check-out?",
    answer: "Il check-in e garantito a partire dalle ore 14:00. Essendo la nostra reception presidiata 24 ore su 24, potete arrivare comodamente anche in tarda serata o durante la notte senza alcun supplemento. Il check-out deve essere effettuato entro le ore 11:00.",
    category: "prenotazioni"
  },
  {
    id: "faq-2",
    question: "Come posso raggiungere l'hotel dal porto o dalla stazione ferroviaria?",
    answer: "Hotel Italia si trova in Via Sardegna 31, nel cuore della Marina. Dal molo traghetti dista appena 300 metri a piedi attraversando la via Roma. Dalla stazione centrale di Piazza Matteotti la distanza e di circa 500 metri, facilmente percorribile a piedi con bagagli in 5 minuti.",
    category: "posizione"
  },
  {
    id: "faq-3",
    question: "E disponibile un parcheggio per gli ospiti che viaggiano in auto?",
    answer: "Trovandoci nel quartiere storico della Marina (zona a traffico limitato in fasce prestabilite), disponiamo di una convenzione con un garage custodito e coperto a circa 250 metri dall'albergo. Al vostro arrivo vi forniremo il pass di accesso temporaneo e la tariffa concordata agevolata.",
    category: "servizi"
  },
  {
    id: "faq-4",
    question: "Come funziona la convenzione con i traghetti?",
    answer: "Grazie all'accordo con Traghetti Lines, chi prenota direttamente un soggiorno presso Hotel Italia puo richiedere all'ufficio prenotazioni il codice sconto per l'acquisto dei biglietti marittimi per la Sardegna.",
    category: "prenotazioni"
  },
  {
    id: "faq-5",
    question: "Quali misure sono adottate per l'accessibilita delle persone con disabilita?",
    answer: "Hotel Italia dispone di ascensore ai piani, camere prive di barriere architettoniche e percorsi agevoli. Nella nostra pagina dedicata all'accessibilita (/accessibilita) documentiamo con totale trasparenza gli standard conformi alla norma UNI CEI EN 301549 e WCAG 2.1 AA.",
    category: "accessibilita"
  },
  {
    id: "faq-6",
    question: "La colazione e inclusa e ci sono alternative per celiaci o intolleranti?",
    answer: "La prima colazione a buffet offre un'ampia varieta di dolci tradizionali sardi, pane fresco, salumi e formaggi locali. Su richiesta preventiva forniamo prodotti confezionati senza glutine certificati AIC e latte vegetale.",
    category: "servizi"
  }
];
