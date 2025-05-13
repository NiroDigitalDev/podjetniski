import { Calendar, Clock, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dogodki | Podjetniški Klub FMF",
  description:
    "Spremljajte srečanja, delavnice in predavanja Podjetniškega kluba FMF. Pridružite se nam na dogodkih z uspešnimi podjetniki in strokovnjaki.",
  keywords:
    "podjetniški dogodki, FMF, mreženje, delavnice, predavanja, študentski dogodki, podjetništvo, startup srečanja",
  openGraph: {
    title: "Dogodki Podjetniškega kluba FMF",
    description: "Srečanja s podjetniki, delavnice in predavanja za študente, ki jih zanima podjetništvo",
    images: ['/images/og-image.png'],
  },
};

export default function EventsPage() {
  return (
    <main className="neo-brutalist-section pt-24 pb-16">
      <div className="neo-brutalist-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="mb-4">
              <span className="text-primary">DOGODKI</span> PODJETNIŠKI KLUB
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Spremljajte naše dogodke, srečanja, delavnice in predavanja.
              Povežite se z nami v živo!
            </p>
          </div>

          <div className="space-y-8">
            <div className="neo-brutalist-card p-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-4">Q&A SREČANJE Z IVO BOSCAROLOM</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-bold">8. maj 2025 (četrtek)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>17:00–19:00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>FMF, matematična stavba, učilnica 2.02</span>
                  </div>
                  <div className="font-bold text-primary">Udeležba brezplačna</div>
                </div>
                
                <div className="flex-1">
                  <p className="mb-4">
                    Ekskluzivno Q&A srečanje z legendarnim podjetnikom Ivo Boscarolom, vizionarjem, 
                    ki je s svojim podjetjem Pipistrel premikal meje mogočega in slovensko 
                    inovativnost ponesel v svet.
                  </p>
                  <p>
                    Boscarol je pionir v razvoju električnih letal, prejemnik številnih mednarodnih 
                    nagrad in človek, ki s svojo energijo, drznostjo in predanostjo navdihuje generacije podjetnikov.
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-brutalist-card p-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold mb-4">ANDRIJA ŠULIĆ: OBLIKOVANJE DIGITALNIH PRODUKTOV</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-bold">12. maj 2025 (ponedeljek)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>18:00–20:00</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>FMF, matematična stavba, učilnica 2.02</span>
                  </div>
                  <div className="font-bold text-primary">Udeležba brezplačna</div>
                </div>
                
                <div className="flex-1">
                  <p className="mb-4">
                    Gostimo izjemnega podjetnika in produktnega oblikovalca Andrijo Šulića, 
                    soustanovitelja podjetja Trampoline Studio.
                  </p>
                  <p>
                    Andrija ima več kot 15 let izkušenj z vodenjem digitalnih projektov za naročnike, 
                    kot so Telekom Slovenije, NLB, Volkswagen in številni ameriški startupi. 
                    V podjetju Trampoline Studio vodi oblikovanje digitalnih produktov.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="neo-brutalist-card p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <h3 className="mb-4">MREŽENJE</h3>
              <p>
                Druženje s strokovnjaki in podjetniki iz različnih industrij in
                ustvarjanje dragocenih povezav.
              </p>
            </div>

            <div
              className="neo-brutalist-card p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <h3 className="mb-4">DELAVNICE</h3>
              <p>
                Praktične delavnice, kjer boste pridobili nova znanja in veščine
                za podjetniško pot.
              </p>
            </div>

            <div
              className="neo-brutalist-card p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "300ms" }}
            >
              <h3 className="mb-4">PREDAVANJA</h3>
              <p>
                Inspirativna predavanja uspešnih podjetnikov in strokovnjakov z
                bogatimi izkušnjami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
