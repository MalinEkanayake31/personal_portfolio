import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const timelineData = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "UCSC – BSc in Computer Science",
      period: "2023–Present",
      description: "Currently pursuing my degree with focus on AI/ML and software engineering"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "CIMA Operational Level",
      period: "Score: 110/150",
      description: "Professional qualification in management accounting and business strategy"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Business & Finance Essentials Certificate",
      period: "CIMA FLP",
      description: "Foundation level program in business and financial management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              Motivated third-year Computer Science undergraduate at UCSC with a passion for AI, 
              full-stack development, and business-driven tech solutions. CIMA-qualified with a 
              strong background in finance and data.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I specialize in building intelligent systems that bridge the gap between technology 
              and business needs. My unique combination of technical skills and financial expertise 
              allows me to create solutions that are both innovative and commercially viable.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex items-start space-x-4 p-6 bg-primary rounded-2xl border border-primary-dark/20 hover:border-accent/30 transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium mb-2">
                      {item.period}
                    </p>
                    <p className="text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 