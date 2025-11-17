import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 gradient-hero opacity-20" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-float">
              <img 
                src={profileImg} 
                alt="Malak Sayadi" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Malak Sayadi
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-muted-foreground mb-8"
          >
            Développeuse Mobile & Web | Étudiante en Informatique
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Étudiante polyvalente en informatique avec une solide base en développement web, analyse de données et design graphique. 
            Passionnée par l'application de la créativité et des compétences techniques aux défis du monde réel.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="gradient-hero text-white border-0 hover:scale-105 transition-transform duration-300 glow-primary" asChild
            >
              <a href="/cv/Malak_Sayadi.pdf" 
              download="Malak_Sayadi.pdf"
              target="_blank"
              rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
              </a>
            </Button>
            <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild>
            <a href="mailto:malaksayadi04@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Me Contacter
            </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 justify-center"
          >
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
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
