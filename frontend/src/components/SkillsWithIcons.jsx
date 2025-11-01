import React, { useEffect, useRef, useState } from 'react';

const SkillsWithIcons = () => {
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
      skills: [
        { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
        { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
        { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'SQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
        { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      ],
    },
    {
      title: 'Frameworks / Libraries',
      skills: [
        { name: 'TensorFlow', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'NumPy', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg' },
        { name: 'Pandas', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg' },
      ],
    },
    {
      title: 'Tools / Platforms',
      skills: [
        { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg' },
        { name: 'Jupyter', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg' },
        { name: 'Google Colab', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg' },
      ],
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'DSA', icon: 'https://img.icons8.com/fluency/96/sorting-algorithm.png' },
        { name: 'OS', icon: 'https://img.icons8.com/fluency/96/windows-10.png' },
        { name: 'OOP', icon: 'https://img.icons8.com/fluency/96/code.png' },
        { name: 'Networking', icon: 'https://img.icons8.com/fluency/96/network.png' },
        { name: 'DBMS', icon: 'https://img.icons8.com/fluency/96/database.png' },
      ],
    },
    {
      title: 'Currently Learning',
      skills: [
        { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'Advanced React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-blue-500 mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-3 p-4 bg-gray-200 dark:bg-[#1e293b] rounded-xl hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 items-center justify-center text-white font-bold text-lg hidden">
                        {skill.name[0]}
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-200 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsWithIcons;
