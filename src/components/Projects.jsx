import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'ISO 27001:2022 ISMS Toolkit Development & Implementation',
      description: 'Designed and developed a comprehensive ISO 27001:2022 ISMS toolkit including risk assessment templates, Statement of Applicability (SoA), and access control checklists. The project focused on strengthening information security governance and compliance readiness using industry best practices.',
      technologies: ['ISO 27001:2022', 'Risk Assessment Methodologies', 'Security Policies', 'Documentation Tools'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop',
      github: 'https://github.com/TharinduHesh/iso27001-information-security-toolkit',
      color: 'Navy Blue (#0F172A'
    },
    {
  title: 'Cryptography Toolkit',
  description: 'A GUI-based cryptographic toolkit built with Python and Tkinter. Combines secure messaging, file encryption, hash cracking, digital signatures, and steganography into a single educational application for hands-on learning of real-world cryptography.',
  technologies: ['Python', 'Tkinter', 'Cryptography', 'Pillow'],
  image: '/assets/images/crypto.png',
  github: 'https://github.com/TharinduHesh/Crypto_toolkit',
  demo: '#', 
  color: '#ADD8E6'
}
,
    {
      title: 'Secure Web Application for Information Security Policy Management',
      description: 'Developed and demonstrated a secure policy-awareness web application with AUP, compliance tracking, and secure coding practices for an organizational information security use case.',
      technologies: ['React.js','Node.js', 'Express.js', 'Firebase', 'JWT+MFA'],
      image: '/assets/images/web.png',
      github: 'https://github.com/TharinduHesh/Secure-Mind--DynamicBiz',
      demo: '#',
      color: ' #FFFF00'
    }

    {
  title: 'TaskFlow – Smart Task & To-Do Manager',
  description: 'Designed and developed a modern productivity application that enables users to create, organize, and track daily tasks using priority levels, due dates, reminders, productivity insights, and customizable dark and light modes.',
  technologies: ['JavaScript', 'React.js', 'Node.js', 'LocalStorage', 'CSS'],
  image: '/assets/task.png',
  github: 'https://github.com/TharinduHesh/Todo-manager-app',
  demo: '#',
  color: '#FF69B4'
}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-4 pt-16 pb-0 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my cybersecurity projects showcasing my skills in network security,
            penetration testing, and secure application development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-dark/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
