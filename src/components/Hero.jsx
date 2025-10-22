"use client";

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

  const centerIcon = {
    Icon: ({ className }) => (
      <div className={className}>
        <img
          src="/Danish.png"
          alt="Danish photo"
          className="rounded-full size-52 grayscale object-cover"
          style={{
            filter: "grayscale(70%)",
          }}
        />
      </div>
    ),
    name: "Danish",
  };

  return (
    // <div className="bg-background relative h-[500px] w-full overflow-hidden rounded-lg border p-8">
      <div className="flex h-screen items-center justify-center">
        <OrbitRotation
          icons={techIcons}
          orbitCount={3}
          orbitGap={6}
          centerIcon={centerIcon}
          size="sm"
        />
      </div>
    // </div>
  );
}
