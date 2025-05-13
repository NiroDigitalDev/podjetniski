"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";

export default function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "network_error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Use the API route instead of the direct service call
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.error ||
            "Prišlo je do napake pri pošiljanju sporočila. Poskusite znova kasneje."
        );
      }
    } catch (error) {
      console.error("Error sending contact form:", error);

      // Check if it's a network error
      if (
        error instanceof Error &&
        (error.message.includes("network") ||
          error.message.includes("ERR_NETWORK") ||
          error.message.includes("Failed to fetch"))
      ) {
        setSubmitStatus("network_error");
        setErrorMessage(
          "Omrežna napaka: Trenutno ni mogoče poslati sporočila. " +
            "Preverite vašo povezavo z internetom ali poskusite znova kasneje."
        );
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          "Prišlo je do napake pri pošiljanju sporočila. Poskusite znova kasneje."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simulation function for development environments
  const simulateSuccessfulSubmission = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="neo-brutalist-section" id="contact">
      <div className="neo-brutalist-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="mb-6">PRIDRUŽI SE NAM</h2>
          <p className="text-xl">
            Če te zanima podjetništvo, inovacije, osebni razvoj ali zgolj
            spoznavanje zanimivih ljudi, te vabimo, da se pridružiš
            Podjetniškemu klubu FMF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="mb-6 text-xl font-bold">KONTAKTNI PODATKI</h3>
            <ContactInfo />

            <div className="mt-8">
              <SocialMedia />
            </div>

           
          </div>

          <div className="animate-fade-in-up">
            <div className="neo-brutalist-card p-8">
              <h3 className="mb-6">PRIDRUŽI SE NAM</h3>

              {submitStatus === "success" ? (
                <div className="bg-muted p-6 border-2 border-primary">
                  <h4 className="text-xl font-bold mb-2">Prijava uspešno prejeta!</h4>
                  <p>
                    Hvala za prijavo na Podjetniški klub FMF. Dodali vas bomo na našo mailing listo in vas obveščali o prihajajočih dogodkih, zanimivih predavanjih in ostalih aktivnostih našega kluba.
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="neo-brutalist-btn mt-4 w-full"
                  >
                    ZAPRI
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {(submitStatus === "error" ||
                    submitStatus === "network_error") && (
                    <div className="bg-destructive/10 border-2 border-destructive p-4 mb-4">
                      <p className="font-bold text-destructive mb-2">
                        {errorMessage ||
                          "Prišlo je do napake pri oddaji prijave. Poskusite znova kasneje."}
                      </p>

                      {submitStatus === "network_error" && (
                        <div className="mt-4 p-3 bg-muted border-2 border-muted-foreground">
                          <p className="text-sm">
                            <strong>Razvijalci:</strong> Za lokalno testiranje
                            lahko uporabite simulacijo:
                          </p>
                          <button
                            onClick={simulateSuccessfulSubmission}
                            className="mt-2 text-sm bg-primary text-primary-foreground px-3 py-1 border-2 border-black"
                          >
                            Simuliraj uspešno pošiljanje
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block mb-2 font-bold">
                      IME IN PRIIMEK
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="neo-brutalist-input w-full"
                      placeholder="Tvoje ime in priimek"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-bold">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="neo-brutalist-input w-full"
                      placeholder="tvoj.email@primer.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-bold">
                      OPOMBA (NEOBVEZNO)
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="neo-brutalist-input w-full"
                      placeholder="Dodatne informacije ali vprašanja..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="neo-brutalist-btn w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "PRIJAVA V TEKU..." : "PRIDRUŽI SE"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
