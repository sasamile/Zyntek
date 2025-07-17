import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import startsBg from "@/assets/images/stars.png";
import gridLines from "@/assets/images/grid-lines.png";
import { useMediaQuery } from "@/lib/use-media-query";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isLargerThanSm = useMediaQuery("(min-width: 640px)");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="py-20 md:py-24 h-[500px] md:h-[700px]"
      style={{
        backgroundImage: `url(${startsBg})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: isLargerThanSm ? 900 : 0,
      }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: "linear",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[rgb(71,107,186)] bg-blend-overlay [mask-image:radial-gradient(60%_45%_at_50%_35%,black,transparent)] sm:[mask-image:radial-gradient(60%_55%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
        style={{
          backgroundImage: `url(${gridLines})`,
          backgroundPositionY,
        }}
      />
      <div className="relative container h-full flex items-center justify-center">
        <div>
          <h1 className="text-5xl  md:text-7xl lg:text-8xl md:leading-none font-semibold text-center tracking-tighter ">
            Donde las ideas se convierten en soluciones
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 text-center mt-5 max-w-2xl mx-auto">
            En ZYNTEK, transformamos ideas en soluciones digitales innovadoras,
            trabajando contigo en cada paso para hacerlas realidad.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
