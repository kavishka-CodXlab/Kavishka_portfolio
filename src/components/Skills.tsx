import React from "react";
import { motion } from "framer-motion";
export const Skills = () => {
  const skillCategories = [{
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C++", "TypeScript"]
  }, {
    title: "Web Technologies",
    skills: ["React", "Node.js", "HTML5", "CSS3", "REST APIs"]
  }, {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Linux", "VS Code"]
  }, {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"]
  }];
  return <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
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
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} key={index} className="bg-gray-900 rounded-lg p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => <motion.span key={skillIndex} whileHover={{
              scale: 1.05
            }} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full hover:bg-gray-700 hover:text-blue-400 transition-colors">
                    {skill}
                  </motion.span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};