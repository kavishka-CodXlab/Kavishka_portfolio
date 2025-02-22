import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
export const Projects = () => {
  const projects = [{
    title: "AI Chat Application",
    description: "A real-time chat application with AI-powered responses using React and OpenAI API.",
    tags: ["React", "Node.js", "OpenAI", "WebSocket"],
    github: "#",
    demo: "#"
  }, {
    title: " Text to Image Generator SaaS React App",
    description: "Full Stack AI React project created user authentication using MongoDB, Express, React and Node JS",
    tags: ["TypeScript", "Clipdrop API", "MongoDB"],
    github: "#",
    demo: "#"
  }, {
    title: "Student Portal",
    description: "A comprehensive student management system with course registration and grade tracking.",
    tags: ["React", "Firebase", "Material-UI"],
    github: "#",
    demo: "#"
  }];
  return <section id="projects" className="py-20 bg-gray-900">
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
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} key={index} className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => <motion.span whileHover={{
              scale: 1.05
            }} key={tagIndex} className="text-sm bg-gray-700 text-blue-400 px-3 py-1 rounded-full">
                    {tag}
                  </motion.span>)}
              </div>
              <div className="flex space-x-4">
                <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} href={project.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </motion.a>
                <motion.a whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} href={project.demo} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={20} />
                </motion.a>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};