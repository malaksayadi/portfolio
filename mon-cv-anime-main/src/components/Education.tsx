import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    degree: "Licence en Informatique",
    school: "ISITCOM - Institut Supérieur d'Informatique et des Technologies de Communication de Sousse",
    period: "Sept 2023 - Juin 2026 (Prévu)",
    description: "Formation complète en informatique et technologies de communication avec focus sur le développement web et mobile.",
    highlights: [
      "Membre active du conseil exécutif de l'IGC (ISITCOM Google Club)",
      "Responsable Communication du club",
      "Projets pratiques en développement web et mobile",
    ],
  },
  {
    degree: "Baccalauréat Scientifique",
    school: "Lycée Les Elites, Sahloul, Tunisie",
    period: "Sept 2019 - Juin 2023",
    description: "Baccalauréat scientifique avec concentration en mathématiques et sciences.",
    highlights: [
      "Formation solide en sciences",
      "Préparation aux études supérieures en informatique",
      "Excellence académique",
    ],
  },
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4" ref={ref}>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Formation Académique
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {edu.degree}
                        </CardTitle>
                      </div>
                      <div className="text-lg font-semibold text-muted-foreground mb-2">
                        {edu.school}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{edu.description}</p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">▪</span>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
