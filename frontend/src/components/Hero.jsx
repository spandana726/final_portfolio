import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Software Engineer', 'AI & ML Enthusiast'];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-gray-900 dark:text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Gunaganti Spandana
          </span>
        </h1>

        {/* Subtitle with hover effects */}
        <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 flex items-center justify-center flex-wrap gap-2">
          <span>I'm a </span>
          <span className="relative group cursor-pointer">
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent font-semibold">
              {displayedText}
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300"></span>
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A dedicated learner with strong problem-solving skills, aiming to create innovative and scalable solutions. 
          Currently seeking opportunities to gain hands-on experience and contribute to impactful projects in the tech industry.
        </p>

        {/* Social Links & Resume */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/spandana-gunaganti-23353727a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/spandana726"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/50"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:gunagantispandana@gmail.com"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://drive.google.com/file/d/1ih2na9QMXhFlcYIGuPvWqkIvEfiARce-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
