"use client" // Add use client directive

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion" // Import motion
import { Cpu, Brain, Target, Users, MessageSquareMore } from "lucide-react" // Import new icons
import { BentoGrid, BentoGridItem } from "../common/bento-grid"

// Define animation variants for the glow effect
const glowVariants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

// Reusable Custom Card Header Component for Misión, Visión, Valores, Público, Innovación
const CustomCardHeader = ({
  icon: Icon,
  title,
  description,
  className,
}: {
  icon: React.ElementType
  title: string
  description: string
  className?: string
}) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <Skeleton /> // Fallback for server render
  }

  return (
    <div className={cn("relative group h-full w-full", className)}>
      <div className="relative overflow-hidden rounded-xl bg-[linear-gradient(to_top_right,rgb(255,255,255,.08),rgb(0,0,0,.2))] border border-neutral-800 h-full">
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-[#0F0F0F]/40 to-[#232323]/40 rounded-xl blur-xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
        <div className="relative p-8 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#232323] to-[#0F0F0F] rounded-xl blur-md opacity-50" />
                <div className="relative bg-black p-3 rounded-xl border border-neutral-800">
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-white">
                {title}
              </h2>
            </div>
            <p className="text-white text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Video Header Component for "The Power of Communication"
const VideoHeader = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      src="/logo.mp4" // Placeholder video URL
    >
      {"Your browser does not support the video tag."}
    </video>
  </div>
)

// Skeleton component for default items
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

export default function BentoGridDemo() {
  const items = [
    {
      // Misión Card
      title: null, // Content rendered inside CustomCardHeader
      description: null, // Content rendered inside CustomCardHeader
      header: (
        <CustomCardHeader
          icon={Brain}
          title="Misión"
          description="En ZYNTEK, impulsamos la transformación digital creando soluciones tecnológicas innovadoras y de alta calidad que potencian el crecimiento de empresas y emprendedores."
        />
      ),
      icon: null, // Content rendered inside CustomCardHeader
    },
    {
      // Visión Card
      title: null,
      description: null,
      header: (
        <CustomCardHeader
          icon={Target}
          title="Visión"
          description="Ser la empresa líder en desarrollo de software en América Latina, reconocida por nuestra innovación, excelencia técnica y compromiso con el éxito de nuestros clientes."
        />
      ),
      icon: null,
    },
    {
      // Público Card
      title: null,
      description: null,
      header: (
        <CustomCardHeader
          icon={Users}
          title="Público"
          description="Acompañamos a startups, pymes y grandes empresas en su transformación digital, brindando soluciones de software a medida para optimizar sus procesos y alcanzar sus objetivos."
        />
      ),
      icon: null,
    },
    {
      // Innovación Card
      title: null,
      description: null,
      header: (
        <CustomCardHeader
          icon={Cpu}
          title="Innovación"
          description="Innovamos constantemente para ofrecer soluciones tecnológicas de vanguardia y transformar el futuro de nuestros clientes."
        />
      ),
      icon: null,
    },
    {
      // The Power of Communication (with video)
      title: "El poder de la comunicación",
      description: "La comunicación efectiva es clave para el éxito de cualquier proyecto tecnológico. En ZYNTEK, fomentamos la colaboración y el diálogo para lograr resultados extraordinarios.",
      header: <VideoHeader />,
      icon: <MessageSquareMore className="h-4 w-4 text-neutral-500" />, // Using a new icon from lucide-react
      className: "md:col-span-2 ", // This applies to the BentoGridItem itself for spanning columns
    },



  ]

  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className} // Use className from item object
          index={i} // Pass index for staggered animation
        />
      ))}
    </BentoGrid>
  )
}
