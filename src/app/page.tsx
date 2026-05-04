import { Button } from "@heroui/react";
import SiteNavbar from "../components/SiteNavbar";
import Image from "next/image";
import myPhoto from "../../public/photo-profile.jpg";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Link from "next/link"; 
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white overflow-x-hidden">
      <SiteNavbar />
      
      {/* --- SECTION PRINCIPALE (HERO) --- */}
      {/* flex-col-reverse met la photo EN HAUT sur mobile ! */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 md:mt-10">
        
        {/* Partie Gauche : Le Texte & Infos */}
        <div className="flex-1 space-y-8 w-full">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-center md:text-left">
              Bonjour, je suis <br className="hidden md:block"/>
              <span className="text-blue-600 dark:text-blue-400">Karim EL AMRANI</span> 👋
            </h1>
            <p className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400 text-center md:text-left">
              Étudiant en 2ème année cycle ingénieur à l'ISEP Paris
            </p>
          </div>
          
          {/* Bloc Infos Personnelles & Objectif */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 bg-gray-50 dark:bg-[#111111] p-6 rounded-3xl border border-gray-100 dark:border-gray-800">
            <div className="space-y-1 md:space-y-2">
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 font-bold">📍 Localisation</p>
              <p className="font-semibold text-sm md:text-base">Paris, France (21 ans)</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-xs md:text-sm uppercase tracking-wider text-gray-500 font-bold">🎓 Parcours</p>
              <p className="font-semibold text-sm md:text-base">Ex-CPGE Oujda → ISEP</p>
            </div>
            <div className="md:col-span-2 space-y-1 md:space-y-2 pt-2 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs md:text-sm uppercase tracking-wider text-blue-500 font-bold">🎯 Objectif Alternance</p>
              <p className="text-base md:text-lg font-bold italic">
                Recherche une alternance de 12 mois en Software Engineering (Sept. 2026)
              </p>
            </div>
          </div>

          {/* Domaines d'intérêt */}
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            {["Développement Web", "Data / IA", "Cybersécurité"].map((item) => (
              <span key={item} className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs md:text-sm font-medium shadow-sm">
                {item}
              </span>
            ))}
          </div>
          
          {/* Les boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <Link href="#projets" className="w-full sm:w-auto">
              <Button color="primary" size="lg" radius="full" className="font-bold w-full">
                Voir mes projets
              </Button>
            </Link>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button variant="bordered" size="lg" radius="full" className="font-bold w-full">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>

        {/* Partie Droite : La Photo */}
        <div className="flex-1 flex justify-center md:justify-end w-full mb-6 md:mb-0">
          {/* L'image est plus petite sur téléphone (w-48 h-48) et grande sur PC (w-80 h-80) */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full bg-white border-[3px] border-blue-600 dark:border-blue-400 shadow-2xl overflow-hidden flex items-center justify-center z-10">
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

      {/* --- SECTIONS SUIVANTES --- */}
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  );
}