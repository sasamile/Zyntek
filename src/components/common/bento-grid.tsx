"use client" // Add use client directive

import type React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion" // Import motion

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-2 px-3 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  index, // Add index prop for custom animation delay
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  index?: number // Optional index for animation
}) => {
  // Define cardVariants here for the BentoGridItem itself
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index} // Pass the index for staggered animation
    >
      {header}
      {(title || description || icon) && ( // Only render this div if there's content for title/description/icon
        <div className="p-4 transition duration-200 group-hover/bento:translate-x-2">
          {icon}
          <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">{title}</div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">{description}</div>
        </div>
      )}
    </motion.div>
  )
}
