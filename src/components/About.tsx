import React from "react";
import { motion } from "framer-motion";
import { Code2, Coffee, Globe, Users } from "lucide-react";
export const About = () => {
  const features = [{
    icon: Code2,
    title: "Clean Code Enthusiast",
    description: "Passionate about writing clean, efficient, and maintainable code."
  }, {
    icon: Globe,
    title: "Web Development",
    description: "Specialized in modern web technologies and frameworks."
  }, {
    icon: Users,
    title: "Team Player",
    description: "Experienced in collaborative development and version control."
  }, {
    icon: Coffee,
    title: "Continuous Learner",
    description: "Always exploring new technologies and best practices."
  }];
  return <section id="about" className="py-20 bg-gray-800">
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
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="space-y-6">
            <p className="text-gray-200 leading-relaxed">
            fff  I'm a passionate Computer Science student with a keen interest in
              software development and problem-solving. I'm diving deep into programming, data structures, and algorithms, 
              while my hands-on experience in UI/UX design keeps me agile and adaptable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my degree in Computer Science, I focus on
              creating efficient, user-friendly solutions while constantly
              learning new technologies and best practices in software
              development.
            </p>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => <div key={index} className="p-6 bg-gray-900 rounded-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>)}
          </motion.div>
        </div>
      </div>
    </section>;
};