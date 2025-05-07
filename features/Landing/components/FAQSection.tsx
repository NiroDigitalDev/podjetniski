'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQSection() {
  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Pogosta vprašanja</h2>
              <p className="text-lg text-muted-foreground">
                Odgovorili smo na najpogostejša vprašanja o našem klubu. Če vam kaj ni jasno, nas ne oklevajte kontaktirati.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mreženje in povezovanje</h3>
                  <p className="text-muted-foreground">Povezujemo študente z uspešnimi podjetniki</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Razvoj idej</h3>
                  <p className="text-muted-foreground">Pomagamo pri razvoju in uresničevanju idej</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Praktično znanje</h3>
                  <p className="text-muted-foreground">Dobite vpogled v prakso podjetništva</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                  asChild
                >
                  <Link href="/#contact-form">
                    Več vprašanj
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-medium">Kdo se lahko pridruži klubu?</span>
                </AccordionTrigger>
                <AccordionContent>
                  Klub je odprt za vse študente Fakultete za matematiko in fiziko (FMF) ter študente drugih fakultet, ki jih zanima podjetništvo. Pridružiti se lahko tudi diplomanti in mladi podjetniki, ki želijo deliti svoje izkušnje.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-medium">Katere aktivnosti organizirate?</span>
                </AccordionTrigger>
                <AccordionContent>
                  Organiziramo različne dogodke, kot so predavanja uspešnih podjetnikov, delavnice o podjetništvu, mrežna srečanja, tekmovanja za najboljše poslovne ideje in obiske podjetij. Prav tako nudimo mentorstvo in podporo pri razvoju poslovnih idej.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-medium">Ali je članstvo plačljivo?</span>
                </AccordionTrigger>
                <AccordionContent>
                  Članstvo v klubu je brezplačno za vse študente FMF. Za nekatere posebne dogodke ali delavnice lahko zaračunamo simbolično vstopnino, ki pokrije stroške organizacije.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-medium">Kako se lahko aktivno vključim?</span>
                </AccordionTrigger>
                <AccordionContent>
                  Lahko se vključite na več načinov: sodelovanje pri organizaciji dogodkov, predlaganje novih idej, mentorstvo mlajšim članom, sodelovanje pri razvoju poslovnih idej ali kot predavatelj na naših dogodkih. Vsi člani so dobrodošli k aktivnemu sodelovanju.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-medium">Ali nudite podporo pri uresničevanju poslovnih idej?</span>
                </AccordionTrigger>
                <AccordionContent>
                  Da, nudimo podporo pri razvoju poslovnih idej skozi mentorstvo, delavnice, mrežne povezave in priložnosti za predstavitev idej potencialnim investitorjem. Prav tako organiziramo tekmovanja, kjer lahko preizkusite svoje ideje in dobite povratne informacije.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b">
                <AccordionTrigger className="hover:no-underline">
                  <span className="text-lg font-medium">Kako se lahko pridružim klubu?</span>
                </AccordionTrigger>
                <AccordionContent>
                  Pridružiti se lahko tako, da izpolnite prijavni obrazec na naši spletni strani ali se udeležite katerega od naših dogodkov in se tam prijavite. Po prijavi vas bomo obveščali o vseh prihajajočih aktivnostih in priložnostih za sodelovanje.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 