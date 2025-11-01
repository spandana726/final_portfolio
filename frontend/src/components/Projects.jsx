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
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
      github: 'https://github.com/spandana726/AI-based-Phishing-Detection-System',
      demo: null,
    },
    {
      title: 'Vitamin Deficiency Detection using Computer Vision',
      date: 'September 2024 - November 2024',
      description:
        'Developed a computer vision system using OpenCV and CNN models to detect vitamin deficiencies from facial images. Achieved 90% predictive accuracy (+20% over baseline) and enhanced data quality by 80% through preprocessing.',
      technologies: ['Python', 'OpenCV', 'CNN', 'SVM', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
      github: 'https://github.com/spandana726/Vitamin_Deficiency_Detection',
      demo: null,
    },
    {
      title: 'QueryTube AI',
      date: 'October 2025 - Present',
      description:
        'Developing a semantic search app using YouTube Data API for context-aware video recommendations with modern AI/ML techniques for search optimization.',
      technologies: ['Python', 'AI/ML', 'YouTube API', 'Semantic Search', 'Flask'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-100 dark:bg-[#0D1B2A] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Project Image */}
                <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className="md:w-2/3 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-500 font-semibold mb-4">{project.date}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
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
