"use client";
import { ReactLenis } from "lenis/react";
import { ExternalLink } from "lucide-react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGraphql,
  SiExpress,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

const projects = [
  {
    title: "IGEF Project",
    description:
      "A modern web application showcasing innovative design and seamless user experience. Built with cutting-edge technologies to deliver exceptional performance and visual appeal.",
    keyFeatures: [
      "Responsive design that adapts to all screen sizes perfectly",
      "Optimized performance with lazy loading and code splitting",
      "Intuitive user interface with smooth animations and transitions",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
    src: "igef.png",
    link: "https://ehtasamahmadraza.vercel.app/projects/igef.png",
    color: "#000",
  },
  {
    title: "IMM Project",
    description:
      "An immersive digital experience featuring elegant animations and responsive design. This project demonstrates advanced frontend development techniques and creative problem-solving.",
    keyFeatures: [
      "Advanced animation system with timeline-based controls",
      "Microinteractions that enhance user engagement significantly",
      "Performance-optimized rendering for smooth 60fps experience",
    ],
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    ],
    src: "imm.png",
    link: "https://ehtasamahmadraza.vercel.app/projects/imm.png",
    color: "#000",
  },
  {
    title: "Weetoo Media Project",
    description:
      "A comprehensive media platform designed to engage and captivate audiences. Combining stunning visuals with intuitive navigation for an exceptional user journey.",
    keyFeatures: [
      "Content management system with real-time updates and sync",
      "Media optimization for fast loading across all devices",
      "Interactive galleries with advanced filtering and search",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    ],
    src: "weetoomedia.png",
    link: "https://ehtasamahmadraza.vercel.app/projects/weetoomedia.png",
    color: "#000",
  },
  {
    title: "ColBrown School Project",
    description:
      "An educational platform featuring modern design principles and user-centric interface. Created to provide an engaging learning experience for students and educators.",
    keyFeatures: [
      "Student portal with personalized dashboard and analytics",
      "Interactive course management with progress tracking",
      "Real-time collaboration tools for enhanced learning",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
    ],
    src: "cbs.png",
    link: "https://ehtasamahmadraza.vercel.app/projects/cbs.png",
    color: "#000",
  },
  {
    title: "SSIM Project",
    description:
      "A sophisticated web solution with attention to detail and elegant design patterns. This project showcases technical excellence and creative innovation.",
    keyFeatures: [
      "Enterprise-grade architecture with scalable infrastructure",
      "Advanced security features with authentication and authorization",
      "Seamless integration with third-party APIs and services",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
    src: "ssim.png",
    link: "https://ehtasamahmadraza.vercel.app/projects/ssim.png",
    color: "#000",
  },
];
export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main className="bg-gray-100" ref={container}>
        <>
          <section className="text-black h-[70vh] w-full bg-gray-100 grid place-content-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-transparent"></div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <h1 className="2xl:text-7xl text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight leading-[1.1] mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light mt-6">
                Explore a collection of innovative web applications and digital
                experiences
              </p>
              <div className="mt-12 animate-bounce">
                <svg
                  className="w-6 h-6 mx-auto text-gray-400"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </section>
        </>

        <section className="text-black w-full bg-gray-100">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

        {/* <footer className="group bg-gradient-to-b from-white to-gray-50">
          <div className="h-40 relative z-10 grid place-content-center">
            <p className="text-gray-400 text-sm font-light">
              End of projects
            </p>
          </div>
        </footer> */}
      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  title,
  description,
  keyFeatures,
  technologies,
  src,
  link: url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col lg:flex-row relative -top-[25%] w-full max-w-7xl rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] transition-shadow duration-500 lg:p-5 sm:p-6 p-4 origin-top border border-gray-100/50"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Accent border top */}
        <div
          className="absolute top-0 left-0 right-0 h-1 mx-1 rounded-2xl"
          style={{ backgroundColor: color }}
        />

        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
          {/* Image Section - Maintaining 1705:904 aspect ratio (~1.885:1) */}
          <div
            className="relative w-full lg:w-[58%] rounded-xl overflow-hidden bg-gray-50 group"
            style={{ aspectRatio: "1705/904" }}
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt={title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between w-full lg:w-[42%] lg:min-h-full py-2">
            <div className="space-y-6">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight">
                {title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                {description}
              </p>

              {/* Key Features */}
              {keyFeatures && keyFeatures.length > 0 && (
                <ul className="space-y-2.5">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <span className="text-black mt-1.5 flex-shrink-0 text-base leading-none">•</span>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technology Icons */}
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                        title={tech.name}
                      >
                        <IconComponent
                          className="w-6 h-6 sm:w-7 sm:h-7"
                          style={{ color: tech.color }}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* CTA Section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <motion.a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group/link font-medium text-black hover:text-gray-700 transition-colors duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
