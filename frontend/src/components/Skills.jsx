import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Wrench, BookOpen, Brain, Rocket } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    },
    {
      title: 'Web Technologies',
      icon: <Code className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'React'],
    },
    {
      title: 'Frameworks / Libraries',
      icon: <Database className="w-6 h-6" />,
      skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas'],
    },
    {
      title: 'Tools / Platforms',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    },
    {
      title: 'Core Concepts',
      icon: <BookOpen className="w-6 h-6" />,
      skills: ['Data Structures & Algorithms', 'Operating Systems', 'OOP', 'Networking', 'DBMS'],
    },
    {
      title: 'Currently Learning',
      icon: <Rocket className="w-6 h-6" />,
      skills: ['Node.js', 'Advanced React'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-[#0D1B2A] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-blue-500">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-400">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
