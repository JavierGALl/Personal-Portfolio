const projects = [
  {
    title: "Dashboard",
    description: "dashboard financiero",
    image: "",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "Ecommerce",
    description: "dashboard financiero",
    image: "",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "Dashboard 2",
    description: "dashboard financiero",
    image: "",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
];

export const Proyectos = () => {
  return (
    <section id="Proyectos" className="py-32 relative overflow-hidden">
      {/* bg Glows*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/*Section Header*/}
        <div className="text-center mx-auto mac-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Trabajos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Proyectos que
            <span className="font-serif italic font-normal text-white">
              {" "}
              generan impacto
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Una selección de mis proyectos recientes, que abarcan desde
            aplicaciones web full-stack hasta soluciones analíticas diseñadas
            para transformar datos en decisiones y resolver problemas del mundo
            real.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-8"></div>
        {projects.map((project,idx)=>(
          <div>
            {/*image  */}
            <div>
              <img src="{project.image}" alt="{project.title}" />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};
