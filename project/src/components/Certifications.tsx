import React from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    "Google Cyber Security Professional",
    "Certified AppSec Practitioner",
    "Ethical Hacking",
    "Search engine optimization",
    "TCS Cybersecurity Job Simulation",
    "Mastercard Cybersecurity Job Simulation"
  ];

  return (
    <section className="space-y-16">
      <h2 className="text-4xl font-bold">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="group relative p-8 border border-white/10 hover:border-white/20 transition-colors"
          >
            <Award className="w-8 h-8 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <p className="text-xl">{cert}</p>
          </div>
        ))}
      </div>
    </section>
  );
}