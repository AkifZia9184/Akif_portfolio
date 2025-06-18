import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  ExternalLink,
  Code2,
  MapPin,
  Calendar,
  Quote,
  Github,
  GraduationCap
} from 'lucide-react';
import Navigation from '../components/Navigation';
import SkillsSection from '../components/SkillsSection';
import ContactForm from '../components/ContactForm';

const Index = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: "Skill Map",
      description: "Skill Map is a cloud-based platform that leverages AI/ML to dynamically match individuals to projects based on their skills, availability, and experience. It features intelligent task coordination, adaptive progress tracking, and real-time team management—designed to optimize collaboration in tech-driven environments.",
      tech: ["Angular", "Django", "PostgreSQL", "HTML", "CSS"],
      image: "1.png",
      github: "https://github.com/example/ecommerce-platform",
      live: "https://ecommerce-demo.example.com",
      featured: true
    },
    {
      title: "AI Task Companion",
      description: "A smart, always-available assistant in your pocket, this AI companion app helps with daily tasks, answers your questions, keeps you organized, and even chats like a friend. Whether you need productivity support, emotional check-ins, or just someone to talk to, it adapts to your style and learns as you interact.",
      tech: ["react", "vite", "supabase", "typescript"],
      image: "Task.png",
      github: "https://github.com/AkifZia9184/ai-task-companion-love",
      live: "https://ai-task-companion-love-akifs-projects-0d9d9647.vercel.app/"
    },
    {
      title: "CryptoGraphy Explorer",
      description: "Cryptography Explorer is a sleek tool for diving into the world of encryption and decryption. It lets users experiment with classic and modern cryptographic algorithms, visualize how data transforms, and understand core security concepts—perfect for students, devs, or anyone curious about how secrets stay secret.",
      tech: ["HTML", "CSS", "React"],
      image: "cryptography.png",
      github: "https://github.com/AkifZia9184/Cryptography-Explorer",
      live: "https://weather-analytics.example.com"
    },
    {
      title: "Cricbuzz",
      description: "Cricbuzz is a lightweight  cricket score app built using C++. It fetches and displays live match updates, player stats, and schedules in a terminal-based UI. Designed for speed and simplicity, this project showcases how real-time sports data can be handled efficiently with core C++ logic and APIs. Perfect for C++ geeks who enjoy cricket as much as coding.",
      tech: ["C++", "OOP", "Classes"],
      image: "cricbuzz.webp",
      github: "https://github.com/AkifZia9184/Cricbuzz",
      live: "https://ai-chatbot-demo.example.com"
    }
  ];

  const experience = [
    {
      company: "National University of Computer and Emerging Sciences",
      position: "Full Stack Developer",
      duration: "2024 - 2025",
      location: "Chiniot-Faisalabad Campus, Pakistan",
      responsibilities: [
        "Designed and developed a cloud-enabled AI-based skill matching system from the ground up",
        "Led a team of developers to build modular components for task coordination and progress tracking",
        "Integrated CI/CD pipelines with Railway and Vercel, reducing deployment time by 60%"
      ]
    },
    {
      company: "Code Alpha",
      position: "Python Developer Intern",
      duration: "june 2023 - Aug 2023",
      location: "Remote",
      responsibilities: [
        "Built scalable web applications using Django and Flask",
        "Optimized ORM queries and database performance, improving response times by 35%",
        "Collaborated with frontend and UX teams to implement pixel-perfect, API-driven UIs"
      ]
    }
  ];

  const education = [
    {
      institution: "National University of Computer and Emerging Sciences",
      degree: "Bachelor of Science in Computer Science",
      duration: "2021 - 2025",
      location: "Chiniot-Faisalabad Campus, Pakistan",
      achievements: [
        "Specialized in Machine Learning and Artificial Intelligence",
        "Graduated with 3.0 CGPA"
      ]
    },
    {
      institution: "Forman Christian College Lahore",
      degree: "Pre-Engineering (Intermediate)",
      duration: "2019 - 2021",
      location: "Lahore, Pakistan",
      achievements: []
    }
    ,
    {
      institution: "The Loards International School System",
      degree: "Matriculation",
      duration: "2017 - 2029",
      location: "Lahore, Pakistan",
      achievements: []
    }
  ];

  const testimonials = [
    {
      text: "Alex is an exceptional developer who consistently delivers high-quality solutions. Their technical expertise and problem-solving skills are outstanding.",
      author: "Sarah Johnson",
      position: "Product Manager at TechCorp"
    },
    {
      text: "Working with Alex was a game-changer for our project. They brought innovative solutions and delivered everything on time with excellent quality.",
      author: "Michael Chen",
      position: "CTO at StartupFlow"
    },
    {
      text: "Alex's attention to detail and ability to translate complex requirements into elegant code makes them an invaluable team member.",
      author: "Emily Rodriguez",
      position: "Lead Designer at Digital Solutions"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" style={{ zIndex: 2 }}></div>
        <div className="container-custom section-padding text-center relative" style={{ zIndex: 3 }}>
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-electric-400 to-electric-600 p-1 hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-navy-900 overflow-hidden">
                  <img
                    src="Akif.jpg" 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Hafiz Akif Ziauddin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300">
              Software Engineer | Problem Solver | Tech Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Crafting exceptional digital experiences with modern technologies. 
              Passionate about building scalable solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="public/Akif Zia resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-electric-500 hover:bg-electric-600 text-navy-900 font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="section-padding relative min-h-screen flex items-center justify-center">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 text-justify">
                I’m a Computer Science student with a strong foundation in OOP, Data Structures & Algorithms, Software Architecture, and Development. Skilled in C++, Python, Oracle SQL, and full-stack web development with Angular and Django (PostgreSQL).
              </p>
              <p className="text-lg text-gray-300 mb-6 text-justify">
                I’ve deployed cloud-based applications using Vercel, Railway, and Neon, and am currently developing Skill Map — a cloud-enabled platform with AI/ML for adaptive skill matching and team coordination. Passionate about building scalable, user-centric solutions and eager to contribute to collaborative, tech-driven teams.
              </p>
              <p className="text-lg text-gray-300 mb-8 text-justify">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Education Section */}
      <section id="education" className="section-padding bg-navy-900/30 relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My academic journey and achievements
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-400 via-electric-500 to-transparent"></div>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={edu.institution} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-electric-400 rounded-full border-4 border-navy-900 z-10"></div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <Card className="glass-card border-white/10 animate-fade-in-left hover:border-electric-400/50 transition-all duration-300 hover:scale-105" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2 mb-4">
                          <div className="flex items-center mb-2">
                            <GraduationCap className="w-5 h-5 text-electric-400 mr-2" />
                            <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          </div>
                          <div className="text-lg gradient-text font-medium">{edu.institution}</div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {edu.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {edu.location}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start group">
                              <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="section-padding relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and technical achievements
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Featured Project */}
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={project.title} className="glass-card border-white/10 overflow-hidden group hover:border-electric-400/50 transition-all duration-300 animate-scale-in">
                <div className="grid lg:grid-cols-2">
                  <div className="relative overflow-hidden order-2 lg:order-1">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 order-1 lg:order-2">
                    <div className="text-sm text-electric-400 mb-2">Featured Project</div>
                    <h3 className="text-2xl font-semibold mb-4 ">{project.title}</h3>
                    <p className="text-gray-400 mb-6 text-justify">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-electric-500/20 text-electric-400 rounded-full text-sm hover:bg-electric-500/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="border-electric-400 text-electric-400 hover:bg-electric-400 hover:text-navy-900 hover:scale-105 transition-all duration-300">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-electric-500 hover:bg-electric-600 text-navy-900 hover:scale-105 transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
            
            {/* Regular Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => !p.featured).map((project, index) => (
                <Card key={project.title} className="glass-card border-white/10 overflow-hidden group hover:border-electric-400/50 transition-all duration-300 animate-scale-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm text-justify">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-electric-500/20 text-electric-400 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="border-electric-400 text-electric-400 hover:bg-electric-400 hover:text-navy-900 w-full hover:scale-105 transition-all duration-300">
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </Button>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button size="sm" className="bg-electric-500 hover:bg-electric-600 text-navy-900 w-full hover:scale-105 transition-all duration-300">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section-padding bg-navy-900/50 relative">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-400 via-electric-500 to-transparent"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.company} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-electric-400 rounded-full border-4 border-navy-900 z-10"></div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                    <Card className="glass-card border-white/10 animate-fade-in-left hover:border-electric-400/50 transition-all duration-300 hover:scale-105" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2 mb-4">
                          <h3 className="text-xl font-semibold">{exp.position}</h3>
                          <div className="text-lg gradient-text font-medium">{exp.company}</div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, i) => (
                            <li key={i} className="flex items-start group">
                              <div className="w-2 h-2 bg-electric-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                              <span className="text-gray-300 text-sm">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <ContactForm />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 relative">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-mono font-bold text-lg gradient-text mb-4 md:mb-0 hover:scale-105 transition-transform cursor-pointer">
              Hafiz Akif
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Hafiz Akif. All rights reserved.</p>
              <p className="text-sm mt-1">Built with React, TypeScript & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
