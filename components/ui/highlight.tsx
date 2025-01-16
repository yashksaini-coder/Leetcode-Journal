"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
  spotlightSize = 200,
  spotlightColor = "indigo",
  dotColor = "neutral",
  interactive = true,
  glowEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  spotlightSize?: number;
  spotlightColor?: "indigo" | "purple" | "blue" | "pink";
  dotColor?: "neutral" | "slate" | "gray";
  interactive?: boolean;
  glowEffect?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget || !interactive) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightVariants = {
    initial: { opacity: 0 },
    animate: { opacity: isHovered ? 1 : 0 },
    exit: { opacity: 0 },
  };

  const containerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
  };

  return (
    <motion.div
      className={cn(
        "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group overflow-hidden",
        "rounded-xl shadow-lg transition-shadow duration-300",
        glowEffect && "hover:shadow-2xl hover:shadow-indigo-500/20",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
    >
      {/* Base dot pattern */}
      <div
        className={cn(
          "absolute inset-0",
          `bg-dot-thick-${dotColor}-300 dark:bg-dot-thick-${dotColor}-800`,
          "pointer-events-none opacity-70"
        )}
      />

      {/* Interactive spotlight */}
      <AnimatePresence>
        <motion.div
          className={cn(
            "pointer-events-none absolute inset-0",
            `bg-dot-thick-${spotlightColor}-500 dark:bg-dot-thick-${spotlightColor}-500`
          )}
          style={{
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
          }}
          variants={spotlightVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Edge gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-500/10 dark:to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div
        className={cn(
          "relative z-20",
          "transition-transform duration-300 group-hover:scale-[1.02]",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

export const Highlight = ({
  children,
  className,
  gradient = "indigo-purple",
  animationDuration = 2,
  animationDelay = 0.5,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  gradient?: "indigo-purple" | "blue-purple" | "pink-purple";
  animationDuration?: number;
  animationDelay?: number;
  hover?: boolean;
}) => {
  const gradientMap = {
    "indigo-purple":
      "from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",
    "blue-purple":
      "from-blue-300 to-purple-300 dark:from-blue-500 dark:to-purple-500",
    "pink-purple":
      "from-pink-300 to-purple-300 dark:from-pink-500 dark:to-purple-500",
  };

  const hoverVariants = {
    initial: { y: 0, scale: 1 },
    // hover: { y: -2, scale: 1.05 },
  };

  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      whileHover={hover ? "hover" : undefined}
      variants={hoverVariants}
      transition={{
        duration: animationDuration,
        ease: "easeOut",
        delay: animationDelay,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline-block",
      }}
      className={cn(
        "relative inline-block pb-1 px-1 py-2",
        "rounded-lg bg-gradient-to-r",
        gradientMap[gradient],
        "transition-all duration-300",
        hover && "hover:shadow-lg hover:shadow-purple-500/20",
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export default HeroHighlight;
