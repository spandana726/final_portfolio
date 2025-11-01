import React, { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-violet-500"></div>

          {/* Experience Item */}
          <div
            className={`relative pl-20 pb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Briefcase className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div className="bg-gray-100 dark:bg-[#0D1B2A] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Intern
              </h3>
              <h4 className="text-xl text-blue-500 font-semibold mb-3">
                Infosys Springboard Virtual Internship
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
                October 2025 – Present
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Developing QueryTube AI, a semantic search app using YouTube Data API for context-aware video recommendations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Designing and integrating front-end and back-end architecture for a scalable user experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span>Working on data retrieval, semantic indexing, and search optimization using modern AI/ML techniques.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
