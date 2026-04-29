import { Button } from "@heroui/react";
import SiteNavbar from "../components/SiteNavbar";
import Image from "next/image";
import myPhoto from "../../public/photo-profile.jpg";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white">
      <SiteNavbar />
      
      {/* --- SECTION PRINCIPALE (HERO) --- */}
      <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-10">
        
        {/* Partie Gauche : Le Texte */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Bonjour, je suis <br/>
            <span className="text-blue-600 dark:text-blue-400">EL AMRANI Karim</span> 👋
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Étudiant à l'<strong>ISEP</strong> passionné par la technologie et le développement. Je conçois des solutions modernes et créatives. Bienvenue sur mon espace !
          </p>
          
          {/* Les boutons d'action */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button color="primary" size="lg" radius="full">
              Voir mes projets
            </Button>
            <Button variant="bordered" size="lg" radius="full">
              Me contacter
            </Button>
          </div>
        </div>

        {/* Partie Droite : La Photo */}
        <div className="flex-1 flex justify-center md:justify-end">
          
          {/* Conteneur rond : Fond blanc forcé et flex-centrage */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-white border-[3px] border-blue-600 dark:border-blue-400 shadow-2xl overflow-hidden flex items-center justify-center z-10">
            
            <Image 
              src={myPhoto} 
              alt="Photo de Karim" 
              width={300} 
              height={300} 
              className="object-cover scale-[0.90] rounded-full" 
              priority 
            />
            
          </div>
        </div>

      </div>

      {/* --- NOUVELLE SECTION : COMPÉTENCES --- */}
      <Skills />

    </main>
  );
}