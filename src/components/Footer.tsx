export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 text-center border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a]">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {currentYear} Karim EL AMRANI. Tous droits réservés.
      </p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
        Fait avec ❤️ pour l'ISEP
      </p>
    </footer>
  );
}