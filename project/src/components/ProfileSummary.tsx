import React from 'react';

export default function ProfileSummary() {
  return (
    <section className="relative group" id="about">
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative space-y-6 p-8">
        <h2 className="text-4xl font-bold">Profile Summary</h2>
        <p className="text-gray-400 text-xl leading-relaxed max-w-3xl">
          Goal-oriented cybersecurity professional passionate about developing and implementing security solutions, 
          with a strong understanding of web application security, ethical hacking, and AI-driven security solutions. 
          Proven ability to manage projects, generate comprehensive VAPT reports and collaborate with teams to strengthen security measures.
        </p>
      </div>
    </section>
  );
}