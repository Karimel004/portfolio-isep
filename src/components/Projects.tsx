import { Chip, Button } from "@heroui/react";
import FadeIn from "./FadeIn";

export default function Projects() {
  const projects = [
    {
      title: "QuickSeat",
      role: "Développeur Full Stack",
      date: "Jan 2026 – Juin 2026",
      description: "Plateforme de Ticketing et Gestion d'Événements avec tunnel d'achat complet.",
      features: [
        "Gestion des stocks en temps réel (catégories VIP, Standard) et flux de paiement.",
        "Génération de billets électroniques et QR codes pour le check-in.",
        "Dashboard organisateur (architecture MVC) : suivi des ventes et avis clients.",
        "Sécurité & Authentification : JWT/Tokens et restriction d'accès par rôles."
      ],
      techs: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
        { name: "HeroUI", emoji: "🎨" },
        { name: "API Paiement", emoji: "💳" }
      ],
      link: "#",
      color: "bg-indigo-500"
    },
    {
      title: "EduFlow",
      role: "Développeur Frontend React",
      date: "Février 2026 – Juin 2026",
      description: "Plateforme de Gestion Scolaire & Accompagnement Éducatif.",
      features: [
        "Data Visualisation (Recharts) : interface de suivi avec graphiques interactifs des variables comportementales.",
        "Gestion des devoirs : système de sous-tâches, cycle de vie (validation, report) et feedback visuel de complétion.",
        "Performance & Robustesse : requêtes asynchrones (Promise.all), prévention des fuites de mémoire et UI skeletons.",
        "Qualité & Git : intégration stricte d'un Design System et workflow collaboratif (Branching, PRs)."
      ],
      techs: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Recharts", emoji: "📊" },
        { name: "Axios/REST API", emoji: "🔗" }
      ],
      link: "#",
      color: "bg-teal-500"
    },
    {
      title: "Tailored Social Network",
      role: "Software Engineer",
      date: "Nov 2025 – Jan 2026",
      description: "Application de communication et réseau social sur mesure.",
      features: [
        "Système d'amis & API relationnelle complexe avec sync en temps réel.",
        "Messagerie instantanée développée en TypeScript (latence < 150ms).",
        "Optimisation Laravel Eloquent : temps de chargement divisé par 2.",
        "Workflow Git rigoureux (25+ commits) et séparation claire Backend/UI."
      ],
      techs: [
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      link: "#",
      color: "bg-blue-600"
    },
    {
      title: "Resto Gusto",
      role: "Développeur Full Stack & IoT",
      date: "Mai 2025 – Juil 2025",
      description: "Système complet de gestion de restaurant couplé à des capteurs IoT.",
      features: [
        "Dashboard temps réel pour capteurs avec envoi de SMS d'alerte automatiques.",
        "Ingénierie matérielle (C) : traitement de trames 5 octets & checksum.",
        "Tunnel client : réservation de tables, menu digital et blog culinaire."
      ],
      techs: [
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "C (IoT)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "HTML/CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" }
      ],
      link: "#",
      color: "bg-emerald-600"
    },
    {
      title: "Analyse Data Électrique",
      role: "Data Analyst",
      date: "Jan 2025 – Avr 2025",
      description: "Analyse de la consommation de 3 réseaux de distribution (Tetuan, Maroc).",
      features: [
        "Analyse de 4 variables clés (Temp, Humidité, Vent, Conso KW).",
        "Réduction de dimension (PCA), standardisation et matrice de covariance.",
        "Interprétation via cercle de corrélation et PVE cumulé."
      ],
      techs: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Pandas", emoji: "🐼" },
        { name: "Scikit-learn", emoji: "🤖" },
        { name: "Matplotlib", emoji: "📊" },
        { name: "SQL", emoji: "🗄️" }
      ],
      link: "#",
      color: "bg-purple-600"
    },
    {
      title: "PetWay",
      role: "Développeur Full Stack",
      date: "Sep 2024 – Fév 2025",
      description: "Plateforme de parrainage d'animaux utilisée par 50+ utilisateurs en test.",
      features: [
        "Algorithme de tarification dynamique basé sur 4 variables métiers.",
        "Système d'avis et mise en favoris ultra-rapide (réponse < 200ms).",
        "Back-Office CRUD gérant plus de 300 entrées (profils/réservations).",
        "Qualité logicielle : 70% de couverture en tests unitaires et CI/CD."
      ],
      techs: [
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" }
      ],
      link: "#",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="projets" className="w-full max-w-7xl mx-auto px-8 py-24 bg-gray-50/50 dark:bg-[#0a0a0a]">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Mes <span className="text-blue-600 dark:text-blue-400">Projets ISEP</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets académiques et techniques, alliant Software Engineering, IoT et Data Analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-[#111111] rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className={`h-32 w-full ${project.color} bg-opacity-10 dark:bg-opacity-20 flex flex-col items-center justify-center border-b border-gray-100 dark:border-gray-800 group-hover:bg-opacity-20 transition-all`}>
                <span className="text-4xl">💻</span>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {project.role} • {project.date}
                  </p>
                </div>

                <p className="text-gray-900 dark:text-gray-100 font-medium text-sm mb-4">
                  {project.description}
                </p>

                <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-8 flex-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="leading-relaxed">{feature}</li>
                  ))}
                </ul>

                {/* Affichage des technologies avec leurs logos ou émojis */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techs.map((tech, i) => (
                    <Chip key={i} size="sm" variant="flat" className="bg-gray-100 dark:bg-gray-800">
                      <div className="flex items-center gap-1.5">
                        {tech.logo ? (
                          <img src={tech.logo} alt={tech.name} className="w-4 h-4 bg-white rounded-full p-[1px] shadow-sm" />
                        ) : (
                          <span>{tech.emoji}</span>
                        )}
                        <span className="font-medium">{tech.name}</span>
                      </div>
                    </Chip>
                  ))}
                </div>

                <Button 
                  as="a" 
                  href={project.link}
                  target="_blank"
                  color="default" 
                  variant="bordered" 
                  className="w-full font-bold group-hover:border-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  Voir sur GitHub / Détails 🐙
                </Button>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}