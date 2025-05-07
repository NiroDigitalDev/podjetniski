"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";

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

          <div className="neo-brutalist-card p-12 text-center animate-fade-in-up">
            <div className="inline-block bg-muted p-8 rounded-full mb-8">
              <Calendar className="w-24 h-24 text-primary" />
            </div>

            <h2 className="text-3xl font-bold mb-6">DOGODKI KMALU NA VOLJO</h2>

            <p className="text-xl mb-10 max-w-2xl mx-auto">
              Trenutno pripravljamo seznam prihajajočih in preteklih dogodkov.
              Kmalu boste lahko spremljali naša predavanja, delavnice in mrežna
              srečanja.
            </p>

            <div className="mt-8 space-x-4">
              <Link href="/" className="neo-brutalist-btn no-underline">
                DOMOV
              </Link>
              <Link
                href="/#contact"
                className="neo-brutalist-btn-secondary no-underline"
              >
                OBVEŠČAJ ME
              </Link>
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
