import React, { useState } from 'react';
import { Github, Mail, Linkedin, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <header className="min-h-screen flex flex-col justify-center -mt-20">
      {/* Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-gradient">KD</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="space-y-8 animate-fade-in">
        <h1 className="text-8xl font-bold tracking-tighter">
          <span className="block text-2xl text-gray-400 mb-4 animate-glow">Hi, I am</span>
          <span className="text-gradient">KANISHK</span>
          <span className="block mt-2 text-gradient">DUNGARWAL</span>
        </h1>
        <h2 className="text-3xl font-light text-gray-400 animate-glow">
          Cybersecurity Professional
        </h2>
        <div className="flex flex-col space-y-2 text-gray-400 glass-effect p-6 rounded-lg">
          <p>Pune, Maharashtra - 412101</p>
          <p>kanishkdungarwal24@gmail.com</p>
        </div>
        <div className="flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/kanishk-dungarwal-19013420a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-all duration-300 hover-lift"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a 
            href="mailto:kanishkdungarwal24@gmail.com" 
            className="text-white hover:text-purple-400 transition-all duration-300 hover-lift"
          >
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
      <button 
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-purple-400 transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="w-12 h-12" />
      </button>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none animate-lightning opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent" />
      </div>
    </header>
  );
}