"use client";

import { BlogPostSummary } from "@/constants/blogData";
import Link from "next/link";
import Image from "next/image";
import CTASection from "./components/CTASection";

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
      <CTASection />
    </div>
  );
}
