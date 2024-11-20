import React from 'react';
import { Shield, Code, Database, Settings } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Security Tools & Techniques",
      skills: ["OWASP Top 10", "Secure Coding Practices", "VAPT", "Kali Linux", "Burp suite", "Metasploit"]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "HTML", "CSS"]
    },
    {
      icon: Database,
      title: "Database Management",
      skills: ["MySQL"]
    },
    {
      icon: Settings,
      title: "Other Skills",
      skills: ["Agile Methodologies", "Microsoft Products", "Tableau"]
    }
  ];

  return (
    <section className="space-y-16">
      <h2 className="text-4xl font-bold text-gradient">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="group space-y-6 glass-effect p-8 rounded-lg hover-lift">
              <div className="flex items-center space-x-4">
                <Icon className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-semibold group-hover:text-gradient transition-all duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="p-4 border border-white/10 hover:border-purple-400/30 rounded-lg transition-all duration-300 hover:bg-white/5"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}