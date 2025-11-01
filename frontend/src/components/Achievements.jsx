import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Users } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: 'Content Creation Head – Lexis Club',
      description: 'Led creative and outreach initiatives',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Smart India Hackathon (SIH)',
      description: 'Top 10 team for innovation and execution',
      icon: <Trophy className="w-8 h-8" />,
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-[#0D1B2A] p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
