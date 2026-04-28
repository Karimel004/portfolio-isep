import { Button } from "@heroui/react";
import SiteNavbar from "../components/SiteNavbar"; // On importe ta nouvelle barre !

export default function Home() {
  return (
    <main>
      {/* On place la barre de navigation tout en haut de la page */}
      <SiteNavbar />
      
      {/* Le reste de ta page */}
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
        <h1 className="text-4xl font-bold text-center">
          Bienvenue sur mon Portfolio
        </h1>
        <Button color="primary" size="lg">
          Mon premier bouton stylé 🚀
        </Button>
      </div>
    </main>
  );
}