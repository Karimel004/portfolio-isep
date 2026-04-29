'use client';

import { Button } from "@heroui/react";

export default function SiteNavbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70">
      
      {/* Ton Logo / Nom à gauche */}
      <div>
        <p className="font-bold text-xl tracking-tight">Mon Portfolio</p>
      </div>

      {/* Les liens au milieu */}
      <ul className="hidden sm:flex items-center gap-8 font-medium">
        <li>
          <a href="#" className="text-blue-600 dark:text-blue-400">Accueil</a>
        </li>
        <li>
          {/* NOUVEAU : Le lien pointe maintenant vers l'ancre #projets */}
          <a href="#projets" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Projets ISEP
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Le bouton HeroUI à droite */}
      <div>
        <Button color="primary">
          Télécharger CV
        </Button>
      </div>
      
    </nav>
  );
}