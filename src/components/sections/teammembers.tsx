"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { teamMembers } from "@/constants";
import { BackgroundGradient } from "../ui/background-gradient";

export function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="team" className="py-20 md:py-24 overflow-hidden ">
      <div className="container">
        <div className="flex flex-col items-center mb-12 justify-center">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Nuestro Equipo
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
            Un equipo apasionado y dedicado, impulsando la innovación y el
            crecimiento de nuestra empresa
          </p>
        </div>
        <div
          ref={containerRef}
          className="flex max-md:flex-col min-h-[650px] min-w-full  overflow-x-auto pb-8 gap-6 snap-x snap-mandatory justify-center items-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {teamMembers.map(
            (
              {
                name,
                role,
                background,
                borderColor,
                color,
                image: Image,
              },
              i
            ) => (
              <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <BackgroundGradient className="rounded-[22px]  bg-white dark:bg-zinc-900">

                  <motion.div
                    key={i}
                    className="flex-shrink-0 md:w-[350px] snap-center"

                  >
                    <motion.div
                      whileHover={{ scale: 1.05, }}
                      className={cn(
                        "flex flex-col items-center justify-center gap-4 h-[500px]  md:h-[400px] bg-black rounded-2xl border p-6",
                        background,
                        borderColor
                      )}
                    >
                      <div className="w-44 h-44 md:w-32 md:h-32 rounded-3xl overflow-hidden">
                        <img
                          src={Image}
                          alt={name}
                          width={150}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <h3
                        className="text-xl md:text-2xl text-center tracking-tight uppercase font-bold"
                        style={{ color }}
                      >
                        {role}
                      </h3>
                      <h2
                        className="text-3xl md:text-3xl text-center tracking-tighter uppercase font-extrabold leading-[90%]"
                        style={{ color }}
                      >
                        {name}
                      </h2>
                    </motion.div>
                  </motion.div>
                </BackgroundGradient>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
