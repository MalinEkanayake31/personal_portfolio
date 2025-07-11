import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Settings, Bot, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Languages",
      skills: ["Python", "JavaScript", "C/C++", "PHP", "SQL"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Frameworks",
      skills: ["React", "Spring Boot", "FastAPI", "Tailwind", "Node.js"]
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Machine Learning",
      skills: ["scikit-learn", "TensorFlow", "LSTM", "LangChain", "HuggingFace"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools",
      skills: ["Docker", "GitHub", "Postman", "Stripe API"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-primary-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="bg-primary rounded-3xl p-6 border border-primary-dark/20 hover:border-accent/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-primary-light rounded-xl px-4 py-3 text-center border border-primary-dark/20 hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary rounded-3xl p-8 border border-primary-dark/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Continuous Learning
            </h3>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              I'm constantly expanding my skill set through hands-on projects, 
              online courses, and staying updated with the latest technologies 
              in AI/ML and full-stack development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 