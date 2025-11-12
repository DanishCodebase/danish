"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Timeline } from "@/components/ui/timeline";

const experienceData = [
  {
    title: "Dec 2024 – Present",
    content: (
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-900">
          Frontend Developer
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Stealth Digital · Full-time · On-site
        </p>
        <p className="text-sm text-gray-500">Tech: React.js</p>
      </div>
    ),
  },
  {
    title: "Apr 2024 – Dec 2024",
    content: (
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-900">
          Frontend Developer
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Technocratic Solutions · Freelance · Hybrid (New Delhi)
        </p>
        <p className="text-sm text-gray-500">
          Tech: CSS, GitHub, and +4 skills
        </p>
      </div>
    ),
  },
  {
    title: "Oct 2023 – Apr 2024",
    content: (
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-900">
          Web Developer Intern
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Resilient Grow · Internship · On-site (New Delhi)
        </p>
        <p className="text-sm text-gray-500">
          Tech: CSS, GitHub, and +4 skills
        </p>
      </div>
    ),
  },
];

const educationData = [
  {
    title: "Completed in 2023",
    content: (
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-900">
          🎓 Diploma in Computer Engineering
        </h3>
        <p className="text-sm text-gray-600">Jamia Millia Islamia</p>
      </div>
    ),
  },
  {
    title: "Ongoing",
    content: (
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg text-gray-900">
          🎓 B.Tech (WILP)
        </h3>
        <p className="text-sm text-gray-600">HRIT University</p>
      </div>
    ),
  },
];

export default function Journey() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          My Journey
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          A timeline of my professional and academic path.
        </p>
      </div>
      <Tabs defaultValue="experience" className="w-full h-full max-w-7xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 bg-gray-200 rounded-lg">
          <TabsTrigger
            value="experience"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=inactive]:hover:bg-gray-100 rounded-md h-full text-sm font-medium text-gray-700 transition-all"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=inactive]:hover:bg-gray-100 rounded-md h-full text-sm font-medium text-gray-700 transition-all"
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="mt-8">
          <div className="relative w-full overflow-hidden">
            <Timeline data={experienceData} />
          </div>
        </TabsContent>
        <TabsContent value="education" className="mt-8">
          <div className="relative w-full overflow-hidden">
            <Timeline data={educationData} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
