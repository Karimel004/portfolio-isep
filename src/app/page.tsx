import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-24">
      <h1 className="text-4xl font-bold text-center">
        Bienvenue sur mon Portfolio
      </h1>
      
      {/* On utilise les vraies propriétés de HeroUI ! */}
      <Button color="primary" size="lg">
        Mon premier bouton stylé 🚀
      </Button>
    </div>
  );
}