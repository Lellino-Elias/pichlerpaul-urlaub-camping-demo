import type { CampsiteConfig } from "../types";

const IMG = "/campsites/pichlerpaul-urlaub";

const pichlerpaulUrlaub: CampsiteConfig = {
  name: "Da Bräuhauser",
  shortName: "Bräuhauser",
  slug: "pichlerpaul-urlaub",
  ort: "Stadl an der Mur",
  region: "Steiermark",
  brandKind: "Camping am Bauernhof",
  regionLong: "Bezirk Murau · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping am Bauernhof, am Fuße des Kreischbergs",
  claimEmphasis: "am Bauernhof",
  emailDetail: "eure Jausenstation mit Schmankerln aus eigener Landwirtschaft",
  intro:
    "Ein kleiner, familiär geführter Campingplatz am Bauernhof — direkt am Murradweg und am Fuße des Kreischbergs. Ruhige Stellplätze, Tiere zum Anfassen und eine Jausenstation mit Schmankerln aus eigener Landwirtschaft.",

  statement: {
    text: "Bei uns wachst du morgens zwischen Wiese und Bergen auf — und mittags gibt's die Jause aus eigener Landwirtschaft.",
    emphasis: "aus eigener Landwirtschaft",
  },

  pillars: [
    {
      title: "Camping am Murradweg",
      text: "Ruhige Stellplätze mit Wasser und Strom, mitten in der Natur am Fuße des Kreischbergs — der Murradweg führt direkt vorbei.",
      image: { src: `${IMG}/gallery-f99ac1df54.webp`, alt: "Blick über den Campingplatz mit Wohnmobilen und Bergkulisse" },
    },
    {
      title: "Echter Bauernhof",
      text: "Kühe und Kälber, Schweine, Schafe, Hasen und Katzen freuen sich auf deinen Besuch — Urlaub am Bauernhof zum Anfassen und Mitleben.",
      image: { src: `${IMG}/kids-fc4dbfa65e.webp`, alt: "Familie und Kinder füttern ein Schaf am Weidezaun des Bauernhofs Bräuhauser" },
    },
    {
      title: "Eigene Jausenstation",
      text: "Most, Säfte, Speck und Hauswürste aus eigener Landwirtschaft — serviert in unserer Jausenstation mit großer Sonnenterrasse.",
      image: { src: `${IMG}/gallery-276696b853.webp`, alt: "Sonnenterrasse der Jausenstation Bräuhauser mit gelben Murauer-Schirmen und Gästen" },
    },
  ],

  usps: [
    "Direkt am Murradweg",
    "Stellplätze mit Strom",
    "Urlaub am Bauernhof",
    "Eigene Jausenstation",
    "Sommer- & Wintercamping",
    "WLAN vorhanden",
  ],

  trust: {
    heading: "Drei Welten an einem Platz",
    headingEmphasis: "Drei Welten",
    intro:
      "Campingplatz, Bauernhof und Jausenstation gehen hier ineinander über: kurze Wege, viel Natur und eine Familie, die ihre Produkte noch selbst erzeugt — vom Most bis zur Hauswurst.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/kids-b7943e47d1.webp`, alt: "Wohnwagen mit Vorzelt auf der Wiese am Bräuhauser, Bergkulisse" },
  },

  breather: {
    image: { src: `${IMG}/accommodation-8538275f3e.webp`, alt: "Knorrige Bäume auf einem Bergrücken in der Murauer Bergwelt" },
    line: "Die Reinheit der unberührten Murauer Bergwelt.",
  },

  camping: {
    heading: "Camping am Fuße des Kreischbergs",
    intro:
      "Klein, ruhig und familiär — mit Wasser und Strom am Platz, dem Murradweg vor der Tür und einer Jausenstation, die den ganzen Tag für dich da ist.",
    features: [
      {
        title: "Ruhige Wiesenplätze",
        text: "Stellplätze in ruhiger Lage mit Wasser und Strom, zum Teil mit Kanal — auf gepflegter Wiese mit Blick in die Berge.",
        image: { src: `${IMG}/gallery-cd0f970e93.webp`, alt: "Wohnwagen mit Vorzelt auf der Campingwiese mit Bergblick" },
      },
      {
        title: "Klein & überschaubar",
        text: "Ein kleiner, feiner Platz, auf dem man sich noch kennt — mit genug Raum für Wohnwagen, Wohnmobil und ein ruhiges Stück Natur.",
        image: { src: `${IMG}/gallery-53e7f08eeb.webp`, alt: "Luftaufnahme des überschaubaren Campingplatzes mit Stellplätzen" },
      },
      {
        title: "Direkt am Murradweg",
        text: "Der bekannte Murradweg führt direkt am Platz vorbei — ein idealer Ausgangspunkt für Radtouren entlang der grünen Mur.",
        image: { src: `${IMG}/kids-77fd1dc89b.webp`, alt: "Familie beim Radfahren am Murradweg vor der Bergkulisse" },
      },
      {
        title: "Sommer- & Wintercamping",
        text: "Auch im Winter ein Zuhause: Die Skigebiete Kreischberg, Turracher Höhe und Flattnitz sind in kurzer Zeit erreichbar.",
        image: { src: `${IMG}/gallery-e4f8b0eecc.webp`, alt: "Kinder beim Eishockey auf dem Natureislaufplatz im Winter" },
      },
      {
        title: "Jausenstation am Platz",
        text: "Regionale Jause, ein kühles Murauerbier und hausgemachte Säfte — den ganzen Tag für Haus- und Campinggäste geöffnet.",
        image: { src: `${IMG}/gallery-986a26cb23.webp`, alt: "Brettljause mit Speck, Käse, Brot und Hausgemachtem" },
      },
      {
        title: "Gemütliche Gaststube",
        text: "60 Sitzplätze, eine große Sonnenterrasse und ein Spielraum laden zum gemütlichen Beisammensein mit der Familie ein.",
        image: { src: `${IMG}/gallery-8f6a95f407.webp`, alt: "Gemütliche Gaststube mit Holzmöbeln und gedeckten Tischen" },
      },
    ],
  },

  mobilheime: {
    heading: "Zimmer & Apartments",
    intro:
      "Lieber ein festes Dach über dem Kopf? Gemütliche Zimmer und drei neue Ferienapartments — mit Vollholzmöbeln, viel Ruhe und Frühstück aus eigener Landwirtschaft.",
    items: [
      {
        name: "Zimmer am Murradweg",
        kind: "Doppel- & Familienzimmer",
        text: "1 Doppelzimmer und 2 Familienzimmer für bis zu 4 Personen — mit Dusche/WC, Sat-TV, Kühlschrank und teilweise Balkon.",
        image: { src: `${IMG}/gallery-facdd8abfe.webp`, alt: "Helles Zimmer mit naturbelassenen Vollholzmöbeln" },
        priceFrom: 70,
        features: ["Dusche/WC & Sat-TV", "Naturbelassene Vollholzmöbel", "Teilweise Balkon", "Frühstücksbüffet"],
      },
      {
        name: "Ferienapartments",
        kind: "Apartment für 2–6 Personen",
        text: "Drei neue, gemütliche Apartments inkl. Bettwäsche — wahlweise mit Frühstück oder Halbpension, WLAN inklusive.",
        image: { src: `${IMG}/accommodation-c888459d45.webp`, alt: "Wohnraum eines Ferienapartments mit Küche und Essbereich" },
        priceFrom: 140,
        features: ["2 bis 6 Personen", "Inkl. Bettwäsche", "WLAN vorhanden", "Frühstück / Halbpension"],
      },
    ],
  },

  kinder: {
    heading: "Für kleine Gäste",
    intro:
      "Sandkiste, Trampolin, Spielraum und jede Menge Tiere — bei uns dürfen Kinder den ganzen Tag draußen sein.",
    features: [
      {
        title: "Spielplatz & Sandkiste",
        text: "Ein Kinderspielplatz mit Sandkiste direkt an der Sonnenterrasse — die Eltern haben den Nachwuchs dabei immer im Blick.",
        image: { src: `${IMG}/kids-fa0b497cc4.webp`, alt: "Kinder spielen in der Sandkiste am Bräuhauser" },
      },
      {
        title: "Toben im Grünen",
        text: "Trampolin und viel Wiese rund um den Hof — Platz zum Austoben zwischen Obstbäumen und Bergen.",
        image: { src: `${IMG}/kids-fa8eb38c2e.webp`, alt: "Kind springt auf dem Trampolin in der Obstwiese" },
      },
      {
        title: "Tiere zum Anfassen",
        text: "Hasen, Schafe, Schweine und Katzen wollen gestreichelt und gefüttert werden — Bauernhof zum Mitleben.",
        image: { src: `${IMG}/gallery-47424dd36b.webp`, alt: "Zwei zutrauliche Hasen im Stall am Bauernhof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um Stadl an der Mur",
    intro:
      "Wandern, Radfahren und Skifahren — die Murauer Bergwelt beginnt praktisch direkt vor dem Vorzelt.",
    items: [
      {
        title: "Wandern in der Bergwelt",
        text: "Geführte Familienwanderungen und unzählige Touren in die unberührte Bergwelt rund um den Kreischberg.",
        image: { src: `${IMG}/activity-02a026a35c.webp`, alt: "Gipfelkreuz auf einem Berg in der Murauer Bergwelt" },
      },
      {
        title: "Skifahren am Kreischberg",
        text: "46 Pistenkilometer am WM-Berg Kreischberg, nur rund 8 km entfernt — dazu Turracher Höhe und Flattnitz.",
        image: { src: `${IMG}/gallery-04dc7b955f.webp`, alt: "Skifahren auf den Pisten am Kreischberg" },
      },
      {
        title: "Radtouren entlang der Mur",
        text: "Der Murradweg und ein weites Radwegenetz führen direkt am Haus vorbei — vom Lungau bis nach Radkersburg.",
        image: { src: `${IMG}/gallery-c66778cc00.webp`, alt: "Radfahrer auf dem Murradweg durch grüne Wiesen" },
      },
    ],
  },

  anreise: {
    heading: "Anreise ins obere Murtal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauernautobahn A10 und weiter durch das obere Murtal (B97) bis Stadl an der Mur — Steindorf 23a.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof in Murau, von dort bringen dich regionale Verbindungen weiter nach Stadl an der Mur.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Salzburg und Klagenfurt liegen jeweils rund 1,5 Autostunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Willkommen beim Bräuhauser",
    headingEmphasis: "Bräuhauser",
    intro: "Ein paar Eindrücke von Hof, Jausenstation und den Tagen am Platz.",
    tag: "Stadl an der Mur · Murau",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-9630f22b20.webp`, alt: “Hölzerne 'da Bräuhauser'-Willkommenstafel mit Holzstock-Herz am Murradweg” },
      { src: `${IMG}/gallery-ab2321c02c.webp`, alt: “Kinder spielen in der Sandkiste vor der Jausenstation Bräuhauser” },
      { src: `${IMG}/gallery-f1f675d601.webp`, alt: "Zwei Kinder mit Eis vor der Bergkulisse" },
      { src: `${IMG}/gallery-672af3be49.webp`, alt: "Gäste beim Frühstück mit hauseigenen Produkten" },
      { src: `${IMG}/gallery-3702ed9fcb.webp`, alt: "Frisches Salatbüffet in der Jausenstation" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz beim Bräuhauser",
    headingEmphasis: "beim Bräuhauser",
    intro:
      "Wähle Zeitraum und Unterkunft — Familie Pichler meldet sich persönlich mit deiner Verfügbarkeit zurück.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Nacht für 2 Personen, exkl. Kurtaxe · Camping-Stellplatz auf Anfrage — bitte mit der Familie bestätigen.",
    highlight: {
      title: "Hof, Camping & Jause",
      text: "Alles an einem Platz — und die Jause kommt aus eigener Landwirtschaft.",
    },
    categories: [
      { id: "stellplatz", label: "Camping-Stellplatz" },
      { id: "doppelzimmer", label: "Doppelzimmer", perNight: 100 },
      { id: "familienzimmer", label: "Familienzimmer", perNight: 130 },
      { id: "apartment", label: "Apartment", perNight: 140 },
    ],
  },

  kontakt: {
    coords: { lat: 47.088964, lng: 13.988778 },
    tel: "+43 664 124 60 93",
    telHref: "tel:+436641246093",
    mail: "info@pichlerpaul-urlaub.at",
    facebook: "https://www.facebook.com/da.brauhauser",
    adresse: "Steindorf 23a · 8862 Stadl an der Mur · Steiermark",
  },

  languages: ["DE", "NL"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Zimmer & Apartments", href: "#mobilheime" },
      ],
    },
    { label: "Bauernhof", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default pichlerpaulUrlaub;
