import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ParticleBackground } from "./ParticleBackground";

emailjs.init("AjmYC90MBkSD8NLlD");

export const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    
    try {
      await emailjs.send("service_22xqhfa", "template_wd02dje", {
        to_email: "tkavishka101@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });
      
      toast.success("Message sent successfully!");
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
      console.error("Error sending email:", error);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Contact us
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Let's connect and create something amazing together
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="name" className="block text-gray-300 mb-3">
                <User className="w-5 h-5 inline-block mr-2 -mt-1" />
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-5 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all placeholder-gray-500"
                placeholder="John Doily"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" className="block text-gray-300 mb-3">
                <Mail className="w-5 h-5 inline-block mr-2 -mt-1" />
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-5 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all placeholder-gray-500"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="message" className="block text-gray-300 mb-3">
                <MessageSquare className="w-5 h-5 inline-block mr-2 -mt-1" />
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-5 py-3 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all placeholder-gray-500"
                placeholder="Hey there! I wanted to talk about..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus === "loading"}
                className={`w-full py-4 px-8 rounded-xl font-medium flex items-center justify-center space-x-3 ${
                  formStatus === "loading" 
                    ? "bg-gray-700 cursor-not-allowed" 
                    : formStatus === "success" 
                      ? "bg-green-500/90" 
                      : formStatus === "error"
                        ? "bg-red-500/90"
                        : "bg-blue-500 hover:bg-blue-600"
                } transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]`}
              >
                <Send className="w-5 h-5" />
                <span className="text-lg">
                  {formStatus === "loading" 
                    ? "Sending..." 
                    : formStatus === "success" 
                      ? "Message Sent! 🎉" 
                      : formStatus === "error"
                        ? "Error - Try Again"
                        : "Send Message"}
                </span>
              </motion.button>
            </motion.div>
          </motion.form>
        </div>

        <Toaster 
          position="bottom-right"
          toastOptions={{ 
            className: "bg-gray-800 text-white backdrop-blur-sm",
            style: {
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              margin: "0 1rem 1.5rem 0"
            }
          }} 
        />
      </div>
    </section>
  );
};