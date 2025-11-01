import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* About Me Card */}
          <div
            className={`w-full lg:w-1/2 bg-gray-100 dark:bg-[#0D1B2A] p-8 rounded-xl shadow-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Hi, I'm Gunaganti Spandana
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              A Computer Science Engineering student passionate about Software Development, Artificial Intelligence, and Machine Learning.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm passionate about learning, exploring cutting-edge technologies, and building AI-powered, full-stack applications that solve real-world challenges. My goal is to collaborate with professionals and contribute to impactful projects that make a difference in the tech industry.
            </p>
          </div>

          {/* Education Card */}
          <div
            className={`w-full lg:w-1/2 bg-gray-100 dark:bg-[#0D1B2A] p-8 rounded-xl shadow-lg transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-7 h-7 text-blue-500" />
              Education
            </h3>

            <div className="space-y-6">
              {/* B.Tech */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  B.Tech in Computer Science
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  CMR Technical Campus, Hyderabad
                </p>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>2022 - Present</span>
                  <span>CGPA: 8.49/10</span>
                </div>
              </div>

              {/* Intermediate */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  Intermediate (MPC)
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Narayana Junior College, Hyderabad
                </p>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                  <span>2020 - 2022</span>
                  <span>Percentage: 98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
