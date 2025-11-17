import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Globe, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { icon: Code2, label: "Années d'études", value: "3+", color: "text-primary" },
  { icon: Globe, label: "Projets réalisés", value: "10+", color: "text-secondary" },
  { icon: Users, label: "Langues parlées", value: "4", color: "text-primary" },
  { icon: Lightbulb, label: "Technologies maîtrisées", value: "10+", color: "text-secondary" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            À Propos de Moi
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <Card className="gradient-card border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                Étudiante polyvalente en informatique avec une solide base en développement web, analyse de données et design graphique. 
                Expérimentée en leadership et collaboration grâce à des rôles tels que membre du conseil exécutif du club universitaire IGC. 
                Reconnue pour mon excellente communication et mon état d'esprit proactif dans les projets techniques et les contextes d'équipe. 
                Passionnée par l'application de la créativité et des compétences techniques aux défis du monde réel, 
                je recherche actuellement un stage pour contribuer à des équipes de développement innovantes et évoluer professionnellement.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="group hover:scale-105 transition-all duration-300 gradient-card border-0 shadow-lg hover:shadow-2xl cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
