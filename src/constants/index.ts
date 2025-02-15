import loducode from "@/assets/images/loducode.png";
import charito from "@/assets/images/charito.png";
import co from "@/assets/images/co.png";
import hato from "@/assets/images/hato.png";
import specialized from "@/assets/images/specialized.png";

import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";

import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
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
  {
    label: "Testimonios",
    href: "#testimonials",
  },
];

export const partnerships = [loducode, charito, hato, specialized, co];

export const services = [
  {
    title: "Diseño Gráfico",
    description:
      "Transformamos diseños en arte, comprendiendo la función de cada elemento gráfico y transmitiendo un mensaje de manera precisa y adaptada a las necesidades.",
    background: "bg-gradient-to-r from-purple-400/30 to-black",
    borderColor: "border-[rgba(102,77,127,0.35)]",
    color: "#b582eb",
  },
  {
    title: "Branding",
    description:
      "Creamos identidades visuales únicas, fusionando creatividad y estrategia para transmitir mensajes claros y alineados con los objetivos de cada proyecto.",
    background:
      "bg-[linear-gradient(to_top_right,rgb(125,216,205,0.35),rgb(0,0,0,.2))]",
    borderColor: "border-[rgba(125,216,205,0.35)]",
    color: "#7dd8cd",
  },
  {
    title: "Animación",
    description:
      "Utilizamos nuestra creatividad y experiencia para dar vida a proyectos a través de animaciones vibrantes y cautivadoras.",
    background:
      "bg-[linear-gradient(to_bottom_left,rgb(224,255,87,0.35),black)]",
    borderColor: "border-[rgba(224,255,87,0.35)]",
    color: "",
  },
  {
    title: "Video",
    description:
      "Producimos, editamos y creamos videos creativos de una manera única, creando una narrativa impactante con un mensaje cautivador.",
    background:
      "bg-[linear-gradient(to_top_right,rgb(125,216,205,0.35),rgb(0,0,0,.2))]",
    borderColor: "border-[rgba(125,216,205,0.35)]",
    color: "#7dd8cd",
  },
  {
    title: "Fotografía",
    description:
      "Capturamos momentos únicos, creando imágenes que cuentan historias y transmiten emociones de manera visualmente impactante.",
    background: "bg-gradient-to-r from-[#f8b5d0]/30 to-black",
    borderColor: "border-[rgba(248,181,208,0.35)]",
    color: "#f8b5d0",
  },
];

export const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“Me encanto el diseño de marca y todo el profesionalismo que vi de parte de ustedes sin duda el mejor estudio creativo. ¡Gracias!”",
    name: "Charon Landinez",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Es un orgullo saber que garabatos es un estudio creativo de Villavicencio.”",
    name: "Tatiana",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];
export const socialLinks = [
  {
    Icon: FaBehance,
    href: "https://www.behance.net/studiogarabatos",
  },
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
