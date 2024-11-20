import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Crowd Management AI",
      description: "Designed an AI-driven solution for real-time crowd density analysis to enhance safety and management",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&q=80",
      link: "https://github.com/kanishk2412/Suspicious-Activity-Detection-in-Crowded-Areas-using-Deep-Learning-"
    },
    {
      title: "Case Management System",
      description: "Designed and implemented a scalable web application for Cyber Police, enhanced workflow efficiency",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      link: "https://example.com/case-management-system"
    },
    {
      title: "Attendance Management System",
      description: "Created a comprehensive database system in mysql workbench for tracking attendance records and improving efficiency",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80",
      link: "https://example.com/attendance-management-system"
    },
    {
      title: "Password Manager",
      description: "Built a simple website for storing your passwords and retrieve or see whenever you want",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      link: "https://example.com/password-manager"
    }
  ];

  return (
    <section className="space-y-16" id="projects">
      <h2 className="text-4xl font-bold text-gradient">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg hover-lift"
          >
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover filter grayscale group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>
            <div className="relative p-8 min-h-[300px] flex flex-col justify-end space-y-4 border-gradient">
              <h3 className="text-2xl font-bold flex items-center group-hover:text-purple-400 transition-colors">
                {project.title}
                <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </h3>
              <p className="text-gray-400 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
