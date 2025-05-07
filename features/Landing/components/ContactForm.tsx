"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section id="contact-form" className="w-full py-24 relative overflow-hidden">
      {/* Special Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95">
        {/* Animated gradient circles */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Pridruži se nam
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Izpolni obrazec in se pridruži Podjetniškemu klubu FMF. Ostani obveščen o naših dogodkih in aktivnostih.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-accent/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Ime</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Vnesi svoje ime"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-accent/20 focus:border-accent/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Priimek</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Vnesi svoj priimek"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-white/50 border-accent/20 focus:border-accent/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vnesi@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/50 border-accent/20 focus:border-accent/50"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                style={{ borderRadius: '1.5rem' }}
              >
                Pošlji
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 