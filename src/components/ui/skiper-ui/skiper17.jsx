"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName
}) => {
  const container = useRef(null);
  const imageRefs = useRef([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageElements = imageRefs.current;
    const totalCards = imageElements.length;

    console.log("GSAP setup - Total cards:", totalCards);
    console.log("Image elements:", imageElements);

    if (!imageElements[0]) {
      console.log("No first image element found");
      return;
    }

    gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });

    for (let i = 1; i < totalCards; i++) {
      if (!imageElements[i]) continue;
      gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
    }

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".sticky-cards",
        start: "top top",
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        pin: true,
        scrub: 0.5,
        pinSpacing: true,
      },
    });

    for (let i = 0; i < totalCards - 1; i++) {
      const currentImage = imageElements[i];
      const nextImage = imageElements[i + 1];
      const position = i;
      if (!currentImage || !nextImage) continue;

      scrollTimeline.to(currentImage, {
        scale: 0.7,
        rotation: 5,
        duration: 1,
        ease: "none",
      }, position);

      scrollTimeline.to(nextImage, {
        y: "0%",
        duration: 1,
        ease: "none",
      }, position);
    }

    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });

    if (container.current) {
      resizeObserver.observe(container.current);
    }

    return () => {
      resizeObserver.disconnect();
      scrollTimeline.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, { scope: container });

  return (
    <div className={cn("relative h-screen w-full", className)} ref={container}>
      <div
        className="sticky-cards relative flex h-screen w-full items-center justify-center overflow-hidden p-3 lg:p-8">
        <div
          className={cn(
            "relative h-[90%] aspect-video max-w-sm overflow-hidden rounded-lg lg:max-w-7xl",
            containerClassName
          )}>
          {cards.map((card, i) => {
            console.log(`Rendering card ${i}:`, card);
            return (
              <img
                key={card.id}
                src={card.image}
                alt={card.alt || ""}
                className={cn("rounded absolute aspect-video object-contain opacity-100", imageClassName)}
                ref={(el) => {
                  imageRefs.current[i] = el;
                  console.log(`Image ref ${i} set:`, el);
                }}
                onLoad={() => console.log(`Image ${i} loaded:`, card.image)}
                onError={(e) => console.error(`Image ${i} failed to load:`, card.image, e)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Example usage component with default data
const Skiper17 = () => {
  const defaultCards = [
    {
      id: 1,
      image: "https://ehtasamahmadraza.vercel.app/projects/igef.png",
      alt: "IGEF Project",
    },
    {
      id: 2,
      image: "https://ehtasamahmadraza.vercel.app/projects/imm.png",
      alt: "IMM Project",
    },
    {
      id: 3,
      image: "https://ehtasamahmadraza.vercel.app/projects/weetoomedia.png",
      alt: "Weetoo Media Project",
    },
    {
      id: 4,
      image: "https://ehtasamahmadraza.vercel.app/projects/cbs.png",
      alt: "ColBrown School Project",
    },
    {
      id: 5,
      image: "https://ehtasamahmadraza.vercel.app/projects/ssim.png",
      alt: "SSIM Project",
    },
  ];

  return (
    <ReactLenis root>
      <div className="h-screen w-full">
        <StickyCard002 cards={defaultCards} />
      </div>
    </ReactLenis>
  );
};

export { Skiper17, StickyCard002 };