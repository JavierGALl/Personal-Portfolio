import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Web de Atención kinesiologica",
    description: "dashboard financiero",
    image: "/projects/kinefy_project.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "https://kinefy-ten.vercel.app/",
    github: "https://github.com/JavierGALl",
  },
  {
    title: "Dashboard de divisas",
    description: "dashboard financiero",
    image: "/projects/Dashboard_project.jpeg",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "Dashboard Power bi",
    description: "dashboard financiero",
    image: "/projects/Dashboard2_project.png",
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
        <div className="text-center mx-auto max-w-3xl mb-16">
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}  
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>
                {/* Overlay links*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5"/>
                  </a>
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5"/>
                  </a>
                </div>
              </div>

              {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"/>
              </div>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag,tagIdx)=>(
                <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border boder-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                  {tag}</span>
              ))}</div>
            </div>
            </div>
          ))}
        </div>
        {/* View all cTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
         <AnimatedBorderButton>
            Ver todos mis proyectos
            <ArrowUpRight className="h-5 w-5"/>
         </AnimatedBorderButton>
        </div>
      </div>  
    </section>
  );
};
