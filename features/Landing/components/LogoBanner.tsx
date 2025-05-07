'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const leaders = [
  {
    name: "Timotej Lemut",
    role: "Ustanovitelj kluba",
    period: "2022/23 - 2023/24",
    description: "Ustanovil je Podjetniški klub FMF in ga uspešno vodil prva dva leta, postavil temelje za razvoj podjetniške kulture med študenti. Še vedno aktivno sodeluje pri organizaciji kluba in deli svoje izkušnje.",
    features: ["Ustanovitelj", "Prvi predsednik", "Vizionar"]
  },
  {
    name: "Nino Djordjević",
    role: "Trenutni predsednik",
    period: "2024/25 - danes",
    description: "Nadaljuje z vizijo ustvarjanja okolja, kjer se mladi učijo iz resničnih podjetniških izkušenj in razvijajo svoje ideje.",
    features: ["Predsednik", "Aktiven podjetnik", "Vodja"]
  }
];

export default function LogoBanner() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 hover:text-primary transition-colors duration-300"
          >
            Vodstvo kluba
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Spoznajte ljudi, ki so oblikovali in še vedno oblikujejo prihodnost Podjetniškega kluba FMF.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-transparent hover:border-primary/20 hover:bg-card/80"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">{leader.role}</p>
                  <p className="text-sm text-muted-foreground">{leader.period}</p>
                </div>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">{leader.description}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {leader.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center text-sm text-muted-foreground bg-background/50 hover:bg-primary/10 hover:text-primary hover:scale-105 px-3 py-1 rounded-full transition-all duration-300 cursor-default"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link href="#contact-form" className="flex items-center gap-2 relative z-10">
              <span className="relative z-10">Pridruži se nam</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 