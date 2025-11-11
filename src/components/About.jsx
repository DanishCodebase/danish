"use client";
import { motion } from "framer-motion";
import { Users, Briefcase, Award, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      value: "750+",
      label: "Project Completed",
      icon: <Briefcase size={28} className="text-gray-700" />,
    },
    {
      value: "25+",
      label: "Industry Covered",
      icon: <Users size={28} className="text-gray-700" />,
    },
    {
      value: "16+",
      label: "Years of Experience",
      icon: <Award size={28} className="text-gray-700" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl max-w-[400px] mx-auto overflow-hidden shadow-2xl">
              <Image
                src="/Danish.png"
                alt="Danish"
                width={400}
                height={400}
                className="object-cover  w-full h-full"
                style={{
                  filter: "grayscale(70%)",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider relative inline-block">
                About Me
                <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gray-400"></span>
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
                Who is{" "}
                <span className="font-extrabold text-gray-800">
                  Danish
                </span>
                ?
              </h2>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-md border border-gray-100 text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:000-000-0000"
                className="flex items-center justify-center gap-3 w-full bg-white px-6 py-3 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-100 p-2 rounded-full">
                  <Phone size={20} className="text-gray-700" />
                </div>
                <span className="font-semibold text-gray-800">
                  (000) 000-0000
                </span>
              </motion.a>
              <motion.a
                href="mailto:example@gmail.com"
                className="flex items-center justify-center gap-3 w-full bg-white px-6 py-3 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gray-100 p-2 rounded-full">
                  <Mail size={20} className="text-gray-700" />
                </div>
                <span className="font-semibold text-gray-800">
                  example@gmail.com
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
