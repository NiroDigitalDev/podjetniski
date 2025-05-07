export interface BlogPostSummary {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  coverImage: string;
  category: string;
}

export interface BlogPost extends BlogPostSummary {
  content: string;
  seoDescription?: string;
  seoKeywords?: string;
}

export const DEMO_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Primerjava 5G omrežij v Sloveniji",
    slug: "primerjava-5g-omrezij-v-sloveniji",
    author: "Marko Novak",
    date: "2024-05-15",
    excerpt:
      "Pregledna analiza ponudbe 5G omrežij različnih operaterjev v Sloveniji in njihove pokritosti.",
    coverImage: "/images/001.jpg",
    category: "Omrežja",
    content: `
# Primerjava 5G omrežij v Sloveniji

5G tehnologija prinaša revolucionarne spremembe v svet mobilnih komunikacij. V Sloveniji je implementacija 5G omrežij v polnem zagonu, vendar se operaterji med seboj razlikujejo po pokritosti, hitrosti in dodatnih storitvah.

## Telekom Slovenije

Telekom Slovenije pokriva največji del Slovenije s 5G omrežjem. Njihova infrastruktura omogoča:
- Povprečne hitrosti prenosa do 1Gbps
- Pokritost vseh večjih mest in prometnih poti
- Dodatne storitve za poslovne uporabnike

## A1

A1 je na drugem mestu po pokritosti, vendar ponuja:
- Konkurenčne cene paketov
- Dobro pokritost v urbanih območjih
- Kombinacijo s storitvami fiksnega interneta

## Telemach

Telemach se osredotoča na:
- Cenovno ugodne pakete
- Hitro širjenje omrežja
- Dobre ponudbe za mlade

## Zaključek

Izbira najboljšega 5G operaterja je odvisna od vaših potreb, lokacije in proračuna. Za natančnejšo primerjavo uporabite orodje TeleFinder, ki vam bo pomagalo najti optimalno rešitev.
    `,
    seoDescription:
      "Celovita primerjava 5G omrežij vseh slovenskih operaterjev z analizo pokritosti, hitrosti in cen",
    seoKeywords:
      "5G, mobilno omrežje, Telekom Slovenije, A1, Telemach, pokritost, hitrosti prenosa",
  },
  {
    id: "2",
    title: "Kako izbrati najboljši mobilni paket za vašo družino",
    slug: "izbira-mobilnega-paketa-za-druzino",
    author: "Ana Kovač",
    date: "2024-05-03",
    excerpt:
      "Vodič po izbiri družinskih paketov z nasveti za optimizacijo stroškov in maksimizacijo ugodnosti.",
    coverImage: "/images/002.jpg",
    category: "Paketi",
    content: `
# Kako izbrati najboljši mobilni paket za vašo družino

Izbira pravega mobilnega paketa za celotno družino lahko prihrani veliko denarja in zagotovi optimalno izkušnjo za vse družinske člane. V tem članku vam predstavljamo ključne dejavnike, ki jih je potrebno upoštevati.

## Potrebe družinskih članov

Najprej analizirajte potrebe vseh članov družine:
- Količina podatkov
- Potrebe po klicih in SMS-ih
- Morebitne dodatne storitve (streaming, zavarovanje naprav)

## Primerjava družinskih popustov

Vsi glavni operaterji ponujajo posebne družinske pakete:
- Telekom: 10% popust za vsakega dodatnega člana
- A1: Paketi z deljeno količino podatkov
- Telemach: Popusti za kombiniranje mobilnih in fiksnih storitev

## Dodatne ugodnosti

Bodite pozorni na dodatne ugodnosti:
- Brezplačne naročnine na streaming platforme
- Zavarovanje naprav
- Dodatni GB ob praznikih

## Zaključek

Za izbiro optimalnega paketa za vašo družino priporočamo uporabo primerjalne platforme TeleFinder, kjer lahko natančno primerjate vse ponudbe glede na vaše specifične družinske potrebe.
    `,
    seoDescription:
      "Celovit vodič za izbiro najboljšega družinskega mobilnega paketa z nasveti za prihranek",
    seoKeywords:
      "družinski paket, mobilni operaterji, primerjava paketov, prihranek, ugodnosti, Telekom, A1, Telemach",
  },
  {
    id: "3",
    title: "eSIM tehnologija: Prednosti in podpora operaterjev v Sloveniji",
    slug: "esim-tehnologija-slovenija",
    author: "Luka Zupančič",
    date: "2024-04-22",
    excerpt:
      "Vse o virtualni SIM kartici, njenem delovanju in ponudbi slovenskih operaterjev.",
    coverImage: "/images/testimonials.webp",
    category: "Tehnologija",
    content: `
# eSIM tehnologija: Prednosti in podpora operaterjev v Sloveniji

Virtualne SIM kartice (eSIM) predstavljajo prihodnost mobilne tehnologije. Namesto fizične kartice je eSIM vgrajen direktno v napravo, kar omogoča številne prednosti.

## Kaj je eSIM?

eSIM je:
- Virtualna SIM kartica
- Vgrajena v napravo
- Omogoča preklapljanje med operaterji brez menjave kartice

## Prednosti eSIM

Glavne prednosti so:
- Enostavnejše preklapljanje med operaterji
- Možnost uporabe več profilov
- Odlično za potnike in poslovne uporabnike
- Prihranek prostora v napravah

## Slovenski operaterji in eSIM

V Sloveniji trenutno eSIM ponujajo:
- Telekom Slovenije (polna podpora)
- A1 (omejena podpora)
- Telemach (v fazi uvajanja)

## Naprave s podporo za eSIM

Seznam naprav, ki podpirajo eSIM tehnologijo, se hitro širi:
- iPhone (od XS naprej)
- Samsung Galaxy (od S20 naprej)
- Google Pixel (od Pixel 3 naprej)
- Številne druge pametne naprave

## Zaključek

eSIM tehnologija prinaša številne prednosti za uporabnike, slovenski operaterji pa postopoma izboljšujejo svojo podporo. Za najnovejše informacije o ponudbi eSIM rešitev uporabite primerjalno platformo TeleFinder.
    `,
    seoDescription:
      "Vse o eSIM tehnologiji v Sloveniji, delovanju, prednostih in podpori operaterjev",
    seoKeywords:
      "eSIM, virtualna SIM kartica, slovenski operaterji, mobilna tehnologija, Telekom, A1, Telemach",
  },
  {
    id: "4",
    title: "Kako preveriti pokritost mobilnega signala na vaši lokaciji",
    slug: "preverjanje-pokritosti-mobilnega-signala",
    author: "Petra Vidmar",
    date: "2024-04-10",
    excerpt:
      "Praktični nasveti za preverjanje kakovosti signala različnih operaterjev na vaši lokaciji.",
    coverImage: "/images/hero.webp",
    category: "Omrežja",
    content: `
# Kako preveriti pokritost mobilnega signala na vaši lokaciji

Dobra pokritost z mobilnim signalom je ključna za kakovostno uporabo mobilnih storitev. V tem članku vam predstavljamo različne načine za preverjanje pokritosti na vaši lokaciji.

## Uradni zemljevidi pokritosti

Vsak operater ponuja svoj zemljevid pokritosti:
- Telekom Slovenije
- A1 
- Telemach

Ti zemljevidi so dobra začetna točka, vendar niso vedno popolnoma natančni.

## Neodvisni testi

Za bolj objektivno oceno uporabite:
- AKOS Test Net aplikacijo
- Ookla Speedtest
- TeleFinder primerjalno orodje

## Testiranje na terenu

Najbolj zanesljiv način je testiranje:
- Izposoja testne SIM kartice
- Preizkus pri prijateljih
- Začasni paketi brez vezave

## Lokalne specifike

Upoštevajte tudi:
- Konfiguracijo terena
- Gostoto pozidave
- Oddaljenost od baznih postaj

## Zaključek

Za optimalno izbiro operaterja glede na vašo lokacijo priporočamo kombinacijo različnih metod preverjanja. Platforma TeleFinder vam lahko pomaga z agregirano analizo podatkov o pokritosti vseh operaterjev na vaši lokaciji.
    `,
    seoDescription:
      "Nasveti in metode za učinkovito preverjanje pokritosti mobilnega signala na vaši lokaciji",
    seoKeywords:
      "mobilni signal, pokritost, zemljevidi pokritosti, Telekom, A1, Telemach, AKOS Test Net, primerjava signala",
  },
  {
    id: "5",
    title: "Prehod iz predplačniškega na naročniški paket: Kdaj in zakaj",
    slug: "prehod-predplacniski-narocniski-paket",
    author: "Matej Breznik",
    date: "2024-03-25",
    excerpt:
      "Analiza prednosti in slabosti obeh tipov paketov ter kdaj je smiselno razmišljati o prehodu.",
    coverImage: "/images/mission.webp",
    category: "Paketi",
    content: `
# Prehod iz predplačniškega na naročniški paket: Kdaj in zakaj

Predplačniški in naročniški paketi imajo vsak svoje prednosti in slabosti. V tem članku analiziramo, kdaj je smiselno razmišljati o prehodu med njima.

## Prednosti predplačniških paketov

Predplačniški paketi so idealni za:
- Nadzor nad stroški
- Občasne uporabnike
- Turiste
- Uporabnike brez kreditne zgodovine

## Prednosti naročniških paketov

Naročniški paketi ponujajo:
- Boljše cene za redne uporabnike
- Več vključenih storitev
- Možnost subvencioniranja naprav
- Družinske popuste

## Kdaj razmišljati o prehodu

Razmislite o prehodu, ko:
- Redno porabite več kot 10 GB podatkov mesečno
- Potrebujete novo napravo
- Vaši stroški na predplačniškem paketu presegajo ceno naročniškega
- Želite dodatne ugodnosti (streaming, zavarovanje)

## Postopek prehoda

Prehod je enostaven:
1. Obdržite obstoječo številko
2. Izberite ustrezen paket
3. Predložite osebni dokument
4. Podpišite pogodbo

## Zaključek

Odločitev o prehodu naj temelji na vaših specifičnih potrebah in vzorcih uporabe. Za podrobno primerjavo vseh predplačniških in naročniških paketov uporabite orodje TeleFinder.
    `,
    seoDescription:
      "Kdaj in zakaj je smiselno preiti iz predplačniškega na naročniški paket pri mobilnih operaterjih",
    seoKeywords:
      "predplačniški paket, naročniški paket, mobilni operaterji, primerjava paketov, stroški, ugodnosti",
  },
];

// Mock function to simulate API call for fetching all blog posts
export const fetchAllBlogPosts = (page: number = 0, pageSize: number = 10) => {
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPosts = DEMO_BLOG_POSTS.slice(startIndex, endIndex);
  const totalPages = Math.ceil(DEMO_BLOG_POSTS.length / pageSize);

  return Promise.resolve({
    blogs: paginatedPosts as BlogPostSummary[],
    totalPages,
    currentPage: page,
  });
};

// Mock function to simulate API call for fetching a single blog post
export const fetchBlogPost = (slug: string) => {
  const post = DEMO_BLOG_POSTS.find((post) => post.slug === slug);

  if (!post) {
    return Promise.reject(new Error(`Blog post with slug ${slug} not found`));
  }

  return Promise.resolve(post);
};
