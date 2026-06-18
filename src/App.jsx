import { Hero } from "@/sections/Hero";
import { Sobre_mi } from "@/sections/Sobre_mi";
import { Proyectos } from "@/sections/Proyectos";
import { Experiencia } from "@/sections/Experiencia";
import { Contacto } from "@/sections/Contacto";
import { Navbar } from "@/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Sobre_mi />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
