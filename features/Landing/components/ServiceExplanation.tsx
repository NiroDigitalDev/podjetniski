'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { PrimerjajButton } from "@/components/ui/primerjaj-button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServiceExplanation() {
  return (
    <div className="w-full bg-[#f9f9f9]">
      <section className="w-full py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Podjetniški Klub FMF: Vaša pot do uspeha!</h2>
            <p className="text-lg text-muted-foreground">
              Pridružite se nam in razvijte svoje podjetniške veščine, spoznajte zanimive ljudi in uresničite svoje ideje. Vse popolnoma brezplačno za študente FMF!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-background border-0 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Kaj ponujamo?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Srečanja z uspešnimi podjetniki in strokovnjaki</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Delavnice o podjetništvu in osebnem razvoju</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Mrežna srečanja in povezovanje s podjetji</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Podporo pri razvoju in uresničevanju poslovnih idej</span>
                  </li>
                </ol>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-background border-0 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4">Zakaj se pridružiti?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Praktično znanje iz prve roke</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Mreža povezav s podjetniki in strokovnjaki</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Razvoj mehkih veščin in vodstvenih sposobnosti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Priložnosti za karierno rast in mentorstvo</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-8"
          >
            <div className="flex-1 min-[400px]:flex-initial">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                asChild
              >
                <Link href="#contact-form">Pridruži se klubu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 