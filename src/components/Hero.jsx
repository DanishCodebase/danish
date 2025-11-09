"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPhonepe,
  SiRazorpay,
  SiShadcnui,
} from "react-icons/si";

import { OrbitRotation } from "@/components/ui/orbit-rotation";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Home() {
  const techIcons = [
    { Icon: FaHtml5, name: "HTML" },
    { Icon: FaCss3Alt, name: "CSS" },
    { Icon: FaJs, name: "Javascript" },
    { Icon: FaBootstrap, name: "Bootstrap" },
    { Icon: SiTailwindcss, name: "Tailwind Css" },
    { Icon: FaReact, name: "React" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiExpress, name: "Express.js" },
    { Icon: SiMysql, name: "Mysql" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: SiPhonepe, name: "Phonepe" },
    { Icon: SiRazorpay, name: "Razorpay" },
    { Icon: SiShadcnui, name: "Shadcn" },
  ];

  // ========================================
  // CUSTOMIZABLE CONFIGURATION
  // ========================================
  // Modify these values according to your needs

  // Method 1: Use preset configurations
  const activeConfig = "desktop"; // Options: "mobile", "tablet", "desktop", "largeDesktop"

  // Method 2: Set custom values directly (overrides activeConfig)
  const customValues = {
    orbitGap: 8, // Gap between orbits (4-12 recommended)
    centerIconSize: "size-56", // Center icon size (size-32 to size-80)
    orbitSize: "sm", // Orbit size: "sm", "md", "lg"
  };

  // Available center icon sizes:
  // size-32 (128px), size-40 (160px), size-48 (192px), size-56 (224px),
  // size-64 (256px), size-72 (288px), size-80 (320px)

  // Available orbit sizes:
  // "sm" = 224px, "md" = 240px, "lg" = 256px

  // Use custom values if set, otherwise use active config
  const currentConfig = customValues.orbitGap
    ? customValues
    : {
        mobile: {
          orbitGap: 4,
          centerIconSize: "size-40", // 160px
          orbitSize: "md",
        },
        tablet: {
          orbitGap: 6,
          centerIconSize: "size-48", // 192px
          orbitSize: "md",
        },
        desktop: {
          orbitGap: 8,
          centerIconSize: "size-56", // 224px
          orbitSize: "sm",
        },
        largeDesktop: {
          orbitGap: 10,
          centerIconSize: "size-64", // 256px
          orbitSize: "sm",
        },
      }[activeConfig];

  const centerIcon = {
    Icon: ({ className }) => (
      <div className={className}>
        <img
          src="/Danish.png"
          alt="Danish photo"
          className={`rounded-full ${currentConfig.centerIconSize} object-cover`}
          style={{
            filter: "grayscale(70%)",
          }}
        />
      </div>
    ),
    name: "Danish",
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buttonHover = {
    scale: 1.03,
    transition: { duration: 0.2, ease: "easeInOut" },
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 sm:overflow-hidden overflow-x-hidden pt-10 sm:py-0">
      <div className="flex flex-col lg:flex-row min-h-screen items-center lg:items-center">
        {/* Left Section - Content */}
        <motion.div
          className="w-full lg:w-1/2 lg:flex-[0.55] lg:pr-8 xl:pr-16 mb-52 lg:mb-0"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Greeting */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center lg:justify-start px-3 sm:px-4 py-2 mb-6 sm:mb-8 relative"
          >
            {/* <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500 rounded-sm"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 rounded-sm"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-sm"></div> */}
            <span className="text-3xl font-normal tracking-widest uppercase">
              <Cover className="inline-flex items-center px-3 gap-3 text-gray-500">
                Danish <span>👋</span>
              </Cover>
            </span>
          </motion.div>

          {/* Title */}
          {/* <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-2 leading-tight"
            >
              <span className="text-gray-900">I'm </span>
              <span className="text-blue-500 font-medium relative">
                Danish
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                ,
              </span>
            </motion.h1> */}

          {/* Subtitle */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left text-gray-900 mb-2 relative"
          >
            Full Stack Developer
          </motion.h1>

          {/* Location */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl xs:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left text-gray-900 mb-6 lg:mb-8"
          >
            Based in New Delhi.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-center lg:text-left text-gray-600 mb-8 lg:mb-12 max-w-xl mx-auto lg:ml-0 leading-relaxed"
          >
            I'm an experienced Full Stack Developer with 2.1+ years in the
            field, collaborating with various companies and startups,
            specializing in React.js, Next.js, and problem-solving, delivering
            results by leveraging modern tools like Cursor IDE and Claude for
            efficient development.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-4 sm:gap-6 items-start justify-center lg:justify-start"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                <ShimmerButton className="shadow-2xl">
                  <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10">
                    View Project
                  </span>
                </ShimmerButton>
              </motion.div>
            </div>

            <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
              <ShimmerButton
                className="shadow-destructive"
                background="#eee"
                shimmerColor="#000000"
              >
                <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-black lg:text-lg dark:from-white dark:to-slate-900/10">
                  Hire Me
                </span>
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section - OrbitRotation */}
        <motion.div
          className="w-full h-full lg:w-1/2 lg:flex-[0.45] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="sm:w-full relative h-[500px] lg:h-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
            <OrbitRotation
              icons={techIcons}
              orbitCount={3}
              orbitGap={currentConfig.orbitGap}
              centerIcon={centerIcon}
              size={currentConfig.orbitSize}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
