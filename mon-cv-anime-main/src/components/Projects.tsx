import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Budget Tracker",
    description: "Application web complète de suivi budgétaire avec gestion des utilisateurs, planification, notes personnelles, suivi du bien-être et des objectifs financiers.",
    image: "💰",
    tags: ["Angular", "Java", "SQL", "Authentication"],
    
  },
  {
    title: "Application Flutter Mobile",
    description: "Application mobile cross-platform développée from scratch avec architecture clean, APIs RESTful et authentification sécurisée.",
    image: "📱",
    tags: ["Flutter", "REST API", "Clean Architecture", "State Management"],
    
  },
  {
    title: "Système d'Authentification Avancé",
    description: "Interface de login avancée avec authentification sécurisée et gestion complète des utilisateurs pour application web.",
    image: "🔐",
    tags: ["Angular", "Security", "User Management", "SQL"],
    
  },
  {
    title: "Design de Base de Données",
    description: "Conception et modélisation de schémas de bases de données avec diagrammes pour assurer l'intégrité et le flux des données.",
    image: "🗄️",
    tags: ["SQL", "Database Design", "Data Modeling", "Architecture"],
    
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Projets Réalisés
          </h2>
          <div className="w-20 h-1 gradient-hero mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col gradient-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105">
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary border-0">
                        {tag}
                      </Badge>
                    ))}
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
