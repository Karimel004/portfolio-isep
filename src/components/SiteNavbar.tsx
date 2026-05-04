'use client';

import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function SiteNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Gère l'ouverture du menu mobile

  // Évite les bugs d'affichage au chargement de la page
  useEffect(() => setMounted(true), []);

  // Fonction pour fermer le menu après un clic sur mobile
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80">
      
      {/* Conteneur de la barre visible */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 py-4 w-full">
        
        {/* Logo */}
        <div>
          <p className="font-bold text-lg md:text-xl tracking-tight">Mon Portfolio</p>
        </div>

        {/* Liens (Cachés sur mobile, visibles sur PC) */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><a href="#" className="text-blue-600 dark:text-blue-400">Accueil</a></li>
          <li><a href="#parcours" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Parcours</a></li>
          <li><a href="#competences" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Compétences</a></li>
          <li><a href="#projets" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Projets ISEP</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">Contact</a></li>
        </ul>

        {/* Boutons Actions */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Bouton Dark Mode (Uniquement sur PC, sur mobile il est dans le menu) */}
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

          {/* Bouton CV (Toujours visible ! J'ai juste réduit un peu le texte sur mobile) */}
          <a href="/cv-karim.pdf" download="CV_Karim_EL_AMRANI.pdf">
            <Button color="primary" className="font-bold text-xs md:text-sm px-3 md:px-4" size="sm">
              Télécharger CV
            </Button>
          </a>

          {/* Bouton Hamburger (Visible uniquement sur Mobile) */}
          <button 
            className="md:hidden text-2xl p-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {/* --- MENU DÉROULANT MOBILE (Le Hamburger) --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 shadow-xl flex flex-col p-6 gap-6">
          <a href="#" onClick={closeMenu} className="font-bold text-blue-600 dark:text-blue-400 text-lg">Accueil</a>
          <a href="#parcours" onClick={closeMenu} className="font-medium text-lg">Parcours</a>
          <a href="#competences" onClick={closeMenu} className="font-medium text-lg">Compétences</a>
          <a href="#projets" onClick={closeMenu} className="font-medium text-lg">Projets ISEP</a>
          <a href="#contact" onClick={closeMenu} className="font-medium text-lg">Contact</a>
          
          <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
          
          {/* Bouton Thème intégré dans le menu mobile */}
          {mounted && (
            <button 
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
                closeMenu();
              }}
              className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-300 w-full text-left"
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