import Link from "next/link";
import Image from "next/image";
import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = {
  main: [
    { name: "Domov", href: "/" },
    { name: "Pogosta Vprašanja", href: "/pogosto-zastavljena-vprasanja" },
    { name: "Dogodki", href: "/dogodki" },
  ],
  legal: [
    { name: "Politika zasebnosti", href: "/politika-zasebnosti" },
  ],
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/podjetniski.klub.fmf/",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description - Left column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/images/logo_white.png"
                alt="Podjetniški klub FMF Logo"
                width={300}
                height={300}
                className="w-50 h-20 object-contain"
              />
            </div>
            <p className="text-accent-foreground max-w-xs">
              Podjetniški klub FMF je študentska iniciativa, namenjena vsem študentom Fakultete za matematiko in fiziko, ki jih zanima podjetništvo, inovacije in osebni razvoj.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-foreground/70 hover:text-accent-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation and Contact - Middle column */}
          <div className="grid grid-cols-2 gap-8">
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-accent-foreground">
                Navigacija
              </h3>
              <ul className="mt-4 space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-accent-foreground/80 hover:text-accent-foreground relative inline-block
                      after:content-[''] after:absolute after:bg-accent after:h-0.5 
                      after:w-0 after:left-0 after:-bottom-1 after:transition-all after:duration-300
                      hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-accent-foreground">Kontakt</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:nd7855@student.uni-lj.si"
                    className="text-accent-foreground/80 hover:text-accent-foreground flex items-center gap-2"
                  >
                    <MailIcon className="h-4 w-4" />
                    nd7855@student.uni-lj.si
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action - Right column */}
          <div className="flex flex-col justify-start">
            <div className="max-w-xs">
              <h3 className="text-lg font-semibold text-accent-foreground">
                Pridruži se nam
              </h3>
              <p className="mt-2 text-accent-foreground/80 mb-4">
                Postani del naše skupnosti in razvijaj svoje podjetniške veščine.
              </p>
              <Button 
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full"
                asChild
              >
                <Link href="#contact-form">
                  Pridruži se klubu
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2">
              <p className="text-base text-accent-foreground/70">
                &copy; {currentYear} Podjetniški klub FMF. Vse pravice pridržane.
              </p>
              <a 
                href="https://www.nirodigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base hover:underline"
                style={{ color: '#f06543' }}
              >
                Created by NiroDigital
              </a>
            </div>
            <div className="flex space-x-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-accent-foreground/70 hover:text-accent-foreground text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
