import FadeIn from "./FadeIn";

export default function Experience() {
  // Voici ta liste d'expériences et de formations
  const experiences = [
    {
      year: "2024 - 2027",
      title: "Cycle Ingénieur en Informatique",
      company: "ISEP - École d'Ingénieurs du Numérique (Paris)",
      description: "Spécialisation en Ingénierie Logicielle (Software Engineering). Préparation d'un diplôme d'ingénieur reconnu par la CTI.",
      icon: "🎓",
      color: "bg-blue-500"
    },
    {
      year: "2022 - 2024",
      title: "Classes Préparatoires aux Grandes Écoles (CPGE)",
      company: "Lycée Omar Ibn Abdelaziz (Oujda, Maroc)",
      description: "Filière technologie et sciences industrielles (TSI). Formation scientifique intensive et exigeante avec une forte composante en mathématiques, physique et sciences de l'ingénieur.",
      icon: "📚",
      color: "bg-purple-500"
    },
    {
      year: "2024 - Présent",
      title: "Projets Informatiques & Vie Étudiante",
      company: "ISEP Paris",
      description: "Développement de divers projets académiques et personnels (Web, Data, Cybersécurité). Implication dans la vie associative de l'école.",
      icon: "💻",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="parcours" className="w-full max-w-4xl mx-auto px-8 py-24 scroll-mt-20">
      <FadeIn>
        {/* Le grand Titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Mon <span className="text-blue-600 dark:text-blue-400">Parcours</span>
        </h2>
      </FadeIn>

      {/* La ligne verticale (Timeline) */}
      <div className="relative border-l-4 border-gray-200 dark:border-gray-800 ml-4 md:ml-8">
        {experiences.map((exp, index) => (
          <FadeIn key={index}>
            <div className="mb-12 ml-8 md:ml-12 relative group">
              
              {/* Le point / L'icône sur la ligne */}
              <span className={`absolute -left-[42px] md:-left-[58px] flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full ring-4 ring-white dark:ring-[#0a0a0a] ${exp.color} text-white text-xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {exp.icon}
              </span>

              {/* La Carte de contenu */}
              <div className="bg-gray-50 dark:bg-[#111111] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <span className="text-sm font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full w-fit whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}