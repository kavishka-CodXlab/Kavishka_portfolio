import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
export const Education = () => {
  const education = [{
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Bedfordshire",
    period: "2025 - Present",
    description: "Specialized on Software Engineering and Data Structures",
    achievements: ["IEEE Computer Society Member", ]
  }, {
    degree: "Foundation Diploma ",
    institution: "Edith Cowan University",
    period: "2023 - 2024",
    description: "Advanced Mathematics and Computer Science",
    achievements: ["Merit Passed 🎖", "....."]
  }];
  return <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-3xl font-bold text-white mb-12 text-center">
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 w-1 h-full bg-blue-400/20">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400">
                  <GraduationCap className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-blue-400 mb-2">{item.institution}</p>
                <p className="text-gray-400 text-sm mb-4">{item.period}</p>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <ul className="list-disc list-inside text-gray-400">
                  {item.achievements.map((achievement, i) => <li key={i}>{achievement}</li>)}
                </ul>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
