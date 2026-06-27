import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Codigo limpio",
    description: "Escribo codigo mantenible y escalable",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Enfocado en la optimización de procesos y flujos de trabajo",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Trabajo en equipo",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Siempre a la vanguardia y trabajando con nuevas tecnologias",
  },
];

export const Sobre_mi = () => {
  return (
    <section id="Sobre_mi" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 reñative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="aniamte-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Sobre Mi
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Armando el Futuro,
              <span className="font-serif italic font-normal text-white">
                {" "}
                Un componente a la vez.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in aniamtion-delay-200">
              <p>
                Soy un ingeniero en informática apasionado por el desarrollo de
                software y el análisis de datos, con experiencia en la creación
                de productos digitales que generan un impacto real. Mi camino
                comenzó con la curiosidad por resolver problemas complejos en la
                web y ha evolucionado hacia el dominio del desarrollo Full Stack
                y la inteligencia de negocios.
              </p>
              <p>
                Me especializo en tecnologías como SQL, Python y Power BI, así
                como en el diseño de bases de datos y la creación de
                arquitecturas limpias y eficientes. Mi enfoque combina la
                excelencia técnica en la ingeniería de software con la habilidad
                para transformar datos crudos en hallazgos estratégicos y
                decisiones de negocio.
              </p>
              <p>
                Cuando no estoy escribiendo código o analizando métricas, me
                encontrarás explorando nuevas tecnologías, enfrentando desafíos
                lógicos que impulsen mi crecimiento profesional y buscando
                soluciones innovadoras para optimizar procesos actuales.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Mi misión es crear soluciones digitales que no solo sean
                funcionales, sino estratégicas — construyendo software robusto
                que a los desarrolladores les encante mantener y transformando
                datos en información valiosa que impulse el crecimiento del
                negocio."
              </p>
            </div>
          </div>
          {/* Rigth Column - highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
