import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card py-12 px-4 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Créé avec <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" /> par Malak Sayadi
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>

          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/malaksayadi", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/malak-sayadi-373295359/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:malaksayadi04@gmail.com", label: "Email" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="rounded-full w-10 h-10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                aria-label={social.label}
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <Button
        onClick={scrollToTop}
        size="icon"
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 gradient-hero border-0 shadow-xl hover:scale-110 transition-all duration-300 glow-primary"
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </Button>
    </footer>
  );
};
