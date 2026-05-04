import { Chip } from "@heroui/react";
import FadeIn from "./FadeIn";

export default function Skills() {
  // On utilise maintenant des objets avec le nom ET le lien direct vers le vrai logo !
  const frontend = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
  ];

  const backend = [
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
  ];

  const tools = [
    { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-8 py-24" id="competences">
      <FadeIn>
        {/* Le grand Titre */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
          Mes <span className="text-blue-600 dark:text-blue-400">Compétences</span>
        </h2>

        {/* La grille avec les 3 catégories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Catégorie 1 : Front-end */}
          <div className="bg-gray-50 dark:bg-[#111111] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              🖥️ Front-end
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontend.map((skill, index) => (
                <Chip key={index} color="primary" variant="flat" size="lg">
                  <div className="flex items-center gap-2">
                    {/* L'image du logo */}
                    <img src={skill.logo} alt={skill.name} className="w-5 h-5 bg-white rounded-full p-[2px] shadow-sm" />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                </Chip>
              ))}
            </div>
          </div>

          {/* Catégorie 2 : Back-end */}
          <div className="bg-gray-50 dark:bg-[#111111] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              ⚙️ Back-end
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {backend.map((skill, index) => (
                <Chip key={index} color="secondary" variant="flat" size="lg">
                  <div className="flex items-center gap-2">
                    <img src={skill.logo} alt={skill.name} className="w-5 h-5 bg-white rounded-full p-[2px] shadow-sm" />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                </Chip>
              ))}
            </div>
          </div>

          {/* Catégorie 3 : Outils */}
          <div className="bg-gray-50 dark:bg-[#111111] rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              🛠️ Outils & Autres
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((skill, index) => (
                <Chip key={index} color="success" variant="flat" size="lg">
                  <div className="flex items-center gap-2">
                    <img src={skill.logo} alt={skill.name} className="w-5 h-5 bg-white rounded-full p-[2px] shadow-sm" />
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                </Chip>
              ))}
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}