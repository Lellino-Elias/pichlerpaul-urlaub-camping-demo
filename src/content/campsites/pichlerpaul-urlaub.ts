import type { CampsiteConfig } from "../types";

/**
 * Da Bräuhauser — Familie Pichler Paul, Steindorf 23a, 8862 Stadl an der Mur,
 * Bezirk Murau, Steiermark. Kleiner Bauernhof mit Sommer-, Winter- und
 * Dauercamping, Jausenstation, Zimmern und Apartments, am Fuße des Kreischbergs,
 * direkt am Murradweg. Alle Texte/Fakten belegt aus pichlerpaul-urlaub.at
 * (Digest-Scrape 2026-06). Stellplatzpreis ist nirgends ausgewiesen → "auf Anfrage";
 * Zimmer-/Apartmentpreise wörtlich von der Preisseite.
 */
const IMG = "/campsites/pichlerpaul-urlaub";

const pichlerpaul: CampsiteConfig = {
  name: "Da Bräuhauser",
  shortName: "Bräuhauser",
  slug: "pichlerpaul-urlaub",
  ort: "Stadl an der Mur",
  region: "Steiermark",
  brandKind: "Camping am Bauernhof",
  regionLong: "Murtal · Bezirk Murau · Steiermark",

  heroVariant: "center",

  claim: "Camping am Bauernhof, am Fuße des Kreischbergs",
  claimEmphasis: "am Fuße des Kreischbergs",
  emailDetail: "die hofeigene Jausenstation mit eigenen Schmankerln",
  intro:
    "Ein kleiner, familiär geführter Campingplatz am Fuße des Kreischbergs: ebene Stellplätze mit Wasser und Strom, ein Bauernhof zum Anfassen und eine Jausenstation mit Schmankerln aus eigener Landwirtschaft — direkt am Murradweg.",

  statement: {
    text: "Bei uns ist Camping noch Bauernhofleben: Tiere zum Streicheln, Jause aus eigener Landwirtschaft und der Kreischberg im Rücken.",
    emphasis: "Bauernhofleben",
  },

  pillars: [
    {
      title: "Camping = Glück pur",
      text: "Unser kleiner, feiner Platz in ruhiger Lage — Wohnwagen, Wohnmobil oder Zelt, mit Bergblick und viel Wiese ringsum.",
      image: { src: `${IMG}/kids-b7943e47d1.webp`, alt: "Wohnwagen mit Vorzelt auf der Wiese beim Bräuhauser, Berge im Hintergrund" },
    },
    {
      title: "Bauernhof zum Anfassen",
      text: "Kühe und Kälber, Schweine, Schafe, Katzen, Puten und Hasen freuen sich auf deinen Besuch — Streicheln ausdrücklich erlaubt.",
      image: { src: `${IMG}/kids-fc4dbfa65e.webp`, alt: "Familie streichelt ein Schaf am Bauernhof der Familie Pichler Paul" },
    },
    {
      title: "Jause aus eigener Hand",
      text: "In der Jausenstation gibt es Most, Speck, Hauswürste und Säfte aus eigener Landwirtschaft — dazu ein kühles Murauerbier.",
      image: { src: `${IMG}/gallery-276696b853.webp`, alt: "Jausenstation des Bräuhausers mit Sonnenterrasse und Murauer Schirmen" },
    },
  ],

  usps: [
    "Wasser & Strom am Platz",
    "Barrierefreies Sanitärhaus",
    "Waschmaschine & Trockner",
    "Direkt am Murradweg",
    "Hofeigene Jausenstation",
    "Tiere zum Streicheln",
  ],

  trust: {
    heading: "Bei der Familie Pichler Paul",
    headingEmphasis: "Familie Pichler Paul",
    intro:
      "„Da Bräuhauser“ wird von der Familie Pichler Paul persönlich geführt — mit Produkten aus eigener Landwirtschaft, einer herzlichen Jausenstation und jeder Menge Platz zum Spielen für Kinder und Tiere.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/gallery-9630f22b20.webp`, alt: "Eingangsschild „da Bräuhauser" am Murradweg mit ruhenden Gästen und Radfahrer" },
  },

  breather: {
    image: { src: `${IMG}/accommodation-8538275f3e.webp`, alt: "Unberührte Naturlandschaft auf den Bergen rund um Stadl an der Mur" },
    line: "Unberührte Natur, so weit das Auge reicht.",
  },

  camping: {
    heading: "Camping beim Bräuhauser",
    intro:
      "Unser kleiner, gepflegter Platz liegt in ruhiger Lage am Fuße des Kreischbergs — mit barrierefreiem Sanitärhaus, Waschmaschine, Trockner und einer Garage für kleine Reparaturen.",
    features: [
      {
        title: "Wiesenstellplätze mit Strom",
        text: "Ebene Plätze in ruhiger Lage, mit Wasser und Strom und zum Teil mit Kanalanschluss — für Wohnwagen, Wohnmobil und Zelt.",
        image: { src: `${IMG}/gallery-a9b5311542.webp`, alt: "Wohnwagen und Zelte auf der Stellplatzwiese vor bewaldetem Hang" },
      },
      {
        title: "Bergkulisse am Kreischberg",
        text: "Rundum unverfälschte Natur und Bergwald: Der Platz liegt am Fuße des Kreischbergs, mitten im oberen Murtal.",
        image: { src: `${IMG}/gallery-3bf36c1666.webp`, alt: "Stellplätze mit Wohnwagen vor der Bergkulisse des Kreischbergs" },
      },
      {
        title: "Liegewiese & lange Abende",
        text: "Eine große Liegewiese und Sitzplätze rund ums Haus laden zum Spielen, Sonnen und Ausklingen der Sommerabende ein.",
        image: { src: `${IMG}/gallery-53e7f08eeb.webp`, alt: "Drohnenaufnahme des Campingplatzes Bräuhauser mit Wohnwagen, Stellplatzwiese und Bauernhaus" },
      },
      {
        title: "Mitten im grünen Murtal",
        text: "Ein kleiner, übersichtlicher Platz, eingebettet zwischen Wiesen, Wald und den Höfen von Stadl-Predlitz.",
        image: { src: `${IMG}/gallery-aa6ed07f4f.webp`, alt: "Luftaufnahme des Campingplatzes Bräuhauser im Murtal" },
      },
      {
        title: "Sommer-, Winter- & Dauercamping",
        text: "Bei uns kannst du das ganze Jahr stehen — im Winter sind Kreischberg, Turracher Höhe und Flattnitz schnell erreichbar.",
        image: { src: `${IMG}/gallery-cd0f970e93.webp`, alt: "Paar entspannt unter dem Vorzelt seines Wohnwagens mit Bergblick" },
      },
      {
        title: "Jausenstation direkt am Platz",
        text: "Den ganzen Tag für Campinggäste da: 60 Sitzplätze, Sonnenterrasse und regionale Jause aus eigener Landwirtschaft.",
        image: { src: `${IMG}/gallery-986a26cb23.webp`, alt: "Brettljause mit Speck, Käse und Bauernbrot in der Jausenstation" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber ein festes Dach?",
    intro:
      "Du musst nicht zelten: Direkt am Murradweg vermieten wir gemütliche Zimmer und drei Apartments — teils mit Balkon, alle mit WLAN.",
    items: [
      {
        name: "Doppel- & Familienzimmer",
        kind: "Zimmer am Murradweg",
        text: "Helle Zimmer mit naturbelassenen Vollholzmöbeln, Dusche/WC, Sat-TV und Kühlschrank — teilweise mit Balkon.",
        image: { src: `${IMG}/gallery-facdd8abfe.webp`, alt: "Gemütliches Zimmer mit Vollholzmöbeln beim Bräuhauser" },
        priceFrom: 100,
        features: ["Dusche/WC", "Sat-TV & Kühlschrank", "teils Balkon", "Frühstücksbuffet"],
      },
      {
        name: "Familienzimmer",
        kind: "bis 4 Personen",
        text: "Platz für die ganze Familie — ein helles Zimmer mit Stockbett, Dusche/WC und viel naturbelassenem Holz.",
        image: { src: `${IMG}/gallery-d14abd43a1.webp`, alt: "Familienzimmer mit Stockbett im Bräuhauser" },
        priceFrom: 130,
        features: ["bis 4 Personen", "Dusche/WC", "Vollholzmöbel"],
      },
      {
        name: "Ferienapartments",
        kind: "Apartment für 2–6 Personen",
        text: "Drei neue, gemütliche Apartments mit Wohnküche — inklusive Bettwäsche, wahlweise mit Frühstück oder Halbpension.",
        image: { src: `${IMG}/accommodation-c888459d45.webp`, alt: "Apartment mit Wohnküche und Essbereich beim Bräuhauser" },
        priceFrom: 140,
        features: ["2 bis 6 Personen", "Wohnküche & WLAN", "Bettwäsche inklusive"],
      },
    ],
  },

  kinder: {
    heading: "Hier wird's nie fad",
    intro:
      "Sandkiste, Tischtennis und jede Menge Tiere zum Streicheln — bei uns dürfen Kinder den ganzen Tag draußen sein.",
    features: [
      {
        title: "Sandkiste & Spielplatz",
        text: "Direkt vor der Sonnenterrasse buddeln die Kleinen im Sand — Spielplatz und Spielraum gehören selbstverständlich dazu.",
        image: { src: `${IMG}/kids-fa0b497cc4.webp`, alt: "Kinder spielen mit Spielzeugbagger in der Sandkiste beim Bräuhauser" },
      },
      {
        title: "Tischtennis im Garten",
        text: "Eine Runde Tischtennis unter den Murauer Schirmen, während die Eltern auf der Terrasse sitzen — passt.",
        image: { src: `${IMG}/kids-3181d5042d.webp`, alt: "Zwei Jungen spielen Tischtennis auf der Terrasse der Jausenstation" },
      },
      {
        title: "Tiere zum Streicheln",
        text: "Hasen, Schafe, Schweine, Katzen und Kälber wollen besucht werden — Bauernhof zum Mitmachen für große und kleine Gäste.",
        image: { src: `${IMG}/gallery-47424dd36b.webp`, alt: "Zwei zutrauliche Hasen im Stroh am Bauernhof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus in die Steiermark",
    intro:
      "Vom Platz aus startest du direkt in die Wanderwege und auf den Murradweg — die Bergwelt rund um Murau liegt vor der Tür.",
    items: [
      {
        title: "Wandern in der Bergwelt",
        text: "Geführte Familienwanderungen, Spazier- und Nordic-Walking-Wege führen in die unberührte Bergwelt rund um den Kreischberg.",
        image: { src: `${IMG}/activity-02a026a35c.webp`, alt: "Gipfelkreuz auf einem Berg über dem Murtal" },
      },
      {
        title: "Radeln am Murradweg",
        text: "Der bekannte Murradweg führt direkt am Haus vorbei — von hier rollst du entlang der grünen Mur, vom Lungau bis Radkersburg.",
        image: { src: `${IMG}/kids-77fd1dc89b.webp`, alt: "Radfahrer auf dem Murradweg bei Stadl an der Mur" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt ins obere Murtal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauernautobahn A10 bis St. Michael, weiter auf der Murtal Schnellstraße S36 Richtung Murau und über die B97 nach Stadl an der Mur.",
      },
      {
        title: "Mit der Bahn",
        text: "Die Murtalbahn hält in Stadl an der Mur; vom Bahnhof holen wir dich nach Vereinbarung gerne ab.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Salzburg und Klagenfurt erreichst du in jeweils rund eineinhalb Autostunden.",
      },
    ],
  },

  galerie: {
    heading: "Vom Hof, vom Platz, vom Teller",
    headingEmphasis: "vom Teller",
    intro:
      "Frühstück mit hauseigenen Produkten, Tiere auf der Weide und der Stellplatz im Grünen — ein paar Eindrücke vom Bräuhauser.",
    tag: "Murtal · Steiermark",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-672af3be49.webp`, alt: "Frühstück mit Brötchenkorb und Kaffee beim Bräuhauser" },
      { src: `${IMG}/gallery-5a01e04c56.webp`, alt: "Schafe auf der Weide vor der Dorfkirche von Stadl an der Mur" },
      { src: `${IMG}/gallery-9243a48cc7.webp`, alt: "Stellplatzwiese mit Wohnwagen vor bewaldetem Hang im Murtal, Blick vom Hof" },
      { src: `${IMG}/gallery-b3e10f0922.webp`, alt: "Kühe auf der Alm rund um Stadl an der Mur" },
    ],
  },

  booking: {
    heading: "Dein Platz beim Bräuhauser",
    headingEmphasis: "beim Bräuhauser",
    intro:
      "Sag uns Zeitraum und Personen — Familie Pichler Paul meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Zimmer- & Apartmentpreise pro Nacht für 2 Personen (ab), exkl. Kurtaxe — Frühstück oder Halbpension möglich · Stellplatz auf Anfrage",
    highlight: {
      title: "Mehr als nur Stellplatz",
      text: "Bauernhof, Jausenstation und Zimmer — bei uns gehört alles zusammen.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz" },
      { id: "studio", label: "Studio", perNight: 85 },
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
    { label: "Camping", href: "#camping" },
    { label: "Zimmer & Apartment", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default pichlerpaul;
