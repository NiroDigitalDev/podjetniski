import Link from "next/link";
import { Instagram, Mail, } from "lucide-react";

const navigation = {
  main: [
    { name: "DOMOV", href: "/" },
    { name: "BLOG", href: "/blog" },
    { name: "DOGODKI", href: "/events" },
    
  ],
  legal: [{ name: "POLITIKA ZASEBNOSTI", href: "/politika-zasebnosti" }],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/podjetniski.klub.fmf/",
      icon: Instagram,
    },
   
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16 border-t-[var(--neo-border-width)] border-black">
      <div className="neo-brutalist-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-black">
                <span className="text-primary">PODJETNIŠKI</span> <br />
                KLUB FMF
              </h2>
            </div>
            <p className="mb-6">
              Študentska iniciativa, namenjena vsem študentom Fakultete za
              matematiko in fiziko, ki jih zanima podjetništvo, inovacije in
              osebni razvoj.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">NAVIGACIJA</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-foreground font-bold hover:text-primary no-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">KONTAKT</h3>
            <div className="neo-brutalist-card p-4 mb-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6" />
                <div>
                  <h4 className="font-bold">EMAIL</h4>
                  <a
                    href="mailto:nd7855@student.uni-lj.si"
                    className="text-primary font-bold no-underline hover:underline"
                  >
                    nd7855@student.uni-lj.si
                  </a>
                </div>
              </div>
            </div>
            <div className="neo-brutalist-card p-4">
              <div>
                <h4 className="font-bold mb-2">LOKACIJA</h4>
                <p>
                  Fakulteta za matematiko in fiziko
                  <br />
                  Jadranska 19
                  <br />
                  1000 Ljubljana
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 uppercase">
              SOCIALNA OMREŽJA
            </h3>
            
            <div className="flex items-center gap-4 mt-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-brutalist-card p-2 hover:bg-primary hover:text-primary-foreground"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t-2 border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="font-bold">
              © {currentYear} PODJETNIŠKI KLUB FMF. VSE PRAVICE PRIDRŽANE.
            </p>
            <a
              href="https://www.nirodigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold hover:underline"
            >
              CREATED BY NIRODIGITAL
            </a>
          </div>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground font-bold hover:text-primary no-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
