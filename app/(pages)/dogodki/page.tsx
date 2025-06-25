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
            <div className="neo-brutalist-card p-6 mb-6 font-bold text-xl text-center">
              V tem letu ni več dogodkov. Hvala za obisk in spremljaj nas za nove termine!
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
