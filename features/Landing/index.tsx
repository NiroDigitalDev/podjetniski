"use client";

import { BlogPostSummary } from "@/constants/blogData";
import Link from "next/link";
import Image from "next/image";

interface LandingPageProps {
  blogPosts: BlogPostSummary[];
}

export default function LandingPage({ blogPosts }: LandingPageProps) {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="neo-brutalist-section relative overflow-hidden">
        <div className="neo-brutalist-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in-up">
              <h1 className="mb-6">
                <span className="text-primary">PODJETNIŠKI KLUB</span> FMF
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Študentska iniciativa, namenjena vsem študentom Fakultete za
                matematiko in fiziko, ki jih zanima podjetništvo, inovacije in
                osebni razvoj.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="neo-brutalist-btn no-underline">
                  O NAS
                </Link>
                <Link
                  href="/events"
                  className="neo-brutalist-btn-secondary no-underline"
                >
                  DOGODKI
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] animate-float">
              <div className="neo-brutalist-card absolute top-0 right-0 w-full h-full overflow-hidden">
                <Image
                  src="/images/hero.webp"
                  alt="Podjetniški Klub FMF"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="neo-brutalist-section bg-muted">
        <div className="neo-brutalist-container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">KDO SMO</h2>
            <p className="text-xl">
              Klub je bil ustanovljen v študijskem letu 2022/23 na pobudo
              Timoteja Lemuta, takratnega študenta FMF, ki je klub tudi aktivno
              vodil do konca šolskega leta 2023/24. V študijskem letu 2024/25 je
              vodenje kluba prevzel Nino Djordjević, ki nadaljuje z vizijo
              ustvarjanja okolja, kjer se lahko mladi učijo iz resničnih
              podjetniških izkušenj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neo-brutalist-card p-8">
              <h3 className="mb-4">POSLANSTVO</h3>
              <p>
                Spodbujanje podjetniškega razmišljanja in ustvarjanje skupnosti
                študentov, ki si želijo znanja, izkušenj in povezav.
              </p>
            </div>
            <div className="neo-brutalist-card p-8">
              <h3 className="mb-4">VIZIJA</h3>
              <p>
                Postati vodilna študentska iniciativa za povezovanje mladih s
                podjetništvom in industrijo.
              </p>
            </div>
            <div className="neo-brutalist-card p-8">
              <h3 className="mb-4">CILJI</h3>
              <p>
                Krepitev mehkih veščin, podpora pri iskanju kariernih
                priložnosti in mentorskih odnosov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="neo-brutalist-section">
        <div className="neo-brutalist-container">
          <h2 className="text-center mb-12">PRIHAJAJOČI DOGODKI</h2>

          <div className="neo-brutalist-card p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-primary text-primary-foreground p-4 text-center border-black border-[var(--neo-border-width)]">
                  <span className="text-3xl font-bold">15</span>
                  <p className="uppercase font-bold">Maj</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="mb-2">
                  PODJETNIŠKI VEČER: OD IDEJE DO PRODUKTA
                </h3>
                <p className="mb-4">
                  Pridružite se nam na podjetniškem večeru, kjer bomo gostili
                  uspešnega podjetnika, ki bo delil svojo pot od začetne ideje
                  do uspešnega produkta.
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>
                    Fakulteta za matematiko in fiziko, predavalnica F1
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="neo-brutalist-card p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="bg-primary text-primary-foreground p-4 text-center border-black border-[var(--neo-border-width)]">
                  <span className="text-3xl font-bold">22</span>
                  <p className="uppercase font-bold">Maj</p>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="mb-2">
                  DELAVNICA: KAKO PREDSTAVITI SVOJO IDEJO
                </h3>
                <p className="mb-4">
                  Praktična delavnica, kjer se boste naučili učinkovito
                  predstaviti svoje podjetniške ideje in projekte.
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>
                    Fakulteta za matematiko in fiziko, računalniška učilnica
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/events" className="neo-brutalist-btn no-underline">
              VSI DOGODKI
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {blogPosts.length > 0 && (
        <section className="neo-brutalist-section bg-muted">
          <div className="neo-brutalist-container">
            <h2 className="text-center mb-12">BLOG</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="neo-brutalist-card overflow-hidden"
                >
                  {post.coverImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mb-3">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-sm">{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary font-bold no-underline hover:underline"
                      >
                        PREBERI VEČ
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/blog" className="neo-brutalist-btn no-underline">
                VSI ČLANKI
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="neo-brutalist-section">
        <div className="neo-brutalist-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">PRIDRUŽI SE NAM</h2>
              <p className="text-xl mb-8">
                Če te zanima podjetništvo, inovacije, osebni razvoj ali zgolj
                spoznavanje zanimivih ljudi, te vabimo, da se pridružiš
                Podjetniškemu klubu FMF.
              </p>
              <div className="neo-brutalist-card p-6 mb-6">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div>
                    <h3 className="text-lg mb-1">TELEFON</h3>
                    <p>+386 1 234 5678</p>
                  </div>
                </div>
              </div>
              <div className="neo-brutalist-card p-6 mb-6">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <div>
                    <h3 className="text-lg mb-1">EMAIL</h3>
                    <p>podjetniski.klub@fmf.uni-lj.si</p>
                  </div>
                </div>
              </div>
              <div className="neo-brutalist-card p-6">
                <div className="flex items-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h3 className="text-lg mb-1">LOKACIJA</h3>
                    <p>
                      Fakulteta za matematiko in fiziko
                      <br />
                      Jadranska 19
                      <br />
                      1000 Ljubljana
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="neo-brutalist-card p-8">
                <h3 className="mb-6">KONTAKTIRAJ NAS</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-bold">
                      IME IN PRIIMEK
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="neo-brutalist-input w-full"
                      placeholder="Tvoje ime in priimek"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-bold">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="neo-brutalist-input w-full"
                      placeholder="tvoj.email@primer.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-bold">
                      SPOROČILO
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="neo-brutalist-input w-full"
                      placeholder="Tvoje sporočilo..."
                    ></textarea>
                  </div>
                  <button type="submit" className="neo-brutalist-btn w-full">
                    POŠLJI SPOROČILO
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
