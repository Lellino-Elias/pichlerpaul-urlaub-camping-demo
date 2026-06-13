import type { CampsiteConfig } from "../types";

const IMG = "/campsites/pichlerpaul-urlaub";

const pichlerpaulUrlaub: CampsiteConfig = {
  name: "da' Bräuhauser",
  shortName: "Bräuhauser",
  slug: "pichlerpaul-urlaub",
  ort: "Stadl an der Mur",
  region: "Steiermark",
  brandKind: "Bauernhof & Camping",
  regionLong: "Region Murau-Kreischberg · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping am Bauernhof — mitten in der Murauer Bergwelt",
  claimEmphasis: "am Bauernhof",
  emailDetail: "euer kleiner Campingplatz direkt am Murradweg",
  intro:
    "Bei Familie Pichler Paul campst du direkt am Murradweg, am Fuße des Kreischbergs: ein kleiner, familiärer Platz mit eigenem Bauernhof, hausgemachten Schmankerln und jeder Menge Tieren für die Kinder.",

  statement: {
    text: "Hier gehören Stellplatz, Stall und Jausenstation zusammen — und man kennt sich noch beim Vornamen.",
    emphasis: "kennt sich noch",
  },

  pillars: [
    {
      title: "Kleiner, feiner Platz",
      text: "Unser Campingplatz in Stadl-Predlitz liegt in ruhiger Lage am Fuße des Kreischbergs — Stellplätze mit Wasser und Strom, mitten in unberührter Natur.",
      image: { src: `${IMG}/gallery-53e7f08eeb.webp`, alt: "Luftaufnahme vom Campingplatz da' Bräuhauser" },
    },
    {
      title: "Urlaub am Bauernhof",
      text: "Kühe und Kälber, Schweinchen, Schafe, Katzen und Hasen freuen sich auf deinen Besuch — ein familiär geführter Hof zum Anfassen und Erleben.",
      image: { src: `${IMG}/kids-fc4dbfa65e.webp`, alt: "Familie streichelt ein Schaf am Bauernhof da' Bräuhauser" },
    },
    {
      title: "Hausgemacht & herzlich",
      text: "In der Jausenstation verwöhnen wir dich mit Most, Speck, Säften und Hauswürsten aus eigener Landwirtschaft — mit viel Liebe selbst gemacht.",
      image: { src: `${IMG}/gallery-986a26cb23.webp`, alt: "Brettljause mit hausgemachten Produkten in der Jausenstation" },
    },
  ],

  usps: [
    "Direkt am Murradweg",
    "Eigener Bauernhof",
    "Hausgemachte Jause",
    "Wasser & Strom am Platz",
    "Sommer- & Wintercamping",
    "Kinderspielplatz",
  ],

  trust: {
    heading: "Bei uns ist Urlaub noch Handarbeit",
    headingEmphasis: "Handarbeit",
    intro:
      "Wir führen Bauernhof, Camping und Jausenstation mit Qualität und Liebe — hier kommen die Produkte vom eigenen Hof, die Wege sind kurz und die Atmosphäre bleibt familiär.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/kids-b7943e47d1.webp`, alt: "Wohnwagen mit Vorzelt auf der Wiese beim Campingplatz da' Bräuhauser" },
  },

  breather: {
    image: { src: `${IMG}/gallery-9630f22b20.webp`, alt: "Wegweiser „da' Bräuhauser“ am Murradweg" },
    line: "Da' Bräuhauser — mit Qualität und Liebe geführt.",
  },

  camping: {
    heading: "Camping beim Bräuhauser",
    intro:
      "Vom Stellplatz zum Stall, zur Jausenstation und auf den Murradweg sind es nur ein paar Schritte — kleiner Platz, kurze Wege, alles da.",
    features: [
      {
        title: "Ebene Wiesenstellplätze",
        text: "Plätze in ruhiger Lage mit Wasser und Strom, zum Teil mit Kanal — gepflegt und eben für Wohnwagen, Wohnmobil und Zelt.",
        image: { src: `${IMG}/gallery-cd0f970e93.webp`, alt: "Wohnwagen mit Vorzelt auf einem Wiesenstellplatz" },
      },
      {
        title: "Sommer-, Winter- & Dauercamping",
        text: "Ob ein paar Sommertage oder Wintercamping vor den Skibergen Kreischberg, Turracher Höhe und Flattnitz — bei uns campst du das ganze Jahr.",
        image: { src: `${IMG}/gallery-f99ac1df54.webp`, alt: "Wohnmobile am Campingplatz mit Blick auf die Berge" },
      },
      {
        title: "Tiere rund um den Platz",
        text: "Der Bauernhof grenzt direkt an den Campingplatz — Schafe, Schweinchen und Kälber sind nur ein paar Schritte vom Vorzelt entfernt.",
        image: { src: `${IMG}/gallery-5a01e04c56.webp`, alt: "Schafe auf der Weide am Bauernhof da' Bräuhauser" },
      },
      {
        title: "Jausenstation & Sonnenterrasse",
        text: "60 Sitzplätze, eine große Sonnenterrasse, Tischtennis und ein Spielraum — den ganzen Tag für Haus- und Campinggäste geöffnet.",
        image: { src: `${IMG}/kids-3181d5042d.webp`, alt: "Tischtennis auf der Sonnenterrasse der Jausenstation" },
      },
      {
        title: "Frühstück vom eigenen Hof",
        text: "Morgens ein Frühstücksbüffet mit vorwiegend hauseigenen Produkten — Marmeladen, Säfte und Speck, mit viel Liebe selbst gemacht.",
        image: { src: `${IMG}/gallery-672af3be49.webp`, alt: "Frühstück und Kaffee in der gemütlichen Stube" },
      },
      {
        title: "Gemütliche Bauernstube",
        text: "Eine Bauernstube mit Kachelofen und ein gemütlicher Aufenthaltsraum laden zum Verweilen ein — drinnen wie draußen fühlst du dich gleich zuhause.",
        image: { src: `${IMG}/gallery-8f6a95f407.webp`, alt: "Gemütliche Bauernstube mit Holztischen" },
      },
    ],
  },

  kinder: {
    heading: "Kinderzeit am Bräuhauser",
    intro:
      "Tiere füttern, im Sand buddeln, Tischtennis spielen und am Nachmittag ein Eis — bei uns sind die Kleinen den ganzen Tag draußen.",
    features: [
      {
        title: "Tiere zum Streicheln",
        text: "Hasen, Katzen, Schafe und Schweinchen warten auf kleine Streichelhände — Bauernhofleben zum Anfassen, gleich nebenan.",
        image: { src: `${IMG}/gallery-47424dd36b.webp`, alt: "Zwei Hasen am Bauernhof da' Bräuhauser" },
      },
      {
        title: "Spielplatz & Sandkiste",
        text: "Kinderspielplatz, Sandkiste und ein eigener Spielraum sorgen dafür, dass garantiert keine Langeweile aufkommt.",
        image: { src: `${IMG}/gallery-ab2321c02c.webp`, alt: "Kinder spielen in der Sandkiste an der Jausenstation" },
      },
      {
        title: "Eis & Badespaß",
        text: "Der Badesee mit großer Freizeitanlage liegt nur zehn Gehminuten entfernt — und ein leckeres Eis gehört zum Sommer natürlich dazu.",
        image: { src: `${IMG}/gallery-f1f675d601.webp`, alt: "Zwei Kinder essen Eis am Bauernhof" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus in die Murauer Bergwelt",
    intro:
      "Wandern, Radeln am Murradweg und Baden am See — rund um den Platz liegt eine der schönsten Ecken der Steiermark direkt vor dem Vorzelt.",
    items: [
      {
        title: "Wandern & Gipfelglück",
        text: "Geführte Familienwanderungen und unzählige Touren in die umliegende Bergwelt starten direkt vom Platz — leicht bis anspruchsvoll.",
        image: { src: `${IMG}/activity-02a026a35c.webp`, alt: "Gipfelkreuz in der Murauer Bergwelt" },
      },
      {
        title: "Radeln am Murradweg",
        text: "Der bekannte Murradweg führt direkt am Haus vorbei — vom Lungau bis Radkersburg, ein idealer Ausgangspunkt für Touren entlang der Mur.",
        image: { src: `${IMG}/kids-77fd1dc89b.webp`, alt: "Familie beim Radfahren am Murradweg" },
      },
      {
        title: "Natur pur am Kreischberg",
        text: "Klare Luft, unberührte Landschaft und die Ruhe der Berge — am Fuße des Kreischbergs findest du Erholung abseits vom Trubel.",
        image: { src: `${IMG}/accommodation-8538275f3e.webp`, alt: "Berglandschaft am Fuße des Kreischbergs" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Stadl an der Mur",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 (Tauernautobahn) bis ins obere Murtal, dann auf der B96/B97 Richtung Murau und Tamsweg bis Stadl an der Mur, Steindorf 23a.",
      },
      {
        title: "Mit der Bahn",
        text: "Per Bahn nach Murau und weiter mit der historischen Murtalbahn — von dort sind es nur wenige Minuten mit Bus oder Abholung nach Stadl.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Salzburg und Klagenfurt liegen jeweils rund eineinhalb Autostunden entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Bräuhauser",
    headingEmphasis: "Bräuhauser",
    intro: "Hof, Tiere, Stube und Camping — ein paar Eindrücke aus dem Urlaub bei Familie Pichler Paul.",
    tag: "Stadl an der Mur",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-22f892b4a3.webp`, alt: "Familie Pichler Paul vor dem Bauernhaus" },
      { src: `${IMG}/gallery-10821ab6d8.webp`, alt: "Schweine auf der Weide am Bauernhof" },
      { src: `${IMG}/gallery-facdd8abfe.webp`, alt: "Gemütliches Zimmer mit Vollholzmöbeln" },
      { src: `${IMG}/accommodation-c888459d45.webp`, alt: "Ferienwohnung beim Bräuhauser" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz beim Bräuhauser",
    headingEmphasis: "beim Bräuhauser",
    intro:
      "Wähle Zeitraum und Personen — Familie Pichler Paul meldet sich persönlich mit deiner Verfügbarkeit für Stellplatz, Zimmer oder Apartment.",
    pricesArePlaceholder: false,
    priceNote:
      "Zimmer- und Apartmentpreise als ab-Werte pro Nacht für 2 Personen, exkl. Kurtaxe (laut Website); Stellplatz-Preise auf Anfrage.",
    highlight: {
      title: "Alles an einem Platz",
      text: "Camping, Zimmer, Apartment, Bauernhof und Jausenstation — alles beim Bräuhauser vereint.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz" },
      { id: "doppelzimmer", label: "Doppelzimmer", perNight: 100 },
      { id: "studio", label: "Studio", perNight: 85 },
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
        { label: "Jausenstation", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default pichlerpaulUrlaub;
