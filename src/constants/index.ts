import loducode from "@/assets/images/loducode.png";
import charito from "@/assets/images/charito.png";
import co from "@/assets/images/co.png";
import hato from "@/assets/images/hato.png";
import specialized from "@/assets/images/specialized.png";
import santiago from "@/assets/images/santiago.jpg";
import James from "@/assets/images/james.jpg";

import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";

import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const navLinks = [
  {
    label: "Inicio",
    href: "#home",
  },
  {
    label: "Sobre Nosotros",
    href: "#about",
  },
  {
    label: "Servicios",
    href: "#services",
  },
];

export const partnerships = [loducode, charito, hato, specialized, co];

export const services = [
  {
    title: "Desarrollo Movil",
    description:
      "Creamos apps nativas e híbridas con  React Native, optimizadas para iOS y Android. Implementamos funciones avanzadas como notificaciones push, integración con APIs y geolocalización, garantizando una experiencia fluida y eficiente",
    background: "bg-gradient-to-br from-[#22335b] via-[#6d28d9] to-black",
    borderColor: "border-white/15",
    color: "#fff",
  },
  {
    title: "Desarrollo Web ",
    description:
      "Diseñamos y desarrollamos aplicaciones web dinámicas y escalables con React, Next.js y TypeScript. Nos enfocamos en rendimiento, accesibilidad y diseño responsive, además de crear CMS personalizados para una gestión eficiente del contenido.",
    background: "bg-gradient-to-br from-[#4477c3] via-[#374151] to-[#7c3aed]",
    borderColor: "border-white/15",
    color: "#fff",
  },
  {
    title: "Backends Solidos",
    description:
      "Desarrollamos APIs robustas y seguras con Django, Node.js y Express, utilizando bases de datos como PostgreSQL y Prisma. Aplicamos buenas prácticas en autenticación y seguridad, integrando sistemas como Clerk y Auth.js para proteger la información.",
    background: "bg-gradient-to-br from-[#22335b] via-[#0e766e] to-[#374151]",
    borderColor: "border-white/15",
    color: "#fff",
  },
  {
    title: "Optimización y Seguridad",
    description:
      "Garantizamos sitios web rápidos y seguros con pruebas de rendimiento, optimización SEO y estrategias de ciberseguridad. Protegemos los datos y fortalecemos la infraestructura tecnológica de cada proyecto.",
    background: "bg-gradient-to-br from-[#22335b] via-[#a21caf] to-[#374151]",
    borderColor: "border-white/15",
    color: "#fff",
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Optimizamos procesos con inteligencia artificial y automatización, implementando modelos de análisis de datos y algoritmos personalizados. Ayudamos a las empresas a mejorar la eficiencia con soluciones inteligentes y adaptadas a sus necesidades.",
    background: "bg-gradient-to-br from-[#22335b] via-[#7c3aed] to-[#4477c3]",
    borderColor: "border-[#4477c3]",
    color: "#fff",
  },
];

export const testimonials = [
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“El equipo de BUGZERO nos brindó soluciones a medida que mejoraron nuestra plataforma. Son profesionales, rápidos y siempre disponibles. ¡Altamente recomendados!”",
    name: "Charon Landinez",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Trabajar con BUGZERO fue un placer. Cumplieron con todas nuestras expectativas y la calidad del producto final fue excelente. ¡Muy satisfechos con su trabajo!”",
    name: "Tatiana",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];
export const socialLinks = [
  {
    Icon: FaWhatsapp,
    href: "https://wa.link/pzfz8i",
  },
  {
    Icon: RiInstagramFill,
    href: "https://www.instagram.com/garabatoslab/",
  },
  {
    Icon: FaTiktok,
    href: "https://www.tiktok.com/@studiogarabatos",
  },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/studiogarabatos",
  },
];

export const teamMembers = [
  {
    name: "James Fernando Galvis",
    image: James,
    role: "CEO",
    background:
      "bg-[linear-gradient(to_top_right,rgb(255,255,255,.08),rgb(0,0,0,.2))]",
    borderColor: "border-white/10",
    color: "#fff", // azul elegante
  },
  {
    name: "Santiago Andres Suescun",
    image: santiago,
    role: "CTO",
    background:
      "bg-[linear-gradient(to_top_right,rgb(255,255,255,.08),rgb(0,0,0,.2))]",
    borderColor: "border-white/10",
    color: "#fff", // violeta suave
  },
];

