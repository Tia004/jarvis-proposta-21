export interface Room {
  id: string;
  name: string;
  category: "all" | "suite" | "deluxe" | "comfort" | "family";
  categoryLabel: string;
  surface: string;
  guests: string;
  bedType: string;
  priceFrom: number;
  image: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  amenities: string[];
  highlights: string[];
}

export const ROOMS: Room[] = [
  {
    id: "suite-marina",
    name: "Suite Marina Storica",
    category: "suite",
    categoryLabel: "Suite Esclusiva",
    surface: "35 m²",
    guests: "Fino a 3 ospiti",
    bedType: "Letto Matrimoniale King Size + Salottino",
    priceFrom: 135,
    image: "/images/room-suite.png",
    tag: "Massimo Comfort",
    shortDescription: "Spaziosa suite con zona living separata, rifiniture in legno massello e vista suggestiva sugli scorci antichi della Marina.",
    fullDescription: "La Suite Marina Storica rappresenta la massima espressione dell'accoglienza di Hotel Italia. Dotata di un salotto privato arredato con elementi che richiamano l'artigianato sardo, offre un'atmosfera ovattata e silenziosa grazie al triplo vetro a taglio termico. Il bagno padronale include un'ampia doccia a getto rigenerante e set di cortesia biologico.",
    amenities: [
      "Climatizzazione autonoma caldo/freddo",
      "TV Smart 50 pollici con canali satellitari",
      "Cassaforte elettronica per laptop",
      "Bollitore con selezione tisane e caffe",
      "Frigobar con bevande rinfrescanti",
      "Wi-Fi Fibra 1 Gbps illimitato",
      "Accappatoi e ciabattine morbide"
    ],
    highlights: [
      "Zona giorno separata per relax o lavoro",
      "Insonorizzazione acustica certificata",
      "Colazione servita in camera su richiesta"
    ]
  },
  {
    id: "deluxe-balcone",
    name: "Deluxe con Balcone Marina",
    category: "deluxe",
    categoryLabel: "Camera Deluxe",
    surface: "24 m²",
    guests: "2 ospiti",
    bedType: "Letto Matrimoniale King Size o Due Letti Singoli",
    priceFrom: 105,
    image: "/images/room-deluxe.png",
    tag: "Balcone Vista Borgo",
    shortDescription: "Luminosa camera matrimoniale con affaccio su Via Sardegna, dotata di balconcino in ferro battuto in stile primi Novecento.",
    fullDescription: "La Deluxe con Balcone unisce l'eleganza dell'architettura originaria del 1928 ai piu moderni standard di accoglienza. Il parquet in rovere naturale e i caldi dettagli color terracotta regalano un'atmosfera calda e rilassante dopo una passeggiata tra i bastioni cagliaritani.",
    amenities: [
      "Balconcino privato in ferro battuto",
      "Letto ortopedico di alta gamma",
      "Doccia a pioggia walk-in",
      "Asciugacapelli professionale 2000W",
      "Scrivania con prese USB e USB-C integrate",
      "TV LED 43 pollici con canali internazionali"
    ],
    highlights: [
      "Affaccio caratteristico sui vicoli della Marina",
      "Luminosita naturale e isolamento termico",
      "Ideale per soggiorni romantici o di coppia"
    ]
  },
  {
    id: "comfort-doppia",
    name: "Comfort Doppia Matrimoniale",
    category: "comfort",
    categoryLabel: "Camera Comfort",
    surface: "19 m²",
    guests: "2 ospiti",
    bedType: "Letto Matrimoniale Queen Size",
    priceFrom: 85,
    image: "/images/room-comfort.png",
    tag: "Essenziale & Silenziosa",
    shortDescription: "La soluzione ideale per viaggiatori dinamici e professionisti che ricercano riposo assoluto, praticita e connettivita veloce.",
    fullDescription: "Studiata per garantire la massima funzionalita senza rinunciare al calore dell'ospitalita sarda. Le camere Comfort affacciano sulle corti interne dell'albergo, assicurando quiete totale anche durante i vivaci fine settimana del centro cittadino.",
    amenities: [
      "Letto ergonomico anallergico",
      "Aria condizionata regolabile",
      "Bagno privato con box doccia",
      "Wi-Fi in fibra ad alta velocita",
      "Scrivania compatta per lavoro",
      "Cassaforte e minibar"
    ],
    highlights: [
      "Massima silenziosita su corte interna",
      "Miglior rapporto qualita/prezzo per lavoro",
      "Accessibile comodamente tramite ascensore"
    ]
  },
  {
    id: "family-room",
    name: "Family Room Comunicante",
    category: "family",
    categoryLabel: "Spazio Famiglia",
    surface: "32 m²",
    guests: "Fino a 4 ospiti",
    bedType: "Letto Matrimoniale + 2 Letti Singoli / Culla",
    priceFrom: 130,
    image: "/images/room-family.png",
    tag: "Ideale Famiglie",
    shortDescription: "Due ambienti comunicanti con doppi servizi o ampio spazio comune per viaggiare insieme mantenendo la propria privacy.",
    fullDescription: "Pensata appositamente per le famiglie che visitano Cagliari o che fanno tappa prima di imbarcarsi con i traghetti verso la penisola. La Family Room offre spazi generosi per valigie e passeggini, con dotazioni per bambini disponibili gratuitamente su richiesta (scaldabiberon, spondine e culla).",
    amenities: [
      "Doppio ambiente con porte insonorizzate",
      "Due TV indipendenti per genitori e figli",
      "Doppio set di biancheria anallergica",
      "Frigorifero capiente per merende e bevande",
      "Bollitore e tazze per la famiglia",
      "Culla o lettino bimbo disponibili su richiesta"
    ],
    highlights: [
      "Comfort per tutta la famiglia",
      "Posizione a pochi minuti dal molo imbarco",
      "Spazio valigie extra capiente"
    ]
  }
];
