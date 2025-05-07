"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "DOMOV", href: "/" },
  { name: "BLOG", href: "/blog" },
  { name: "DOGODKI", href: "/dogodki" },
  { name: "POGOSTA VPRAŠANJA", href: "/pogosto-zastavljena-vprasanja" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  // Close mobile menu on pathname change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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

    // Close mobile menu
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 top-0 p-4">
      <div
        className={`neo-brutalist-container ${
          scrolled ? "neo-brutalist-card bg-background" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 no-underline">
            <div className="flex items-center">
              <span className="text-2xl font-black uppercase">
                <span className="text-primary">Podjetniški</span> Klub
              </span>
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
            <button onClick={scrollToContact} className="neo-brutalist-btn">
              PRIDRUŽI SE
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden neo-brutalist-btn-secondary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full px-4 pt-2">
          <div className="neo-brutalist-card p-4 bg-background">
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
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button
                  onClick={scrollToContact}
                  className="neo-brutalist-btn no-underline w-full text-center block"
                >
                  PRIDRUŽI SE
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
