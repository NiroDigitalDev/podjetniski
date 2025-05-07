'use client';

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Niti na spletu nisem našel tako ugodne ponudbe. Zadevo ste rešili v pol ure in brez vas bi še vedno plačeval več. Še enkrat hvala.",
    author: "Samo Rošer",
    location: "Zgornja Gorica"
  },
  {
    text: "Super hitro in profesionalno. Prihranil sem preko 40€ na mesec. Priporočam vsakomur, ki želi prihraniti..",
    author: "Marko Novak",
    location: "Ljubljana"
  },
  {
    text: "Najboljše kar sem naredil za svoje telekomunikacijske stroške. Enostavno, hitro in brez skrbi. Hvala za pomoč!",
    author: "Ana Kovač",
    location: "Maribor"
  },
  {
    text: "Odlična storitev! Prihranil sem veliko časa in denarja. Strokovna ekipa je zelo prijazen in odziven. Priporočam!",
    author: "Luka Horvat",
    location: "Celje"
  },
  {
    text: "Neverjetno enostavno in učinkovito. V nekaj minutah sem dobil najboljšo ponudbo za moje potrebe. Hvala za profesionalnost!",
    author: "Nina Zupan",
    location: "Koper"
  },
  {
    text: "Najboljša odločitev za moje telekomunikacijske storitve. Prihranil sem preko 80€ mesečno. Resnično priporočam!",
    author: "Rok Krajnc",
    location: "Nova Gorica"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full blur-3xl transform -rotate-45" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12 relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Quote className="absolute -top-8 left-0 w-16 h-16 text-foreground/50 md:-top-12 md:-left-12 md:w-24 md:h-24 md:text-foreground" />
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-4">Kaj pravijo naše stranke?</h2>
          <p className="text-lg text-white">
            Preverite, kaj pravijo strankine, ki so že našle najboljšo ponudbo z nami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">
              Več kot 1000+ strank je že našlo najboljšo ponudbo
            </h2>
            <p className="text-lg text-white/90">
              S pomočjo naše strokovne ekipe smo že pomagali več kot 1000 strankam najti najboljšo telekomunikacijsko ponudbo. Naša storitev je enostavna, hitra in učinkovita - pomagamo vam prihraniti čas in denar pri iskanju najboljše ponudbe za vaše potrebe.
            </p>
            <p className="text-lg text-white/90">
              Ne glede na to, ali potrebujete mobilno storitev, internet ali TV, smo tukaj, da vam pomagamo najti najboljšo možnost na trgu. Pustite nam, da pregledamo celoten trg in vam predstavimo najboljšo ponudbo.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[400px] w-full"
          >
            <Image
              src="/images/testimonials.webp"
              alt="Več kot 1000 zadovoljnih strank"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative md:px-16"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 md:pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-secondary/10 backdrop-blur-sm border-0 p-6 hover:bg-secondary/20 transition-colors duration-300 h-[300px] flex flex-col">
                      <div className="space-y-4 flex-1 flex flex-col">
                        <p className="text-white text-lg leading-relaxed flex-1">
                          "{testimonial.text}"
                        </p>
                        <div className="pt-4 border-t border-white/10 mt-auto">
                          <p className="text-white font-semibold">{testimonial.author}</p>
                          <p className="text-background text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20" />
            <CarouselNext className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white border-white/20" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
} 