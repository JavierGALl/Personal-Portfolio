import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Javier1.gallegos1@gmail.com",
    href: "mailto:javier1.gallegos1@gmail.com",
  },
  {
    icon: Phone,
    label: "Celular",
    value: "+(56) 976878601",
    href: "tel:+56-976878601",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Pudahuel, Santiago.",
    href: "#",
  },
];

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Las configuraciones de EmailJS no se encuentran. Por favor revisa las variables de entorno."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "¡El mensaje se envió correctamente!",
      });

      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } catch (err) {
      console.error("EmailJS error", err);

      setSubmitStatus({
        type: "error",
        message:
          err.text ||
          "Error al enviar el mensaje. Por favor vuelve a intentarlo más tarde.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="Contacto" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Ponte en contacto
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Armemos{" "}
            <span className="font-serif italic font-normal text-white">
              algo grandioso.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            ¿Tienes un proyecto en mente? Envíame un mensaje y conversemos para
            hacerlo realidad juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Formulario */}
          <div className="glass p-8 rounded-xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre..."
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Tu email..."
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  rows={5}
                  required
                  placeholder="Escribe tu mensaje..."
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Enviando...</>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}

                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Tarjeta de disponibilidad */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">
                  Actualmente disponible
                </span>
              </div>

              <p className="text-muted-foreground text-sm">
                Actualmente estoy disponible para nuevas oportunidades y
                proyectos desafiantes. Ya sea para un puesto de tiempo completo
                o como desarrollador freelance, estaré encantado de conversar
                contigo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};