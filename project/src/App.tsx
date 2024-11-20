import React from 'react';
import Header from './components/Header';
import ProfileSummary from './components/ProfileSummary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
          <Header />
          <div id="about">
            <ProfileSummary />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="certifications">
            <Certifications />
          </div>
          <div id="education">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;