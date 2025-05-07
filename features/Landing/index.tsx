"use client";

import Hero from "./components/hero";
import LogoBanner from "./components/LogoBanner";
import ServiceExplanation from "./components/ServiceExplanation";
import MissionSection from "./components/MissionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import { BlogSection } from "./components/BlogSection";
import CTASection from "./components/CTASection";
import { BlogPostSummary } from "@/services/APIService";
import ContactForm from "./components/ContactForm";

interface LandingPageProps {
  blogPosts: BlogPostSummary[];
}

export default function LandingPage({ blogPosts }: LandingPageProps) {
  return (
    <>
      <Hero />

      <CTASection />
      <ServiceExplanation />
      <MissionSection />   
      <LogoBanner />
      <FAQSection />
      <BlogSection blogPosts={blogPosts} />
      <ContactForm />
    </>
  );
}
