"use client";

import { motion } from "framer-motion";
import {
  FaApple,
  FaAws,
  FaDocker,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa";
import {
  SiFacebook,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import { OrbitRotation } from "@/components/ui/orbit-rotation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const techIcons = [
    { Icon: FaReact, name: "React" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: FaTwitter, name: "Twitter" },
    { Icon: FaLinkedin, name: "LinkedIn" },
    { Icon: FaInstagram, name: "Instagram" },
    { Icon: FaGoogle, name: "Google" },
    { Icon: FaApple, name: "Apple" },
    { Icon: SiFacebook, name: "Facebook" },
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
          //   style={{
          //     filter: "grayscale(70%)",
          //   }}
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
    <div className="bg-white">
      {/* Configuration Display - Remove in production */}
      <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-mono max-w-xs">
        <div className="font-bold mb-1">OrbitRotation Config</div>
        <div>Gap: {currentConfig.orbitGap}</div>
        <div>Center: {currentConfig.centerIconSize}</div>
        <div>Size: {currentConfig.orbitSize}</div>
        <div className="text-xs text-gray-300 mt-1">
          Edit customValues in Hero.jsx
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row min-h-screen items-center lg:items-center">
          {/* Left Section - Content */}
          <motion.div
            className="w-full lg:w-1/2 lg:flex-[0.55] lg:pr-8 xl:pr-16 mb-40 lg:mb-0"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Greeting */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-3 sm:px-4 py-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 mb-6 sm:mb-8 relative"
            >
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-amber-500 rounded-sm"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-sm"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-500 rounded-sm"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-amber-500 rounded-sm"></div>
              <span className="text-sm text-gray-700 font-medium">
                Hello There!
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2 leading-tight"
            >
              <span className="text-gray-900">I'm </span>
              <span className="text-amber-500 font-normal relative">
                Danish
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                ,
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 relative"
            >
              Full Stack Developer
            </motion.h2>

            {/* Location */}
            <motion.h3
              variants={fadeInUp}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 lg:mb-8"
            >
              Based in Pakistan.
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-600 mb-8 lg:mb-12 max-w-2xl leading-relaxed"
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
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View My Portfolio
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
              </div>

              <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Hire Me
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Section - OrbitRotation */}
          <motion.div
            className="w-full lg:w-1/2 lg:flex-[0.45] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
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
    </div>
  );
}
