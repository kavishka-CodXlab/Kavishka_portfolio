import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User } from "lucide-react";
export const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };
  return <section id="contact" className="py-20 bg-gray-800">
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
          Get In Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.form initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                <User className="w-4 h-4 inline-block mr-2" />
                Name
              </label>
              <input type="text" id="name" required className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                <Mail className="w-4 h-4 inline-block mr-2" />
                Email
              </label>
              <input type="email" id="email" required className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 inline-block mr-2" />
                Message
              </label>
              <textarea id="message" required rows={4} className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your message" />
            </div>
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} type="submit" disabled={formStatus === "loading"} className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 ${formStatus === "loading" ? "bg-gray-600" : formStatus === "success" ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"} transition-colors`}>
              <Send className="w-4 h-4" />
              <span>
                {formStatus === "loading" ? "Sending..." : formStatus === "success" ? "Message Sent!" : "Send Message"}
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>;
};