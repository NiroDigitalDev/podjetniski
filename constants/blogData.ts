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
    id: "7",
    title: "Gost Žiga Vavpotič",
    slug: "gost-ziga-vavpotic",
    author: "Timotej Lemut",
    date: "2024-02-20",
    excerpt:
      "Žiga Vavpotič, vsestranski podjetnik in družbeno usmerjeni vizionar, je delil svoje izkušnje s soustanoviteljske pozicije v Simbiozi, Outfit7 in Bora Partners.",
    coverImage: "/images/og-image.png",
    category: "Dogodki",
    content: `
# PRVI DOGODEK – 20. 2. 2024, 18.00-20.00

Gost: Žiga Vavpotič

Žiga Vavpotič je vsestranski podjetnik in družbeno usmerjeni vizionar: soustanovitelj medgeneracijske pobude Simbioza, nekdanji predsednik upravnega odbora pri Outfit7 (Talking Tom & Friends) ter partner pri M&A družbi Bora Partners, kjer pomaga podjetjem pri strateških nakupih in prodajah. Njegova kariera združuje klasično poslovno vodenje, vpliv na globalnem tehnološkem trgu ter močan socialni angažma. V pogovoru je razkril, da rast podjetja ni uspeh sama po sebi, temveč orodje za ustvarjanje pozitivnih družbenih učinkov in trajnostnih delovnih mest. Hkrati so spoznali, kako pomembno je združevati podjetniško ambicijo s pristnim posluhom za potrebe skupnosti.
    `,
    seoDescription:
      "Žiga Vavpotič, soustanovitelj Simbioze in nekdanji predsednik upravnega odbora pri Outfit7, je na prvem dogodku Podjetniškega kluba FMF delil svoje izkušnje o družbeno odgovornem podjetništvu.",
    seoKeywords:
      "Žiga Vavpotič, Simbioza, Outfit7, Bora Partners, družbeno odgovorno podjetništvo, podjetniška rast, trajnostna delovna mesta",
  },
  {
    id: "8",
    title: "Gost Igor Verstovšek",
    slug: "gost-igor-verstovsek",
    author: "Timotej Lemut",
    date: "2024-03-12",
    excerpt:
      "Igor Verstovšek, prejemnik naziva Mladi Manager 2018 in soustanovitelj Cosylab, je predstavil svoje izkušnje s krmilnih sistemov za pospeševalnike in protonsko terapijo.",
    coverImage: "/images/verstovsek.jpeg",
    category: "Dogodki",
    content: `
# DRUGI DOGODEK – 12. 3. 2024, 18.00-20.00

Gost: Igor Verstovšek

Igor Verstovšek, prejemnik naziva Mladi Manager 2018, je soustanovitelj visokotehnološkega podjetja Cosylab, globalnega vodje krmilne sistemov za pospeševalnike, teleskope, fuzijske reaktorje in centre za protonsko terapijo ter uspešno tekmuje na najzahtevnejših svetovnih trgih. Študenti so iz prve roke začutili, da lahko tudi "deep tech" z domačih fakultet doseže globalni vpliv, če ga spremljata premišljen menedžment in mednarodno usmerjena kultura. Razumeli so, da se znanstvena odličnost pretvori v podjetniški uspeh šele, ko jo vodi jasna vizija in motivirana ekipa.
    `,
    seoDescription:
      "Igor Verstovšek, soustanovitelj Cosylab in prejemnik naziva Mladi Manager 2018, je na drugem dogodku Podjetniškega kluba FMF predstavil pot od znanstvene odličnosti do globalnega tehnološkega uspeha.",
    seoKeywords:
      "Igor Verstovšek, Cosylab, krmilni sistemi, pospeševalniki, protonska terapija, deep tech, visoka tehnologija, globalni trg",
  },
  {
    id: "9",
    title: "Gost Gorazd Lampič",
    slug: "gost-gorazd-lampic",
    author: "Timotej Lemut",
    date: "2024-03-26",
    excerpt:
      "Gorazd Lampič, soustanovitelj in dolgoletni direktor podjetja Elaphe Propulsion Technologies, je delil svojo pot od garažnega start-upa do globalnega inovatorja električne mobilnosti.",
    coverImage: "/images/lampic.jpg",
    category: "Dogodki",
    content: `
# TRETJI DOGODEK – 26. 3. 2024, 18.00-20.00

Gost: Gorazd Lampič

Gorazd Lampič je soustanovitelj in dolgoletni direktor podjetja Elaphe Propulsion Technologies, pionirja pogonskih sistemov z elektromotorji v kolesu. S kombinacijo fizikalnega znanja in podjetniške vztrajnosti je Elaphe iz garažnega start‑upa prerasel v globalnega inovatorja električne mobilnosti. Njegova zgodba je navdihnila študente k razmišljanju o tem, kako ključno je strateško partnerstvo in dolgotrajno vlaganje v razvoj strojne opreme, kadar želimo hardverski preboj na svetovnem trgu. Naučili so se, da pogum za dolgoročne, kompleksne projekte odpira vrata premikanju tehnoloških mej.
    `,
    seoDescription:
      "Gorazd Lampič iz Elaphe Propulsion Technologies je na tretjem dogodku Podjetniškega kluba FMF predstavil svojo podjetniško pot v razvoju inovativnih elektromotorjev za elektromobilnost.",
    seoKeywords:
      "Gorazd Lampič, Elaphe Propulsion Technologies, elektromotorji, elektromobilnost, električna vozila, pogonski sistemi, hardverski razvoj, tehnološke inovacije",
  },
  {
    id: "10",
    title: "Gost Boris Horvat",
    slug: "gost-boris-horvat",
    author: "Timotej Lemut",
    date: "2024-04-03",
    excerpt:
      "Dr. Boris Horvat, matematik in serijski podjetnik, je delil svoje izkušnje vodenja podjetij Abelium in ACEX, kjer združuje matematično modeliranje, blockchain in fintech rešitve.",
    coverImage: "/images/horvat.jpg",
    category: "Dogodki",
    content: `
# ČETRTI DOGODEK – 3. 4. 2024, 18.00-20.00

Gost: Boris Horvat

Dr. Boris Horvat, matematik in serijski podjetnik, vodi podjetji Abelium in ACEX, kjer s kombinacijo matematičnega modeliranja, blockchaina in fintech rešitev pospešuje digitalno preobrazbo na področjih od logistike do kripto financ. Z uporabo akademskega znanja v poslovnem okolju spodbuja digitalno preobrazbo na področjih od logistike do kripto‑financ. V razgibanem pogovoru je orisal prve, pogosto intuitivno storjene korake svoje ekipe - od iskanja pravega izdelka do prvih prodaj - in odkrito poudaril napake, ki so jih na tej poti naredili. Posebej je izpostavil pomen "product-market fit"-a ter s slikovitimi anekdotami pokazal, kako jim je učenje iz začetnih spodrsljajev pomagalo postaviti temelje za današnjo mednarodno uspešnost.
    `,
    seoDescription:
      "Dr. Boris Horvat, vodja podjetij Abelium in ACEX, je na četrtem dogodku Podjetniškega kluba FMF predstavil svojo podjetniško pot matematika pri razvoju fintech in blockchain rešitev.",
    seoKeywords:
      "Boris Horvat, Abelium, ACEX, blockchain, fintech, digitalna preobrazba, product-market fit, matematično modeliranje, kriptovalute",
  },
  {
    id: "11",
    title: "Gost Matej Tušak",
    slug: "gost-matej-tusak",
    author: "Timotej Lemut",
    date: "2024-04-17",
    excerpt:
      "Prof. dr. Matej Tušak, vodilni slovenski športni psiholog in profesor na Fakulteti za šport, je delil svoje izkušnje iz sodelovanja z vrhunskimi športniki.",
    coverImage: "/images/og-image.png",
    category: "Dogodki",
    content: `
# PETI DOGODEK – 17. 4. 2024, 18.00-19.00

Gost: Matej Tušak

Prof. dr. Matej Tušak je vodilni slovenski športni psiholog in profesor na Fakulteti za šport. V karieri je sodeloval z vrsto vrhunskih športnikov kot so: Tina Maze, Primož Peterka, Mitja Petkovšek, Peter Mankoč, Vasilij Žbogar, Urška Žolnir, Rajmond Debevec, Goran Dragič in Benjamin Šeško.
    `,
    seoDescription:
      "Prof. dr. Matej Tušak, vodilni slovenski športni psiholog, je na petem dogodku Podjetniškega kluba FMF delil svoje izkušnje iz dela z vrhunskimi slovenskimi športniki.",
    seoKeywords:
      "Matej Tušak, športna psihologija, vrhunski športniki, Tina Maze, Primož Peterka, Goran Dragić, Benjamin Šeško, mentalna priprava, športne psihološke tehnike",
  },
  {
    id: "12",
    title: "Gosta Kristjan Anderle & Robert Jeraj",
    slug: "gosta-kristjan-anderle-robert-jeraj",
    author: "Timotej Lemut",
    date: "2024-05-08",
    excerpt:
      "Dr. Kristjan Anderle, specialist za razvoj programske opreme v napredni radioterapiji, in Prof. dr. Robert Jeraj, vodja raziskovalnih skupin za medicinsko fiziko, sta predstavila napredek v medicinskih tehnologijah.",
    coverImage: "/images/jeraj.jpg",
    category: "Dogodki",
    content: `
# ŠESTI DOGODEK – 8. 5. 2024, 18.00-20.00

Gosta: Kristjan Anderle & Robert Jeraj

Dr. Kristjan Anderle, specialist za razvoj programske opreme v napredni radioterapiji, je glavni znanstveni direktor (CSO) pri Cosylab, kjer vodi razvoj klinično preverjenih programskih platform za obsevanje s težkimi‑ioni in skrbi, da postane kompleksna fizika močno in učinkovito orodje v rokah onkologov v boju proti raku.

Prof. dr. Robert Jeraj je vodja raziskovalnih skupin za medicinsko fiziko tako na Univerzi v Ljubljani kot na Univerzi Wisconsin-Madison, raziskovalec na Onkološkemu inštitutu Ljubljana ter soustanovitelj podjetja AIQ Solutions, kjer razvijajo umetno-inteligenčne sisteme za individualno prilagojeno načrtovanje terapij zdravljenja raka.

Dvojni pogovor je pokazal, kako sinergija med akademsko raziskavo in industrijsko implementacijo pospešuje medicinske preboje. Študenti so spoznali, da je prihodnost zdravstva odvisna od sodelovanja fizikov, programerjev, kliničnih zdravnikov in podjetnikov, ki znajo visoko znanost prevesti v varne in dostopne terapije.
    `,
    seoDescription:
      "Dr. Kristjan Anderle in Prof. dr. Robert Jeraj sta na šestem dogodku Podjetniškega kluba FMF predstavila svoji poti v razvoju medicinskih tehnologij in zdravljenju raka z naprednimi fizikalnimi in AI pristopi.",
    seoKeywords:
      "Kristjan Anderle, Robert Jeraj, Cosylab, AIQ Solutions, medicinska fizika, radioterapija, umetna inteligenca, zdravljenje raka, inovacije v zdravstvu",
  },
  {
    id: "13",
    title: "Gost Nejc Škoberne",
    slug: "gost-nejc-skoberne",
    author: "Timotej Lemut",
    date: "2024-05-22",
    excerpt:
      "Dr. Nejc Škoberne, soustanovitelj bioinformatičnega start-upa Genialis, platforme Meetings.bio in Sellestial, je predstavil svojo pot in izkušnje z uporabo podatkovne znanosti v farmaciji.",
    coverImage: "/images/og-image.png",
    category: "Dogodki",
    content: `
# SEDMI DOGODEK – 22. 5. 2024, 18.00-20.00

Gost: Nejc Škoberne

Dr. Nejc Škoberne je soustanovitelj bioinformatičnega start‑upa Genialis in platforme Meetings.bio, trenutno pa gradi novo SaaS rešitev Sellestial. Kot doktor računalništva je svojo kariero posvetil uporabi podatkovne znanosti v farmaciji in avtomatizaciji prodajnih procesov. Študenti so spoznali, da vrhunska tehnologija šteje le, če znaš zanjo zgraditi trg - od jasnega sporočila vrednosti do disciplinirane prodajne strategije in neprestanega outreach-a do pravih kupcev.
    `,
    seoDescription:
      "Dr. Nejc Škoberne, soustanovitelj Genialis, Meetings.bio in Sellestial, je na sedmem dogodku Podjetniškega kluba FMF delil svojo pot v bioinformatiki in avtomatizaciji prodajnih procesov.",
    seoKeywords:
      "Nejc Škoberne, Genialis, Meetings.bio, Sellestial, bioinformatika, SaaS, prodajni procesi, farmacija, podatkovna znanost, računalništvo",
  },
  {
    id: "1",
    title: "Prvi dogodek Podjetniškega kluba FMF 2025",
    slug: "prvi-dogodek-podjetniskega-kluba-fmf",
    author: "Timotej Lemut",
    date: "2025-03-12",
    excerpt:
      "Na prvem, uvodnem dogodku podjetniškega kluba se nas je zbralo 9 udeležencev. Dogodek je bil namenjen medsebojnemu spoznavanju članov kluba.",
    coverImage: "/images/og-image.png",
    category: "Dogodki",
    content: `
# PRVI DOGODEK: 12. 3. 2025, 18.00–20.00

Na prvem, uvodnem dogodku podjetniškega kluba se nas je zbralo 9 udeležencev. Dogodek je bil namenjen medsebojnemu spoznavanju članov kluba – vsak je na kratko predstavil sebe, svoje interese in želje glede kariere, tako na področju podjetništva kot tudi v širšem kontekstu zaposlitve.

V sproščenem pogovoru smo delili tudi ideje o projektih, ki jih nekateri že izvajajo, in razpravljali o možnostih za prihodnje sodelovanje. Dotaknili smo se tudi idej za prihodnje goste ter izrazili želje in pričakovanja glede razvoja podjetniškega kluba.
    `,
    seoDescription:
      "Poročilo s prvega, uvodnega dogodka Podjetniškega kluba FMF, kjer se je zbralo 9 udeležencev za medsebojno spoznavanje in izmenjavo idej.",
    seoKeywords:
      "Podjetniški klub FMF, uvodni dogodek, mreženje, karierne priložnosti, fakulteta za matematiko in fiziko",
  },
  {
    id: "2",
    title: "Gostja Anka Brus iz Agitavit Solutions",
    slug: "gostja-anka-brus-agitavit-solutions",
    author: "Nino Djordjević",
    date: "2025-03-26",
    excerpt:
      "Na drugem dogodku se nam je pridružila Anka Brus iz podjetja Agitavit Solutions. Predstavila nam je svojo podjetniško pot in delila dragocene izkušnje.",
    coverImage: "/images/002.jpg",
    category: "Dogodki",
    content: `
# DRUGI DOGODEK: 26. 3. 2025, 18.00–20.00
Gostja: Anka Brus, Agitavit Solutions d.o.o.

Na drugem dogodku se nam je pridružila Anka Brus iz podjetja Agitavit Solutions. Dogodka se je udeležilo 18 članov kluba, skupaj z gostjo.

Anka nam je najprej predstavila svojo podjetniško pot – začela jo je skupaj z možem, in sicer z razvojem digitalnega imenika, ki je nastal prav v času njenega študija na FMF. Danes vodi sama eno izmed vodilnih slovenskih podjetij za razvoj programske opreme, ki zaposluje več kot 100 ljudi.

V nadaljevanju smo imeli odprto Q&A sejo, kjer smo se pogovarjali o številnih temah – od začetkov podjetja, do njihove rasti, ki je večinoma temeljila na priporočilih zadovoljnih strank, torej na organski način. Anka je večkrat poudarila, da v podjetju daje velik poudarek kulturi, zadovoljstvu zaposlenih ter kakovostnemu delu, ki ga opravijo za svoje partnerje.

Izpostavila je, da ji je pomembno, da jih druga podjetja dojemajo kot zanesljivega in dolgoročnega partnerja, in da rast podjetja ni cilj za vsako ceno. Poudarila je pomen delovanja v skladu z zakonodajo, skrb za zaposlene ter ustvarjanje zdravega delovnega okolja.

Dotaknili smo se tudi notranje organizacije podjetja – strukture ekip, vloge managerjev in njenega trenutnega položaja v podjetju. Pojasnila je, da danes ni več neposredno vključena v vsakodnevno operativno delo, saj imajo dobro vzpostavljen sistem. Njena vloga je predvsem strateška: reševanje večjih izzivov, usmerjanje podjetja ter ohranjanje vizije. Pogovrili smo se tudi o njenem načinu zaposlovnja, kako izbirajo kandidate, razložila nam je da imajo 6 mesečno testno fazo, prav tako pa izpostavila da je imela nekaj primerov ko si imeli težave z odpuščanjem delavcev. 

Anka sama ni velika zagovornica dela na daljavo, čeprav je ta možnost v njihovem podjetju na voljo. Meni, da je delo na tak način v splošnem manj produktivno. Ob tem pa je poudarila, da to ne velja za vse – priznava, da obstajajo posamezniki, ki so pri delu od doma celo bolj učinkoviti. Kljub temu verjame, da je za večino zaposlenih boljša rešitev delo v fizičnem delovnem okolju, saj tako dosegajo boljše rezultate in večjo povezanost z ekipo.

Dogodek je bil zelo navdihujoč in zanimiv. Anki se iskreno zahvaljujemo za njen obisk in dragocene vpoglede v svet podjetništva in upamo, da se je tudi ona pri nas prijetno počutila.
    `,
    seoDescription:
      "Anka Brus iz Agitavit Solutions je na drugem dogodku Podjetniškega kluba FMF delila svojo podjetniško pot in dragocene izkušnje vodenja uspešnega tehnološkega podjetja.",
    seoKeywords:
      "Anka Brus, Agitavit Solutions, podjetniška pot, vodenje podjetja, študij na FMF, razvoj programske opreme, kultura podjetja",
  },
  {
    id: "3",
    title: "Tretji dogodek Podjetniškega kluba FMF 2025",
    slug: "tretji-dogodek-podjetniskega-kluba-fmf",
    author: "Nino Djordjević",
    date: "2025-03-31",
    excerpt:
      "Tretjega dogodka se je udeležilo 9 članov. Načrtovana gostja, Andrija Šulić, se dogodka žal ni mogla udeležiti zaradi nepredvidenih okoliščin.",
    coverImage: "/images/og-image.png",
    category: "Dogodki",
    content: `
# Tretji dogodek – 31. 3. 2025, 18.00–20.00
Gost: Andrija Šulić, Trampolin Studio

Tretjega dogodka Podjetniškega kluba se je udeležilo 9 članov. Načrtovan gost, Andrija Šulić, se dogodka žal ni mogel udeležiti, saj je zaradi prometne nesreče na avtocesti – eksplozije tovornjaka – ostala blokirana na poti.

Kljub temu smo srečanje izpeljali v manjšem, sproščenem vzdušju. Pogovor je tekel o tem, s čim se posamezni člani trenutno ukvarjajo, o podjetniških idejah in predlogih za prihodnje goste. Srečanje je trajalo približno 1 uro in 15 minut.

Z Andrijo smo se dogovorili za nadomestni termin – srečali se bomo 12. 5. 2025.
    `,
    seoDescription:
      "Poročilo s tretjega dogodka Podjetniškega kluba FMF, kjer se je kljub odsotnosti načrtovane gostje odvila produktivna razprava med člani.",
    seoKeywords:
      "Podjetniški klub FMF, Andrija Šulić, Trampolin Studio, podjetniške ideje, študentska iniciativa",
  },
  {
    id: "4",
    title: "Gost Tone Britovšek iz IRM d.o.o.",
    slug: "gost-tone-britovsek-irm",
    author: "Nino Djordjević",
    date: "2025-04-17",
    excerpt:
      "Na četrtem srečanju nas je obiskal Tone Britovšek, ustanovitelj podjetja IRM d.o.o., znanega po razvoju programske rešitve Marina Master za upravljanje marin.",
    coverImage: "/images/og-image.png",
    category: "Dogodki",
    content: `
# Četrti dogodek – 17. 4. 2025, 18.00–20.00
Gost: Tone Britovšek, IRM d.o.o.

Na četrtem srečanju Podjetniškega kluba FMF nas je obiskal podjetnik Tone Britovšek, ustanovitelj podjetja IRM d.o.o., znanega po razvoju programske rešitve Marina Master za upravljanje marin.

Zaradi tehničnih težav z e-poštnim vabilom se je dogodka udeležilo le 4 članov, a je bil pogovor kljub temu izjemno zanimiv in poučen. Manjša skupina je omogočila bolj poglobljeno razpravo in več prostora za vprašanja.

Tone Britovšek nam je predstavil svojo podjetniško pot – od študija tehnične matematike na FMF do ustanovitve podjetja. Delil je izzive, s katerimi se je srečeval, vključno z gospodarsko krizo med letoma 2008 in 2012, ki je močno prizadela bančni sektor. Podjetje je takrat razvijalo programske rešitve za vse večje slovenske banke, a so se zaradi razmer morali preusmeriti v novo nišo – marine. Danes njihovo programsko opremo uporablja že okoli 1000 marin po svetu, njihov cilj pa je postati vodilni ponudnik tovrstnih rešitev globalno.

Poudaril je, da se podjetje zavzema za kakovost izdelkov in kljub temu, da niso najcenejši ponudnik na trgu, dosegajo najhitrejšo rast v segmentu. Dotaknili smo se tudi njihovega pristopa k onboardingu novih strank in njihovih modelov plačevanja.

Danes Tone Britovšek v podjetju deluje predvsem kot svetovalec, saj je vodenje predal svojima hčerkama. Povedal je, da podjetje redno prejema ponudbe za prevzem, vendar odločitev o prodaji popolnoma prepušča njima.

Dogodek je bil zaradi manjše udeležbe še posebej produktiven – omogočil je bolj sproščen pogovor, več časa za podrobna vprašanja in odgovore ter osebnejšo izmenjavo izkušenj.
    `,
    seoDescription:
      "Tone Britovšek, ustanovitelj IRM d.o.o., je na četrtem srečanju Podjetniškega kluba FMF delil svojo pot od študija matematike do razvoja globalno uspešne programske rešitve Marina Master.",
    seoKeywords:
      "Tone Britovšek, IRM d.o.o., Marina Master, podjetniška pot, programske rešitve, marin management, študij tehnične matematike, FMF",
  },
  {
    id: "5",
    title: "Gost Ivo Boscarol 5. dogodek Podjetniškega kluba FMF 2025",
    slug: "gost-ivo-boscarol",
    author: "Nino Djordjević",
    date: "2025-05-08",
    excerpt:
      "Na petem dogodku Podjetniškega kluba FMF se nas je zbralo kar 34 članov, kar je ena izmed največjih udeležb do sedaj. Gostili smo Iva Boscarola, enega najvidnejših slovenskih podjetnikov.",
    coverImage: "/images/boscarol.jpg",
    category: "Dogodki",
    content: `
# Peti Dogodek – 8. 5. 2025, 17.00–19.00
Gost: Ivo Boscarol

## Legenda slovenskega podjetništva na FMF-ju: Ivo Boscarol

Na petem dogodku Podjetniškega kluba FMF v letošnjem študijskem letu se nas je zbralo kar 34 članov, kar je ena izmed največjih udeležb do sedaj. Dogodek je bil poseben ne le zaradi številčnosti, temveč predvsem zaradi izjemnega gosta – med nami smo gostili Iva Boscarola, enega najvidnejših in najvplivnejših slovenskih podjetnikov.

## Uvod z osebno noto

Tokrat smo dogodek začeli nekoliko drugače. Podjetniško pot gospoda Boscarola smo predstavili z
videom iz njegove spletne strani: https://boscarol.si/ustanovitelja/, kar nam je omogočilo bolj poglobljen vpogled v njegovo zgodbo in hkrati prihranilo dragocen čas za vprašanja in pogovor.

## Od umetnika do vizionarja

Q&A se je začel nenavadno – z vprašanjem o skupini Pink Floyd. A Boscarola to ni zmedlo. Z nasmehom je nadaljeval s svojo zgodbo, ki se ni začela v poslovnem svetu, temveč v umetnosti. Bil je navdušen glasbenik in fotograf, sam se je opisal kot "svobodni umetnik". Letalstvo je prišlo iz ljubezni do letenja, sprva kot hobi, ki je hitro prerasel v vizijo in nato v mednarodno uspešno podjetje.

## Pomembnost ekipe

Eden izmed glavnih poudarkov večera je bil pomen dobre ekipe in medosebnih odnosov v podjetju. Boscarol je izpostavil, da ekipa ni le podpora, ampak srce podjetja. Ob prodaji Pipistrela leta 2022 je zahteval, da vsi zaposleni obdržijo svoje službe – redka, a zelo spoštovanja vredna gesta v današnjem poslovnem svetu.

## Vizionarstvo v krizah

Med pogovorom je opisal tudi, kako se je Pipistrel uspešno soočil z gospodarskimi krizami. Posebej je izpostavil obdobje pandemije, ko so zaradi strateške fleksibilnosti proizvodnjo hitro preselili iz Italije v Slovenijo in obratno, kar jim je omogočilo nemoteno poslovanje – v nasprotju s številnimi drugimi letalskimi podjetji, ki so v tistem času propadla.

## O slovenski miselnosti in pravičnih plačah

Boscarol je z zanimanjem spregovoril tudi o specifikah slovenskega delovnega okolja. Da bi zmanjšal zavist med zaposlenimi in spodbudil pripadnost, je uvedel politiko, po kateri plače v podjetju niso smele presegati razmerja 2,5 : 1. Tako je zagotovil večjo enotnost, motivacijo in manj notranjih trenj.

## Startupi in realnost trga

Ena izmed ključnih tem večera je bila tudi podjetništvo v zgodnjih fazah. Boscarol je opozoril na pogosto napako startupov – preveliko čustveno navezanost na lasten produkt. Po njegovih besedah tak odnos pogosto prepreči, da bi ustanovitelji videli realno sliko. Ker so z izdelkom čustveno preveč povezani, izgubijo kritičen pogled in ne zaznajo dejanskih odzivov trga.

Izpostavil je, da je produkt sam po sebi le okoli 5 % uspeha, preostalih 95 % pa predstavljajo marketing, prodaja, pozicioniranje na trgu in izgradnja blagovne znamke. Uspeh pride takrat, ko znaš prepričati trg, da tvoj izdelek potrebuje – tudi če tega prej sploh ni vedel.

## Blagovna znamka, AI in prihodnost

Čeprav konkretnih korakov za gradnjo blagovne znamke ni podal, je izpostavil nekaj ključnih napotkov glede pomena dobrega imena in logotipa in izpostavil napake, ki bi jih lahko naredili. Navdušila pa nas je njegova odzivnost na nove tehnologije, predvsem umetno inteligenco, ki jo že sam uporablja – od grajenja znamk do računovodstva. Kljub temu je izrazil zaskrbljenost nad hitrostjo njenega razvoja, saj meni, da lahko vodi v svet, kjer človek izgubi nadzor.

## Ljudje kot temelj

Pri vprašanju o kadru je izpostavil, da je dobra ekipa sestavljena iz dveh ključnih elementov: pridobivanje talentov in njihovo zadrževanje. Sam ni imel težav s pridobivanjem – delati za Pipistrel je bil privilegij. Kar pa je resnično impresivno: v celotni zgodovini podjetja lahko na prste dveh ali treh rok prešteje tiste, ki so odšli.

## Najpomembnejša lekcija?

Na koncu je izpostavil še eno stvar, za katero meni, da je ključna za uspeh: founder mora verjeti v svojo idejo. Če začne dvomiti, to podjetje redko preživi.

Dogodek smo zaključili z njegovo mislijo, ki jo je delil z nami: »Življenje je lepo.«

Ob tej priložnosti smo posneli še nekaj fotografij in se zahvalili gospodu Boscarolu za njegov dragocen čas, modrost in navdihujočo prisotnost.

V imenu Podjetniškega kluba FMF –  
Hvala, gospod Ivo Boscarol.
    `,
    seoDescription:
      "Ivo Boscarol, ustanovitelj Pipistrela, je na petem dogodku Podjetniškega kluba FMF delil svojo podjetniško pot, izkušnje in dragocene nasvete za mlade podjetnike.",
    seoKeywords:
      "Ivo Boscarol, Pipistrel, podjetniška pot, letalska industrija, startup nasveti, ekipa in vodenje, blagovna znamka, AI, umetna inteligenca",
  },
  {
    id: "6",
    title: "Podjetniški klub 2023/24",
    slug: "podjetniski-klub-2023-24",
    author: "Timotej Lemut",
    date: "2024-06-15",
    excerpt:
      "Pregled aktivnosti in dosežkov Podjetniškega kluba FMF v študijskem letu 2023/24 ter razmišljanje o poslanstvu in prihodnosti kluba.",
    coverImage: "/images/og-image.png",
    category: "Pregled",
    content: `
# Podjetniški klub 2023/24

## Motivacija in začetki

Osebni razlog oziroma motivacija, da sem se odločil za organizacijo srečanj je spoznanje,
da ima visoko izobražen in nadpovprečno sposoben kader, ki ga proizvajamo na naši
fakulteti, velik manjko na področju sposobnosti uporabnih za uspešno delovanje v
podjetništvu. Rezultat, ki je povsem pričakovan glede na to da nismo fakulteta ni temu
namenjena. Glede na to, da imajo nekateri študenti želje po podjetniškem udejstvovanju,
hkrati pa take aktivnosti ne škodijo niti tistim ki bodo v industriji iskali službe, sem se
vseeno odločil, da bi take aktivnosti določeni skupini študentov lahko prišle še kako prav.

## Poslanstvo in cilji kluba

Osrednji cilj Podjetniškega kluba FMF je oblikovati skupnost študentov s podjetniškimi
ambicijami, kjer bi si člani medsebojno nudili podporo in spodbudo ter pridobili prepotrebno
zaupanje, da je podjetniška pot zares dosegljiva. Med študenti, ki poleg zanimanja za
podjetništvo premorejo tudi ustrezne predispozicije, je uspeh pogosto otežen zaradi
njihove izoliranosti od širšega podjetniškega in startup okolja. Prav premostitev te vrzeli
predstavlja ključno poslanstvo kluba. Njegov cilj je postati odskočna deska za vstop v
podjetniški svet – prostor, kjer se ideje, izkušnje in poznanstva delijo ne le med študenti,
temveč tudi s pomočjo gostujočih podjetnikov in drugih izkušenih strokovnjakov. Na ta
način klub omogoča svojim članom, da se povežejo s širšo skupnostjo in si s tem povečajo
možnosti za uspeh na svojih podjetniških poteh.

Naš klub si prizadeva:
- Pomagati študentom FMF UL, ki jih zanima podjetništvo, pri njihovih prvih korakih.
- Ustvariti osrednje stičišče in graditi skupnost podjetnikov, ki združuje študente in
diplomante FMF UL.
- Članom omogočiti izmenjavo idej in dobrih praks.
- Spodbujati podjetniški duh in proaktiven način razmišljanja.
- Ponuja izobraževalne vire, mentorstvo ter priložnosti za mreženje.

## Aktivnosti v študijskem letu 2023/24

V študijskem letu 2023/24 smo imeli vsega skupaj 10 srečanj, celoten seznam spodaj:

### Prva srečanja
- **torek, 19.12.2023 ob 18h**  
  Spoznavno srečanje: samo študenti - za preizkus interesa.
- **8.-11.1.2024 in 15.1.2024**  
  Online individualni meetingi z zainteresiranimi študenti in/ali deležniki.
  Vzpostavitev online discord strežnika z namenom lažje organizacije, informiranja in
  sprejemanja feedbacka/želja udeležencev.
- **torek, 23.1.2024**  
  Drugo srečanje: samo študenti, razkritje prvih gostov in sprejemanje feedbackov/
  želja/pričakovanj.
- **sreda, 7.2.2024**  
  Networking srečanje: tudi za zunanje, študente in ne-študente, z namenom
  spoznavanja novih ljudi. Obiskali so nas razni pro-aktivni ljudje na začetku svojih
  podjetniških poti, ki so slučajno znotraj mojega kroga poznanstev.

### Srečanja z gosti
Vsa nadaljnja srečanja so bila v obliki gost+študenti, kjer se je zbralo tam okoli 10-20
študentov (odvisno od dogodka, podobno število udeležencev tudi na zgoraj zapisanih
prvih treh srečanjih). Prisluhnili smo zgodbam povabljenega, ga vprašali vse kar nam je
padlo na pamet in nasploh veliko odnesli - nove poglede, ideje in navdih.

- **torek, 20.2.2024**: Žiga Vavpotič
- **torek, 12.3.2024**: Igor Verstovšek
- **torek, 26.3.2024**: Gorazd Lampič
- **sreda, 3.4.2024**: Boris Horvat
- **sreda, 17.4.2024**: Matej Tušak
- **sreda, 8.5.2024**: Kristjan Anderle
- **sreda, 22.5.2024**: Nejc Škoberne

### Predhodne aktivnosti
"Honourable mention" še dveh pred-koronskih srečanj:

- **četrtek, 28.11.2019**  
  Večji in bolj oglaševan (=splet, študentska organizacija, fmf obvestila, plakati in
  osebno po predavanjih) dogodek kot ostala zgoraj omenjena srečanja. Z moje strani
  prvi tak dogodek, organiziran z namenom preizkusa interesa na "maksimalističen"
  način: koliko ljudi bo prišlo pogledat (najverjetneje več ali manj iz radovednosti) če jih
  pospammamo z oglaševanjem in pripravimo le najboljše goste. Organizirano torej kot
  klasično predavanje, kjer so se nam pridružili: Mark Pleško, Anka Brus, Igor Poberaj
  in Gorazd Lampič, vsak od njih s 15-minutnim monologom, kateremu so sledila
  vprašanja iz publike in neformalno druženje.
- **petek, 21.2.2020**: organizacijsko srečanje, brez gostov, v petek zvečer. Z namenom
  preizkusa koliko ljudi bi dejansko bilo pripravljenih kaj sodelovati pri organizaciji. Teh
  je bilo takrat kar 10.

## Pogled v prihodnost

S koncem šolskega leta 2023/24 zapuščam fakulteto in s tem tudi organizacijo
Podjetniškega kluba FMF.

Upam da bo klub v prihodnje nadaljeval z aktivnostmi spodbujanja mreženja in ustvarjal
okolje, v katerem lahko člani iz prve roke spoznajo, kaj je v podjetniškem svetu mogoče
doseči in kako se lotiti svojih projektov. Cilj je nuditi študentom okolje v katerem, ob
primerni ravni proaktivnosti, postanejo samozadostni, da vedo, kje poiskati potrebna
orodja, informacije in pomoč ter se samozavestno podajo na svojo podjetniško pot.

Zanimivih posameznikov in podjetnikov je v Sloveniji (pa tudi širše) več kot dovolj da se
prirejanje takih mini srečanj (max 20-25 ljudi) z zanimivimi posamezniki, kot smo jih vajeni
iz prvega leta delovanja, ne bo ustavilo z mojim odhodom. Tematik, posameznikov in smeri
v katere se taka srečanja lahko zapelje je nešteto, tako da upam da bodo novi
organizatorji znali poslušati udeležence in jim pripravili kar najbolj uporabne vsebine in
dogodke.

Dalje upam, da se bo klub v nadaljnje razširil tudi v aktivnosti, ki mi jih letos za slavnostni
konec šolskega leta (zaradi pomanjkanja povpraševanja) ni uspelo organizirati: ideja za
zaključek leta je bila pripraviti dogodek v obliki demo day-a/pitch contest-a za naše
udeležence, kjer bi se lahko nekaj študentov (recimo 5) preizkusilo v pripravi
podjetniškega načrta ter potem tega tudi predstavilo pred zainteresirano publiko
(dogovorjeno je bilo tudi z vsaj enim predstavnikom določenega slovenskega sklada
tveganega kapitala).

Bolj direktno, želel bi si da klub končno dobi tudi pravo spletno stran s FMF domeno (kar je
že bilo v pogovorih a na koncu še nismo prišli do zaključka).

## Ideje za prihodnje aktivnosti

Seznam ostalih potencialnih aktivnosti, ki ni niti izčrpen niti kakorkoli drugače popoln, v
nobenem posebnem vrstnem redu vsebuje tudi:

- obiske slovenskih podjetij,
- mreženja na 101 način (poleg že preizkušenih ki se zgodijo v učilnici na fakulteti),
- bolj specifične, usmerjene delavnice (dva primera: v pred-koronskem času sem bil
dogovorjen z zaposlenim enega od management consulting podjetij, ki delujejo tudi v
Sloveniji, za delavnico retorike in pa za delavnice psihološke priprave v podjetništvu
z določenim slovenskim coachem)
- povezovanja z ostalimi študentskimi klubi
- povezovanja z ostalimi podjetniškimi klubi in deležniki slovenskega podpornega
startup okolja (inkubatorji, akceleratorji, klubi, državnimi uradi in iniciativami,…)
- "idea defence" - en od študentov predstavi svojo idejo (podprto z argumenti/izračuni/
predpostavkami) pred ostalimi udeleženci. Dobra vaja za character building (ob pravi
izvedbi bi moral biti tisti ki predstavlja soočen s kritično obravnavo ostalih
udeležencev), odlična priložnost torej za izmenjavo mnenj, za začetek poglobljenih
debat in kolektivnega razmišljanja o podjetniških idejah.
- "fuck-up nights" - lahko interno ali z gosti, udeleženci delijo svoje najhujše napake, ki
so jih storili v podjetništvu, in kaj so se iz njih naučili.
- analize uspešnih startupov/podjetniških zgodb - posameznik si izbere enega od
uspešnih startupov/podjetij in analizira ključne dogodke v zgodovini poslovanja ter jih
predstavi ostalim
- sodelovanja na case study tekmovanjih
- poletne šole in skupna potovanja
    `,
    seoDescription:
      "Pregled aktivnosti Podjetniškega kluba FMF v študijskem letu 2023/24 pod vodstvom Timoteja Lemuta, s pogledom na poslanstvo, pretekle dogodke in prihodnje usmeritve kluba.",
    seoKeywords:
      "Podjetniški klub FMF, Timotej Lemut, študentsko podjetništvo, mreženje, podjetniške delavnice, Fakulteta za matematiko in fiziko, startup, podjetniška skupnost",
  },
  {
    id: "14",
    title: "Andrija Šulić – Trampolin Studio",
    slug: "andrija-sulic-trampolin-studio",
    author: "Nino Djordjević",
    date: "2025-05-12",
    excerpt:
      "V ponedeljek, 12. maja 2025, smo v sklopu šestega srečanja Podjetniškega kluba FMF gostili Andrija Šulića, soustanovitelja kreativnega studia Trampolin Studio. Dogodek se je začel že pred uradnim začetkom, ko je Andrija, nekoliko prezgodaj prispel, z nekaj najhitrejšimi člani sprožil prijeten, neformalni pogovor o njihovih dejavnostih in izkušnjah.",
    coverImage: "/images/andrija.jpg",
    category: "Dogodki",
    content: `
# Šesti dogodek Podjetniškega kluba FMF • 12. maja 2025: Andrija Šulić – Trampolin Studio

V ponedeljek, 12. maja 2025, smo v sklopu šestega srečanja Podjetniškega kluba FMF gostili Andrija Šulića, soustanovitelja kreativnega studia Trampolin Studio. Dogodek se je začel že pred uradnim začetkom, ko je Andrija, nekoliko prezgodaj prispel, z nekaj najhitrejšimi člani sprožil prijeten, neformalni pogovor o njihovih dejavnostih in izkušnjah. Dogodka se je udeležilo 12 članov kluba in ta je potekal 1h in 50min.

## Uvod v Trampolin Studio
Ko so se udeleženci zbrali, se je Andrija usedel za računalnik, odprl spletno stran www.trampolin.studio in predstavil delovanje studia. Trampolin Studio razvija sodobne spletne strani, celostne grafične podobe, logotipe in brand matrike – vse na presečišču kreativnosti in vrhunske tehnologije. Predstavil je koncept dizajn studia Jump Higher, Have Fun, ki v ospredje postavlja strast do inovativnih rešitev in prijetno, navdihujoče delovno vzdušje.

## Začetki in dragocene izkušnje
Andrija je priznal, da je bil na začetku "varna" izbira – zaposlil se je pri več podjetjih, preden je ustanovil svoje. Posebno omembe vreden je bil njegov čas v podjetju Povio, kjer je pridobil neprecenljive izkušnje in mrežo poznanstev. Priporoča prav tak pristop kot odlično odskočno desko za vsakogar, ki razmišlja o lastnem podjetju.

## Struktura podjetja: production & operations
Poglobljeno smo se pogovarjali o organizaciji dela v Trampolin Studiu. Andrija vidi podjetje sestavljeno iz dveh ključnih oddelkov: production, ki skrbi za ustvarjalni in izvršni del projektov, ter operations, ki zagotavlja nemoteno delovanje in optimizira procese. Poudaril je, da z rastjo podjetja pravzaprav operacije postanejo vse pomembnejše, saj je prav njihova naloga, da zaposlenim nikoli ne zmanjka dela in da potekajo roki ter kakovost.

## Mednarodna rast in izzivi
Trampolin Studio že čuti učinke širjenja na tuje trge – v lanskem letu so kar 30 % prometa ustvarili v tujini. Kljub temu Andrija priznava, da jim še manjka "stroj" za sistematično pridobivanje visokokakovostnih tujih strank, zato se še soočajo z določenimi ovirami pri globalni ekspanziji.

## Poslovni model in potek projektov
Večino prihodkov studio ustvari s plačili po projektu, hkrati pa gradijo tudi na recurring revenue iz rednih vzdrževalnih pogodb, vendar je to manjši del njihovih prihodkov. Andrija je predstavil njihov standardni proces: od začetnih razgovorov in definiranja potreb, prek raziskav in oblikovanja koncepta, do vzdrževanja stika s stranko in prilagajanja rešitve skozi celoten potek projekta. 
Dotaknili smo se tudi pomembne teme zaposlovanja novih sodelavcev – kdaj je pravi trenutek za to in kako se tega lotiti premišljeno. Andrija je poudaril, da je ključno najprej jasno opredeliti, kateri del svojega dela želiš predati naprej. Šele ko to razumeš, lahko začneš iskati osebo, ki ima ustrezna znanja in sposobnosti, da to delo prevzame. S tem pristopom ostane struktura podjetja jasna, naloge pa učinkovito razporejene.

## Uporaba umetne inteligence
Neizbežno se je razprava dotaknila tudi AI. Andrija je poudaril, da AI že uporabljajo kot orodje za pohitritev ustvarjalnega procesa, a še zdaleč ni tako zanesljiv, da bi lahko v celoti nadomestil človeški faktor. Trdi, da bo tisti, ki se ne bo prilagodil pričakovanim hitrejšim odzivom in izhodom, kmalu izgubil konkurenčno prednost.

Kot vsako srečanje smo tudi to zaključili s kratko fotografsko seanso in prijaznim slovesom. Iskrena zahvala Andriji Šuliću za njegov čas, odprtost in navdihujoče poglede ter želja po uspehu na njegovi podjetniški poti!

Nino Djordjević – v imenu Podjetniškega kluba FMF
    `,
    seoDescription:
      "Poročilo s šestega srečanja Podjetniškega kluba FMF z Andrijem Šulićem iz Trampolin Studia, kjer je delil izkušnje o vodenju kreativnega studia.",
    seoKeywords:
      "Andrija Šulić, Trampolin Studio, Podjetniški klub FMF, kreativni studio, dizajn, spletne strani, podjetništvo, AI v kreativnosti",
  }
];

// Mock function to simulate API call for fetching all blog posts
export const fetchAllBlogPosts = (page: number = 0, pageSize: number = 10) => {
  // Sort the blog posts by date in descending order (newest first)
  const sortedPosts = [...DEMO_BLOG_POSTS].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedPosts.length / pageSize);

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
