import { Hero } from "@/sections/Hero";
import { sobre_mi } from "@/sections/Sobre_mi";
import { proyectos } from "@/sections/Proyectos";
import { experiencia } from "@/sections/Experiencia";
import { contacto } from "@/sections/Contacto";
import { Navbar } from "@/layout/Navbar";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <sobre_mi />
        <proyectos />
        <experiencia />
        <contacto />
      </main>
    </div>
  );
}

export default App;
