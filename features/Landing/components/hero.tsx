"use client";

import Link from "next/link";
import Image from "next/image"; // Ensure Image is imported
import { Button } from "@/components/ui/button"; // Assuming a generic Button might be needed, or keep specific ones
import { ButtonBlack } from "@/components/ui/button-black";
import { motion } from "framer-motion";
import { Users, Lightbulb, Network } from "lucide-react"; // Updated icons

export default function Hero() {
  return (
    <>
      <section className="w-full py-4 sm:py-16 bg-background sm:mt-16 mt-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                  Podjetniški Klub FMF: Zgradi Svojo Prihodnost!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Prostor za študente FMF, ki jih zanima podjetništvo, inovacije in osebni razvoj. Povezujemo ambiciozne mlade in omogočamo učenje iz resničnih podjetniških izkušenj.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col gap-2 min-[400px]:flex-row"
              >
                <div className="flex-1 min-[400px]:flex-initial">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                  >
                    <Link href="/#contact-form">Pridruži se Klubu</Link>
                  </Button>
                </div>
                <div className="flex-1 min-[400px]:flex-initial">
                  <Button 
                    asChild 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                  >
                    <Link href="/dogodki">Naši Dogodki</Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              {/* Placeholder for a new relevant image */}
              
              <div className="relative w-full h-[250px] md:h-[300px] lg:h-[400px]">
                <Image
                  src="/images/002.jpg" // Updated image src
                  alt="Podjetniški klub FMF - Srečanje članov"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                  unoptimized
                />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full py-4 sm:py-12 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-row items-start space-x-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-xl font-semibold">Srečanja s Podjetniki</h3>
                <p className="text-muted-foreground">
                  Uči se iz prve roke od uspešnih strokovnjakov in podjetnikov.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-row items-start space-x-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shrink-0">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-xl font-semibold">
                  Razvijaj Ideje & Veščine
                </h3>
                <p className="text-muted-foreground">
                  Spodbujamo podjetniško miselnost, kreativnost in krepimo mehke veščine.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-row items-start space-x-4"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shrink-0">
                <Network className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-left">
                <h3 className="text-xl font-semibold">Mreži in Rasti</h3>
                <p className="text-muted-foreground">
                  Postani del aktivne skupnosti, mreži s somišljeniki in išči nove priložnosti.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
