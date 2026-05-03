'use client';

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SiteNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Évite les bugs d'affichage au chargement de la page
  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70">
      
      {/* Logo */}
      <div>
        <p className="font-bold text-xl tracking-tight">Mon Portfolio</p>
      </div>

      {/* Liens */}
      <ul className="hidden sm:flex items-center gap-8 font-medium">
        <li>
          <a href="#" className="text-blue-600 dark:text-blue-400">Accueil</a>
        </li>
         <li>
          <a href="#parcours" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Parcours
          </a>
        </li>
        <li>
          <a href="#competences" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Compétences
          </a>
        </li>
        <li>
          <a href="#projets" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Projets ISEP
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>
        
      </ul>

      {/* Boutons (Dark Mode + CV) */}
      <div className="flex items-center gap-4">
        
        {/* LE NOUVEAU BOUTON THEME */}
        {mounted && (
          <Button 
            isIconOnly 
            variant="flat" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-lg bg-gray-100 dark:bg-gray-800"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </Button>
        )}

        {/* Bouton CV */}
        <a href="/cv-karim.pdf" download="CV_Karim_EL_AMRANI.pdf">
          <Button color="primary">
            Télécharger CV
          </Button>
        </a>
        
      </div>
    </nav>
  );
}