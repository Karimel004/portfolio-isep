import { Chip } from "@heroui/react";
import FadeIn from "./FadeIn";

export default function Skills() {
  // On a ajouté les petits "logos" (émojis) juste à côté du nom de chaque compétence !
  const frontend = ["🌐 HTML5", "🎨 CSS3", "⚛️ React.js", "🖤 Next.js", "🌊 Tailwind CSS"];
  const backend = ["🍃 Node.js", "🐍 Python", "☕ Java", "🗄️ SQL", "⚙️ C++"];
  const tools = ["🐙 Git & GitHub", "💻 VS Code", "🖌️ Figma", "🐧 Linux"];

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
                  {skill}
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
                  {skill}
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
                  {skill}
                </Chip>
              ))}
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  );
}