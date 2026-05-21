'use client';

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SiteNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    // "sticky top-0 z-50" permet à la barre de rester en haut au scroll
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        
        {/* Logo */}
        <div>
          <p className="font-bold text-lg md:text-xl tracking-tight text-gray-900 dark:text-white">Mon Portfolio</p>
        </div>

        {/* Liens PC */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><a href="#" className="text-blue-600 dark:text-blue-400">Accueil</a></li>
          <li><a href="#parcours" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Parcours</a></li>
          <li><a href="#competences" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Compétences</a></li>
          <li><a href="#projets" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Projets ISEP</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>

        {/* Boutons Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {mounted && (
            <Button 
              isIconOnly 
              variant="flat" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="hidden md:flex text-lg bg-gray-100 dark:bg-gray-800"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </Button>
          )}

          <a href="/CV_Karim_EL_AMRANI.pdf" download="CV_Karim_EL_AMRANI.pdf">
            <Button color="primary" className="font-bold text-xs md:text-sm" size="sm">
              Télécharger CV
            </Button>
          </a>

          {/* Hamburger mobile */}
          <button 
            className="md:hidden text-2xl p-1 text-gray-900 dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 shadow-xl flex flex-col p-6 gap-6 animate-in slide-in-from-top duration-300">
          <a href="#" onClick={closeMenu} className="font-bold text-blue-600 dark:text-blue-400 text-lg">Accueil</a>
          <a href="#parcours" onClick={closeMenu} className="font-medium text-lg text-gray-900 dark:text-white">Parcours</a>
          <a href="#competences" onClick={closeMenu} className="font-medium text-lg text-gray-900 dark:text-white">Compétences</a>
          <a href="#projets" onClick={closeMenu} className="font-medium text-lg text-gray-900 dark:text-white">Projets ISEP</a>
          <a href="#contact" onClick={closeMenu} className="font-medium text-lg text-gray-900 dark:text-white">Contact</a>
          
          <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
          
          {mounted && (
            <button 
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                closeMenu();
              }}
              className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-300"
            >
              <span className="text-2xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
              Changer le thème
            </button>
          )}
        </div>
      )}
    </nav>
  );
}