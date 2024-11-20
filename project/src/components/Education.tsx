import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="space-y-16" id="education">
      <h2 className="text-4xl font-bold">Education</h2>
      <div className="relative group p-8 border border-white/10 hover:border-white/20 transition-colors">
        <GraduationCap className="w-12 h-12 mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
        <h3 className="text-2xl font-bold mb-4">
          Symbiosis Skills & Professional University
        </h3>
        <p className="text-xl text-gray-400 mb-2">
          Bachelor's of Technology in CSIT (Cyber Security)
        </p>
        <p className="text-gray-400">
          2021 - 2025 | CGPA: 7.997
        </p>
      </div>
    </section>
  );
}