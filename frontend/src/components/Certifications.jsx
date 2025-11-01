import React, { useEffect, useRef, useState } from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
      link: 'https://drive.google.com/file/d/198Q6tT3Z_1BRVjv2zTQW-GdPm1RPCq5n/view',
    },
    {
      title: 'Oracle Autonomous Database Cloud 2025 Professional',
      link: 'https://drive.google.com/file/d/1RtLY7u50i8FEgGJly03Up8n7kU5ywWLd/view',
    },
    {
      title: 'ServiceNow CSA (2025)',
      link: 'https://drive.google.com/file/d/1iJMqY3047L_0b-5lvBO7Ztcgdg_L5zem/view',
    },
    {
      title: 'ServiceNow CAD (2025)',
      link: 'https://drive.google.com/file/d/1dLCmXACMKp6IHMp0VR-W_cDF3H48VEcG/view',
    },
    {
      title: 'Google Cloud Career Launchpad – Data Analyst',
      link: 'https://drive.google.com/file/d/1GGkVrCFeWLH0m5ZfFIHY8dtTzl1cAU12/view',
    },
    {
      title: 'Deloitte Australia Data Analytics Program',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_aqwPsvJXbD9ytcW6w_1749283828064_completion_certificate.pdf',
    },
    {
      title: 'Generative AI by Google Cloud Skills Boost',
      link: 'https://drive.google.com/file/d/1XTZkPPjT0bYajxbeIKcs05uS0cwMmgFG/view',
    },
    {
      title: 'Infosys Springboard Certifications (AI, ML, NLP, Data Science)',
      link: 'https://drive.google.com/drive/folders/1otjAlrCTzHS6l_yBrIjRPnDzwteXxcZj',
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gray-100 dark:bg-[#0D1B2A] p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-500">
                    <span className="text-sm font-medium">View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
