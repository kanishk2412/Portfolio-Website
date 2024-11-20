import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Cybersecurity Analyst",
      company: "eSecurity Technologies",
      period: "July 2024 - Present",
      location: "AHMEDABAD",
      video: "https://assets.mixkit.co/videos/preview/mixkit-cyber-security-and-data-protection-animation-7755-large.mp4",
      responsibilities: [
        "Performed comprehensive VAPT on client websites to identify security flaws, potential threats, and vulnerabilities",
        "Provided actionable remediation steps, and improved the security posture of web applications",
        "Project: PentestX Database"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "TechLang Edutech",
      period: "June 2023 - August 2023",
      location: "BENGALURU",
      video: "https://assets.mixkit.co/videos/preview/mixkit-digital-security-system-interface-4549-large.mp4",
      responsibilities: [
        "Applied footprinting and OSINT techniques to gather essential information about target domains",
        "Created detailed reports on current security threats and vulnerabilities",
        "Researched emerging trends in cybersecurity threats, risks, and countermeasures"
      ]
    }
  ];

  return (
    <section className="space-y-16" id="experience">
      <h2 className="text-4xl font-bold">Work Experience</h2>
      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-700">
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={exp.video} type="video/mp4" />
              </video>
            </div>
            <div className="relative space-y-4 p-8 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-3xl font-bold">{exp.title}</h3>
              <div className="flex items-center space-x-6 text-gray-400">
                <span>{exp.company}</span>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-400">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="block w-2 h-2 mt-2 mr-4 bg-white rounded-full" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}