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
              <h2 className="text-2xl font-bold mb-4">DARKO BUTINA</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-bold">6. junij 2025 (petek)</span>
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
                    Teme: umetna inteligenca v poslovanju, prihodnost managementa, razprava o podjetniških idejah (quick pitch).
                  </p>
                  <p>
                    Udeleženci bodo imeli možnost v kratkem pitchu predstaviti svoje ideje in prejeti povratno mnenje.
                  </p>
                </div>
              </div>
            </div>

            <div className="neo-brutalist-card p-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold mb-4">BLAŽ BRODNJAK (PREDSEDNIK UPRAVE NLB)</h2>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-bold">10. junij 2025 (torek)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>17:00–19:30</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>FMF, matematična stavba, učilnica 2.02</span>
                  </div>
                  <div className="font-bold text-primary">Dogodek bo potekal s prijavo</div>
                </div>
                
                <div className="flex-1">
                  <p className="mb-4">
                    Ekskluzivna priložnost za pogovor o bančništvu, vodenju in strateškem razmišljanju na najvišji ravni.
                  </p>
                  <p className="mb-6">
                    Dogodek bo potekal s prijavo – več informacij sledi kmalu.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe1sgv81dwW3rQ7qL0R3oMpvmQcGqZZVepG40Pf5TOsSSmWXw/viewform?usp=sharing&ouid=105392280692077432038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-brutalist-btn no-underline"
                >
                  PRIJAVI SE
                </a>
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
