'use client';

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Lightbulb, Network } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glowing dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">
              Pridruži se nam in rasti skupaj z nami
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Postani del naše podjetniške skupnosti
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-12 max-w-2xl mx-auto"
          >
            Pridruži se nam in se poveži z ambicioznimi študenti, ki si želijo razviti svoje podjetniške veščine in ustvariti prihodnost.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex-1 sm:flex-initial">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                style={{ borderRadius: '1.5rem' }}
              >
                Pridruži se klubu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center">
                  <Network className="w-4 h-4 text-white" />
                </div>
              </div>
              <span className="text-sm">Povezovanje • Inovacije • Rast</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Mreženje s podjetniki</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Razvoj idej</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Osebna rast</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 