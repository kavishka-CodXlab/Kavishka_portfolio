import React, { useState } from "react";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [{
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Education",
    href: "#education"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
        setIsMenuOpen(false);
      }
    }
  };
  return <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white hover:text-blue-400 transition-colors" onClick={e => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }}>
            <span className="text-blue-400">&lt;</span>
            Kavishka
            <span className="text-blue-400">/&gt;</span>
          </a>
          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => <a key={item.name} href={item.href} onClick={handleClick} className="text-gray-300 hover:text-blue-400 transition-colors relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </a>)}
          </div>
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && <div className="md:hidden py-4">
            {menuItems.map(item => <a key={item.name} href={item.href} onClick={handleClick} className="block py-2 text-gray-300 hover:text-blue-400 transition-colors">
                {item.name}
              </a>)}
          </div>}
      </nav>
    </header>;
};