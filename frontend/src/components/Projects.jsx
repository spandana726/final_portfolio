import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: 'AI-Based Phishing Detection System',
      date: 'May 2024 – July 2024',
      description:
        'Built a real-time phishing detection system integrating ML + Chrome Extension. Processed 5,000+ URLs for live classification with Flask + TensorFlow backend, achieving 75% improvement in phishing prediction accuracy.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'Chrome Extension', 'NLP'],
      image: 'https://customer-assets.emergentagent.com/job_devfolio-spandana/artifacts/uc7sbn2c_Screenshot%202025-11-01%20152825.png',
      github: 'https://github.com/spandana726/AI-based-Phishing-Detection-System',
      demo: null,
    },
    {
      title: 'Vitamin Deficiency Detection using Computer Vision',
      date: 'September 2024 - November 2024',
      description:
        'Developed a computer vision system using OpenCV and CNN models to detect vitamin deficiencies from facial images. Achieved 90% predictive accuracy (+20% over baseline) and enhanced data quality by 80% through preprocessing.',
      technologies: ['Python', 'OpenCV', 'CNN', 'SVM', 'TensorFlow'],
      image: 'https://customer-assets.emergentagent.com/job_devfolio-spandana/artifacts/vggx0bx2_Screenshot%202025-11-01%20152542.png',
      github: 'https://github.com/spandana726/Vitamin_Deficiency_Detection',
      demo: null,
    },
    {
      title: 'QueryTube AI',
      date: 'October 2025 - Present',
      description:
        'Developing a semantic search app using YouTube Data API for context-aware video recommendations with modern AI/ML techniques for search optimization.',
      technologies: ['Python', 'AI/ML', 'YouTube API', 'Semantic Search', 'Flask'],
      image: 'https://customer-assets.emergentagent.com/job_devfolio-spandana/artifacts/qtpyd5en_Screenshot%202025-11-01%20152656.png',
      github: 'https://github.com/AabidMK/QueryTube_Infosys_Internship_OCT25/tree/Spandana',
      demo: null,
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-[#0D1B2A] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-blue-500 font-semibold text-sm mb-3">{project.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-sm font-medium flex-1 justify-center"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 text-sm font-medium flex-1 justify-center"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
