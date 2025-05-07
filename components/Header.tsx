"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
// Import Sheet components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react"; // Import Menu icon

const navigation = [
  { name: "Domov", href: "/" },
  { name: "Pogosta vprašanja", href: "/pogosto-zastavljena-vprasanja" },
  { name: "Dogodki", href: "/dogodki" },
];

export default function Header() {
  // Removed mobileMenuOpen state
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we're scrolling up or down
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Add threshold
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up or near top
        setVisible(true);
      }

      // Set scrolled state for background change
      setScrolled(currentScrollY > 10);

      // Update the last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true }); // Use passive listener

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Removed useEffect for closing mobile menu on pathname change, Sheet handles its own state

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        pt-4 // Padding at the top to "float" the content below
      `}
    >
      <div
        className={`
          max-w-5xl mx-auto
          bg-border
          ${scrolled ? "shadow-lg" : "shadow-none"}
          rounded-full
          transition-all duration-300
          flex items-center
        `}
        style={{ height: "3.5rem" }} // Reduced height for more pill-like appearance
      >
        <div className="flex items-center justify-between w-full px-6 sm:px-8"> {/* Increased horizontal padding */}
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo_white.png"
              alt="Podjetniški Klub FMF Logo"
              width={130} // Slightly smaller logo
              height={43}
              className="h-8 object-contain" // Reduced height
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  font-medium text-secondary transition-colors relative text-sm
                  hover:text-secondary/90
                  ${
                    pathname === item.href
                      ? "text-secondary after:w-full after:bg-secondary"
                      : "hover:after:w-full hover:after:bg-secondary/90"
                  }
                  after:content-[''] after:absolute after:h-0.5
                  after:w-0 after:left-0 after:-bottom-1 after:transition-all after:duration-300
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Trigger */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block">
              <Button 
                size="sm" // Changed to smaller size
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full" 
                asChild
              >
                <Link href="/#contact-form">
                  Pridruži se klubu
                </Link>
              </Button>
            </div>

            {/* Mobile menu button using Sheet */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Toggle menu"
                    className="p-2 rounded-full text-secondary hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  >
                    <Menu className="h-5 w-5" aria-hidden="true" /> {/* Slightly smaller icon */}
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] bg-secondary-foreground p-6 flex flex-col"
                >
                  <SheetHeader className="mb-6 border-b border-secondary/20 pb-4">
                    <SheetTitle className="text-left">
                      <Link href="/" className="flex items-center">
                        <Image
                          src="/images/logo_white.png"
                          alt="Podjetniški Klub FMF Logo"
                          width={140}
                          height={47}
                          className="h-10 object-contain"
                        />
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col space-y-4 flex-grow">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className={`font-medium px-3 py-2 rounded text-secondary text-base ${
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-secondary/5 hover:text-primary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto pt-6 border-t border-secondary/20">
                    <SheetClose asChild>
                      <Button 
                        className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                        asChild
                      >
                        <Link href="/#contact-form">
                          Pridruži se klubu
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
