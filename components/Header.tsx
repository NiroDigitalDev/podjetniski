"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "DOMOV", href: "/" },
  { name: "BLOG", href: "/blog" },
  { name: "DOGODKI", href: "/dogodki" },
  { name: "POGOSTA VPRAŠANJA", href: "/pogosto-zastavljena-vprasanja" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to contact section
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    // If not on home page, navigate to home first
    if (pathname !== "/") {
      window.location.href = "/#contact";
      return;
    }

    // Find the contact section and scroll to it
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // Close the sheet if it's open
    setSheetOpen(false);
  };

  return (
    <header className="fixed w-full z-50 top-0 p-2 md:p-4">
      <div
        className={`neo-brutalist-container ${
          scrolled ? "neo-brutalist-card bg-background" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-2 md:py-4 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 no-underline">
            <div className="flex items-center">
              <Image 
                src="/images/logo_white.png" 
                alt="Podjetniški Klub Logo" 
                width={220} 
                height={48} 
                className="h-10 md:h-14 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-foreground font-bold no-underline hover:text-primary
                  ${pathname === item.href ? "text-primary" : ""}
                `}
              >
                {item.name}
              </Link>
            ))}
            <button onClick={scrollToContact} className="neo-brutalist-btn cursor-pointer hover:cursor-pointer">
              PRIDRUŽI SE 
            </button>
          </nav>

          {/* Mobile menu button */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="md:hidden neo-brutalist-btn-secondary p-2"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="neo-brutalist-card border-l-[2px] border-black p-0 w-[300px] max-w-full">
              <div className="p-6">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        py-2 px-4 font-bold border-b border-border last:border-0
                        ${
                          pathname === item.href
                            ? "text-primary"
                            : "text-foreground"
                        }
                        hover:text-primary no-underline
                      `}
                      onClick={() => setSheetOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <button
                      onClick={scrollToContact}
                      className="neo-brutalist-btn no-underline w-full text-center block cursor-pointer hover:cursor-pointer"
                    >
                      PRIDRUŽI SE
                    </button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
