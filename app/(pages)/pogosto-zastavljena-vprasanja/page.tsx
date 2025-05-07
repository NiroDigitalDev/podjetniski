import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Splošna vprašanja",
    questions: [
      {
        question: "Kdo se lahko pridruži klubu?",
        answer:
          "Klub je odprt za vse študente Fakultete za matematiko in fiziko (FMF) ter študente drugih fakultet, ki jih zanima podjetništvo. Pridružiti se lahko tudi diplomanti in mladi podjetniki, ki želijo deliti svoje izkušnje.",
      },
      {
        question: "Kdaj je bil klub ustanovljen?",
        answer:
          "Klub je bil ustanovljen v študijskem letu 2022/23 na pobudo Timoteja Lemuta, takratnega študenta FMF. V študijskem letu 2024/25 je vodenje kluba prevzel Nino Djordjević.",
      },
      {
        question: "Kaj je glavni namen kluba?",
        answer:
          "Glavni namen kluba je spodbujanje podjetniškega razmišljanja in ustvarjanje skupnosti študentov, ki si želijo znanja, izkušenj in povezav, ki presegajo klasično akademsko izobraževanje.",
      },
    ],
  },
  {
    title: "Aktivnosti in dogodki",
    questions: [
      {
        question: "Katere aktivnosti organizirate?",
        answer:
          "Osrednji del delovanja kluba predstavljajo srečanja z uspešnimi podjetniki in strokovnjaki, ki z nami delijo svoje zgodbe, izzive in nasvete. Vsako srečanje vključuje Q&A del, kjer študenti dobijo priložnost postavljati vprašanja neposredno gostom.",
      },
      {
        question: "Kako pogosto se dogodki odvijajo?",
        answer:
          "Dogodki se odvijajo redno skozi celotno študijsko leto. Obveščamo vas o vseh prihajajočih dogodkih preko naših komunikacijskih kanalov.",
      },
      {
        question: "Ali je udeležba na dogodkih plačljiva?",
        answer:
          "Večina naših dogodkov je brezplačna za člane kluba. Za nekatere posebne delavnice ali dogodke lahko zaračunamo simbolično vstopnino, ki pokrije stroške organizacije.",
      },
    ],
  },
  {
    title: "Članstvo in sodelovanje",
    questions: [
      {
        question: "Kako se lahko pridružim klubu?",
        answer:
          "Pridružiti se lahko tako, da izpolnite prijavni obrazec na naši spletni strani ali se udeležite katerega od naših dogodkov in se tam prijavite. Po prijavi vas bomo obveščali o vseh prihajajočih aktivnostih.",
      },
      {
        question: "Ali je članstvo plačljivo?",
        answer:
          "Članstvo v klubu je brezplačno za vse študente FMF. Za nekatere posebne dogodke ali delavnice lahko zaračunamo simbolično vstopnino, ki pokrije stroške organizacije.",
      },
      {
        question: "Kako se lahko aktivno vključim?",
        answer:
          "Lahko se vključite na več načinov: sodelovanje pri organizaciji dogodkov, predlaganje novih idej, mentorstvo mlajšim članom, sodelovanje pri razvoju poslovnih idej ali kot predavatelj na naših dogodkih.",
      },
    ],
  },
  {
    title: "Razvoj in mentorstvo",
    questions: [
      {
        question: "Ali nudite podporo pri razvoju poslovnih idej?",
        answer:
          "Da, nudimo podporo pri razvoju poslovnih idej skozi mentorstvo, delavnice, mrežne povezave in priložnosti za predstavitev idej potencialnim investitorjem. Prav tako organiziramo tekmovanja, kjer lahko preizkusite svoje ideje.",
      },
      {
        question: "Katere veščine lahko razvijam v klubu?",
        answer:
          "V klubu lahko razvijate različne veščine, vključno z vodenjem, javnim nastopanjem, sodelovanjem in mreženjem. Prav tako dobite priložnost za razvoj podjetniške miselnosti in praktičnega znanja.",
      },
      {
        question: "Ali imate program mentorstva?",
        answer:
          "Da, klub omogoča povezovanje s strokovnjaki in uspešnimi podjetniki, ki delijo svoje izkušnje in znanje. To omogoča osebni razvoj in učenje iz prve roke.",
      },
    ],
  },
  {
    title: "Povezovanje in mreženje",
    questions: [
      {
        question: "Kako klub pomaga pri mreženju?",
        answer:
          "Klub organizira različne dogodke in srečanja, kjer se lahko povežete z drugimi študenti, podjetniki in strokovnjaki. To omogoča gradnjo pomembnih povezav za prihodnje karierne priložnosti.",
      },
      {
        question: "Ali imate povezave s podjetji?",
        answer:
          "Da, klub vzdržuje povezave z različnimi podjetji in organizacijami, kar omogoča obiske podjetij, predavanja gostov iz industrije in možnosti za prakse ali zaposlitve.",
      },
      {
        question: "Kako lahko izkoristim mrežo kluba?",
        answer:
          "Mrežo kluba lahko izkoristite tako, da se aktivno udeležujete dogodkov, sodelujete v projektih, vzpostavljate stike z drugimi člani in izražate svoj interes za specifične priložnosti.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            Pogosta vprašanja
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Odgovorili smo na najpogostejša vprašanja o našem klubu. Če vam kaj
            ni jasno, nas ne oklevajte kontaktirati.
          </p>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem
                      key={questionIndex}
                      value={`item-${categoryIndex}-${questionIndex}`}
                      className="border-b"
                    >
                      <AccordionTrigger className="hover:no-underline">
                        <span className="text-lg font-medium">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
