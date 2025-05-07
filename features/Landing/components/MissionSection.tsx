'use client';

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="w-full bg-secondary relative z-0">
      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] md:h-[500px]"
          >
            <Image
              src="/images/001.jpg"
              alt="Podjetniški klub FMF"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute bottom-4 right-4"
            >
              <Card className="bg-gray-900 text-white p-6 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">
                    2022
                  </div>
                  <div className="text-lg">
                    Leto ustanovitve
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Naša misija: Spodbujati podjetniško razmišljanje
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground"
            >
              Podjetniški klub FMF je študentska iniciativa, namenjena vsem študentom Fakultete za matematiko in fiziko, ki jih zanima podjetništvo, inovacije in osebni razvoj.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground"
            >
              Ustvarjamo okolje, kjer se mladi lahko učijo iz resničnih podjetniških izkušenj, razvijajo svoje ideje in gradijo pomembne povezave. Skozi srečanja z uspešnimi podjetniki, delavnice in mrežna srečanja nudimo priložnosti za osebno in profesionalno rast.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                asChild
              >
                <Link href="#contact-form">Pridruži se klubu</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 