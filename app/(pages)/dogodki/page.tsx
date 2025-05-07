'use client';

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Calendar className="w-20 h-20 mx-auto text-accent" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl font-bold mb-4"
          >
            Dogodki kmalu na voljo
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Trenutno pripravljamo seznam prihajajočih in preteklihdogodkov. Kmalu boste lahko spremljali naše predavanja, delavnice in mrežna srečanja.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
              asChild
            >
              <Link href="/">
                Nazaj na domačo stran
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 