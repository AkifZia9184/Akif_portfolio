
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Server, Palette, Languages } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skills = {
    Frontend: {
      icon: Palette,
      techs: ['HTML', 'React', 'CSS', 'Tailwind CSS', 'Angular', 'Javascript'],
      color: 'from-pink-500 to-purple-600'
    },
    Backend: {
      icon: Server,
      techs: ['Django', 'Python', 'PostgreSQL', 'MongoDB', 'Express', 'FastAPI'],
      color: 'from-green-500 to-blue-600'
    },
    Language: {
      icon: Languages,
      techs: ['C', 'C++', 'Python', 'java', 'React', 'Angular'],
      color: 'from-orange-500 to-red-600'
    },
    Tools: {
      icon: Code2,
      techs: ['Git', 'Figma', 'VS Code', 'Postman', 'TraeAi', 'Google Collab'],
      color: 'from-blue-500 to-cyan-600'
    }
  };

  return (
    <section id="skills" className="section-padding bg-navy-900/50">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, data], index) => {
            const IconComponent = data.icon;
            const isActive = activeCategory === category;
            
            return (
              <Card 
                key={category} 
                className={`glass-card border-white/10 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-electric-400/50 animate-scale-in ${
                  isActive ? 'scale-105 border-electric-400/50' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveCategory(category)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${data.color} mr-3 transition-transform duration-300 ${
                      isActive ? 'scale-110' : ''
                    }`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {data.techs.map((tech, techIndex) => (
                      <div 
                        key={tech} 
                        className={`relative overflow-hidden transition-all duration-300 ${
                          isActive ? 'translate-x-0 opacity-100' : ''
                        }`}
                        style={{ 
                          transitionDelay: isActive ? `${techIndex * 0.1}s` : '0s' 
                        }}
                      >
                        <div className="flex justify-between items-center text-gray-300 hover:text-electric-400 transition-colors cursor-default p-2 rounded hover:bg-white/5">
                          <span>{tech}</span>
                          <div className={`h-1 bg-gradient-to-r ${data.color} rounded-full transition-all duration-500 ${
                            isActive ? 'w-8' : 'w-4'
                          }`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
