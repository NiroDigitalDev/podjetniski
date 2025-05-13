"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <section className="w-full py-24 bg-background mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-4xl font-bold mb-8">Pravila o zasebnosti</h1>
            <p>Datum začetka veljavnosti: 5. 5. 2024</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Uvod in podatki o organizaciji
            </h2>
            <p>
              Podjetniški klub FMF se zavezujemo, da bomo našim članom in sodelavcem
              služili po najboljših močeh. Del te zaveze vključuje odgovorno
              upravljanje osebnih podatkov, zbranih prek naše spletne strani
              podjetniskiklubfmf.si in vseh povezanih interakcij. Naši glavni cilji pri
              obdelavi teh informacij vključujejo:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Izboljšanje uporabniške izkušnje na naši platformi z
                razumevanjem potreb in preferenc članov.
              </li>
              <li>
                Zagotavljanje pravočasne podpore in odziv na poizvedbe ali
                zahteve za sodelovanje.
              </li>
              <li>
                Izboljšanje naših aktivnosti in dogodkov za izpolnjevanje
                spreminjajočih se zahtev naših članov.
              </li>
              <li>
                Izvajanje potrebnih organizacijskih operacij, kot so upravljanje članstva
                in komunikacija.
              </li>
            </ul>
            <p>
              Naša politika je obdelava osebnih podatkov z največjim
              spoštovanjem zasebnosti in varnosti. Upoštevamo vse relevantne
              predpise in smernice, da zagotovimo, da so podatki, s katerimi
              upravljamo, zaščiteni pred nepooblaščenim dostopom, razkritjem,
              spremembo in uničenjem. Naše prakse so zasnovane tako, da varujejo
              zaupnost in celovitost vaših osebnih podatkov, hkrati pa nam
              omogočajo zagotavljanje storitev, ki nam jih zaupate.
            </p>
            <ul className="list-disc pl-6">
              <li>
                Po 37. členu GDPR nam ni treba imenovati pooblaščene osebe za
                varstvo podatkov (DPO), saj je naš klub študentska organizacija
                in se ne ukvarja z obsežno obdelavo občutljivih osebnih podatkov.
                Zato je nimamo, vendar ostajamo popolnoma zavezani reševanju
                pomislekov glede zasebnosti. Če imate kakršna koli vprašanja ali
                potrebujete dodatne informacije o tem, kako upravljamo z osebnimi
                podatki, nas lahko brez zadržkov kontaktirate na info@podjetniskiklubfmf.si.
              </li>
              <li>
                Vaša zasebnost je naša prioriteta. Zavezani smo k obdelavi vaših
                osebnih podatkov transparentno in z mislijo na vašo varnost. Ta
                zaveza se razteza tudi na naše sodelovanje s partnerji in
                organizacijami, ki lahko obdelujejo osebne podatke v našem imenu.
                Bodite prepričani, da se vse dejavnosti izvajajo v strogem
                skladu z veljavnimi zakoni o zasebnosti.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Obseg in uporaba
            </h2>
            <p>
              Naša politika zasebnosti je zasnovana za zaščito osebnih podatkov
              vseh naših članov in sodelavcev, vključno z obiskovalci spletne strani,
              registriranimi člani in partnerji. Ne glede na to, ali samo
              brskate po naši spletni strani podjetniskiklubfmf.si, uporabljate naše
              storitve kot registriran član ali sodelujete z nami kot
              partner, zagotavljamo, da se vaši osebni podatki
              obdelujejo po najvišjih standardih zasebnosti in varnosti. Ta
              politika opisuje naše prakse in vaše pravice v zvezi z osebnimi
              podatki.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Zbiranje in obdelava podatkov
            </h2>
            <p>
              Naša zaveza k transparentnosti in varstvu podatkov se razteza na
              način, kako zbiramo in uporabljamo vaše osebne podatke. Osebne
              podatke zbiramo prek različnih interakcij, vključno, vendar ne
              omejeno na, kadar se pridružite klubu, udeležujete naših dogodkov,
              ali nam neposredno posredujete informacije.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Shranjevanje in varstvo podatkov
            </h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Shranjevanje podatkov
            </h3>
            <ul className="list-disc pl-6">
              <li>
                Osebni podatki so shranjeni na varnih strežnikih, ki se nahajajo
                v Frankfurtu, Nemčija. Za shranjevanje in obdelavo podatkov
                uporabljamo storitve podjetij Vercel in Supabase. Za storitve,
                ki zahtevajo mednarodni prenos podatkov, zagotavljamo, da so
                takšni prenosi v skladu z vsemi veljavnimi zakoni in ohranjajo
                standarde varstva podatkov, enakovredne tistim na naši primarni
                lokaciji.
              </li>
              <li>
                Partnerji za gostovanje podatkov: Sodelujemo z uglednimi
                ponudniki gostovanja podatkov, ki se zavezujejo k uporabi
                najsodobnejših varnostnih ukrepov. Ti partnerji so izbrani na
                podlagi njihovega upoštevanja strogih standardov varstva
                podatkov.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Pogodbe o obdelavi podatkov
            </h3>
            <p>
              Ko vaše podatke delimo s partnerji in organizacijami, to
              počnemo pod zaščito Pogodb o obdelavi podatkov (DPA), ki
              zagotavljajo, da se vaši podatki upravljajo v skladu z GDPR in
              drugimi ustreznimi zakoni o varstvu podatkov. Te pogodbe
              zahtevajo, da tretje osebe izvedejo ustrezne tehnične in
              organizacijske ukrepe za zagotovitev varnosti vaših podatkov.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Transparentnost in nadzor
            </h3>
            <p>
              Verjamemo v transparentnost in vam zagotavljamo nadzor nad vašimi
              osebnimi podatki. Vedno boste obveščeni o vseh pomembnih
              spremembah naših praks deljenja, in kjer je to primerno, boste
              imeli možnost privoliti v takšne spremembe.
            </p>
            <p>
              Vaše zaupanje nam je pomembno in si prizadevamo zagotoviti, da se
              vaši osebni podatki razkrijejo samo v skladu s to politiko in ko
              za to obstaja upravičen razlog. Za kakršna koli vprašanja ali
              pomisleke glede tega, kako delimo in razkrivamo osebne podatke,
              nas kontaktirajte na info@podjetniskiklubfmf.si.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Pravice uporabnikov in izbire
            </h2>
            <p>
              Pri Podjetniškem klubu FMF priznavamo in spoštujemo vaše pravice glede vaših
              osebnih podatkov v skladu s Splošno uredbo o varstvu podatkov
              (GDPR) in drugimi veljavnimi zakoni o varstvu podatkov. Zavezani
              smo k zagotavljanju, da lahko učinkovito uveljavljate svoje
              pravice. Spodaj je pregled vaših pravic in kako jih lahko
              uveljavljate:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Vaše pravice</h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Pravica dostopa (15. člen GDPR):</strong> Imate pravico
                zahtevati dostop do osebnih podatkov, ki jih hranimo o vas, in
                pridobiti informacije o tem, kako jih obdelujemo.
              </li>
              <li>
                <strong>Pravica do popravka (16. člen GDPR):</strong> Če menite,
                da so kakršni koli osebni podatki, ki jih hranimo o vas, netočni
                ali nepopolni, imate pravico zahtevati njihov popravek ali
                dopolnitev.
              </li>
              <li>
                <strong>
                  Pravica do izbrisa ('pravica do pozabe') (17. člen GDPR):
                </strong>{" "}
                Imate pravico zahtevati izbris vaših osebnih podatkov, ko ti
                niso več potrebni za namene, za katere so bili zbrani, med
                drugimi okoliščinami.
              </li>
              <li>
                <strong>Pravica do omejitve obdelave (18. člen GDPR):</strong>{" "}
                Imate pravico zahtevati, da omejimo obdelavo vaših osebnih
                podatkov pod določenimi pogoji.
              </li>
              <li>
                <strong>
                  Pravica do prenosljivosti podatkov (20. člen GDPR):
                </strong>{" "}
                Imate pravico prejeti vaše osebne podatke v strukturirani,
                splošno uporabljani in strojno berljivi obliki ter prenesti te
                podatke drugemu upravljavcu.
              </li>
              <li>
                <strong>Pravica do ugovora (21. člen GDPR):</strong> Imate
                pravico ugovarjati obdelavi vaših osebnih podatkov pod
                določenimi pogoji, vključno z obdelavo za neposredno trženje.
              </li>
              <li>
                <strong>
                  Pravica do preklica privolitve (7(3). člen GDPR):
                </strong>{" "}
                Kadar obdelava vaših osebnih podatkov temelji na vaši
                privolitvi, imate pravico to privolitev kadar koli preklicati,
                ne da bi to vplivalo na zakonitost obdelave na podlagi
                privolitve pred njenim preklicem.
              </li>
              <li>
                <strong>Pravica do vložitve pritožbe (77. člen GDPR):</strong>{" "}
                Imate pravico vložiti pritožbo pri nadzornem organu, če menite,
                da naša obdelava vaših osebnih podatkov krši veljavne zakone o
                varstvu podatkov.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Uveljavljanje vaših pravic
            </h3>
            <p>
              Za uveljavljanje katere koli od teh pravic nas kontaktirajte na
              info@podjetniskiklubfmf.si.
            </p>
            <p>
              Na vašo zahtevo bomo odgovorili v skladu z veljavnimi zakoni o
              varstvu podatkov in v časovnih okvirih, določenih s temi zakoni.
              Upoštevajte, da bomo v nekaterih primerih morda morali preveriti
              vašo identiteto kot del postopka za zagotovitev varnosti vaših
              osebnih podatkov.
            </p>
            <p>
              Zavezani smo k olajšanju uveljavljanja vaših pravic in
              zagotavljanju, da imate popoln nadzor nad svojimi osebnimi
              podatki. Če imate kakršna koli vprašanja ali pomisleke glede
              ravnanja z vašimi osebnimi podatki, nas ne oklevajte kontaktirati.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Piškotki in tehnologije sledenja
            </h2>
            <p>
              Pri Podjetniškem klubu FMF cenimo vašo zasebnost in smo zavezani k
              transparentnosti glede naše uporabe piškotkov in drugih tehnologij
              sledenja na naši spletni strani podjetniskiklubfmf.si. Te tehnologije
              igrajo ključno vlogo pri zagotavljanju nemotenega delovanja naših
              digitalnih platform, izboljšanju vaše uporabniške izkušnje in
              zagotavljanju vpogledov, ki nam pomagajo pri izboljšavah.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Razumevanje piškotkov in tehnologij sledenja
            </h3>
            <p>
              Piškotki so majhne podatkovne datoteke, nameščene na vaši napravi,
              ki nam omogočajo, da si zapomnimo vaše preference in zbiramo
              informacije o vaši uporabi spletne strani. Tehnologije sledenja,
              kot so spletni svetilniki in oznake pikslov, nam pomagajo
              razumeti, kako uporabljate našo stran in katere strani obiskujete.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Kako uporabljamo te tehnologije
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <strong>Nujni piškotki:</strong> Potrebni za funkcionalnost
                spletne strani, kot sta avtentikacija in varnost. Ne zahtevajo
                privolitve.
              </li>
              <li>
                <strong>Piškotki za zmogljivost in analitiko:</strong> Ti
                zbirajo informacije o tem, kako obiskovalci uporabljajo našo
                spletno stran, katere strani so najpogosteje obiskane in če so
                iz spletnih strani prejeta sporočila o napakah. Ti piškotki nam
                pomagajo izboljšati našo spletno stran.
              </li>
              <li>
                <strong>Funkcionalni piškotki:</strong> Omogočajo spletni
                strani, da nudi izboljšano funkcionalnost in personalizacijo,
                kot je pomnjenje vaših preferenc.
              </li>
              <li>
                <strong>Oglaševalski in ciljni piškotki:</strong> Uporabljajo se
                za dostavo oglasov, ki so bolj relevantni za vas in vaše
                interese. Uporabljajo se tudi za omejitev števila prikazov
                oglasa in pomoč pri merjenju učinkovitosti oglaševalske
                kampanje.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Vaše izbire in privolitev
            </h3>
            <p>
              Ob vašem prvem obisku vam bo naša spletna stran predstavila pasico
              za privolitev v piškotke, kjer lahko:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <strong>Sprejmete vse piškotke:</strong> Privolite v uporabo
                vseh piškotkov in tehnologij sledenja.
              </li>
              <li>
                <strong>Zavrnete nenujne piškotke:</strong> Uporabljali se bodo
                samo nujni piškotki za zagotavljanje potrebnih funkcij spletne
                strani.
              </li>
              <li>
                <strong>Prilagodite svoje preference:</strong> Izberete, katere
                kategorije piškotkov želite dovoliti.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Spremembe pri naši uporabi piškotkov
            </h3>
            <p>
              Morda bomo posodobili našo uporabo piškotkov in tehnologij
              sledenja za izboljšanje naših storitev ali za skladnost z
              zakonskimi zahtevami. Na naši spletni strani boste obveščeni o
              vseh pomembnih spremembah in po potrebi bomo zahtevali vašo
              privolitev.
            </p>
          
            <p>
              Če imate kakršna koli vprašanja ali pomisleke glede naše uporabe
              piškotkov in tehnologij sledenja, nas ne oklevajte kontaktirati na
              info@podjetniskiklubfmf.si. Vaša zasebnost in celovitost vaših osebnih
              podatkov sta za nas izjemnega pomena.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
