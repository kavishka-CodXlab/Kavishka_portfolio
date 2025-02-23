import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { motion } from "framer-motion";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white pt-16 overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Hello, I'm{" Kavishka Thilakarathna."}
            <span className="relative inline-block">
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </span>
          </h1>
          <motion.p initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} className="text-xl md:text-2xl text-gray-400 mb-8">
            Computer Science Student & Aspiring Software Developer
          </motion.p>
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.6
        }} className="flex justify-center space-x-4 mb-12">
            {[{
            Icon: Github,
            href: "https://github.com/kavishka-CodXlab"
          }, {
            Icon: Linkedin,
            href: "https://www.linkedin.com/in/kavishka-thilakarathna-05a575290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium"
          }, {
            Icon: Mail,
            href: "tkavishka101@gmail.com"
          }].map(({
            Icon,
            href
          }, index) => <motion.a key={index} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }} href={href} className="p-2 rounded-full border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors hover:shadow-lg hover:shadow-blue-400/20">
                <Icon size={24} />
              </motion.a>)}
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.9
        }} className="inline-block">
            <code className="text-sm md:text-base bg-gray-800/80 p-4 rounded-lg text-left backdrop-blur-sm shadow-xl">
              <span className="text-pink-400">const</span>{" "}
              <span className="text-blue-400">developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;<span className="text-green-400">passion:</span>{" "}
              <span className="text-yellow-400">'coding'</span>,
              <br />
              &nbsp;&nbsp;<span className="text-green-400">learning:</span>{" "}
              <span className="text-yellow-400">'always'</span>
              <br />
              {"};"}
            </code>
          </motion.div>
        </motion.div>
      </div>
    </section>;
};