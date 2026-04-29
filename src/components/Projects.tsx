import { Button } from "@heroui/react";

export default function Projects() {
  // Liste de tes projets
  const projects = [
    {
      title: "Projet Web ISEP",
      description: "Création d'une application web complète pour la gestion des emplois du temps des étudiants. Développé avec React et Node.js.",
      techs: ["React", "Node.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Application Mobile",
      description: "Application mobile de suivi sportif avec géolocalisation et calcul de statistiques en temps réel.",
      techs: ["React Native", "Firebase"],
      link: "#"
    },
    {
      title: "Analyse de Données",
      description: "Projet de Data Science : analyse d'un grand jeu de données pour prédire les tendances de consommation avec Python.",
      techs: ["Python", "Pandas", "Scikit-Learn"],
      link: "#"
    }
  ];

  return (
    /* IMPORTANT : L'id="projets" est la cible pour tes boutons */
    <section id="projets" className="w-full max-w-7xl mx-auto px-8 py-24 bg-gray-50/50 dark:bg-[#0a0a0a]">
      {/* Le grand Titre */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
        Mes <span className="text-blue-600 dark:text-blue-400">Projets</span>
      </h2>

      {/* La grille des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-[#111111] rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            {/* Espace pour l'image */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-6 flex items-center justify-center text-gray-400 dark:text-gray-500">
              [Image du Projet]
            </div>

            {/* Contenu */}
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
              {project.description}
            </p>

            {/* Techs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <Button color="primary" variant="flat" className="w-full font-medium" radius="full">
              Voir le projet
            </Button>
          </div>
        ))}

      </div>
    </section>
  );
}