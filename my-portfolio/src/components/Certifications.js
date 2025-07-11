import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Users, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "CIMA Operational Level",
      score: "110/150",
      description: "Professional qualification in management accounting and business strategy",
      category: "Professional"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "CIMA FLP – Business & Finance Essentials",
      score: "Certificate",
      description: "Foundation level program in business and financial management",
      category: "Professional"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Model United Nations",
      score: "Leadership",
      description: "International diplomacy and leadership experience",
      category: "Leadership"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Sports Leadership",
      score: "Team Captain",
      description: "Led sports teams and organized tournaments",
      category: "Leadership"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Rotaract",
      score: "Member",
      description: "Community service and youth leadership development",
      category: "Leadership"
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

  const cardVariants = {
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
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Certifications & Achievements
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
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-primary-light rounded-3xl p-6 h-full border border-primary-dark/20 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-dark transition-all duration-300">
                    {cert.icon}
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full border border-accent/20">
                    {cert.category}
                  </span>
                </div>

                {/* Title and Score */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-semibold text-lg">
                    {cert.score}
                  </p>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed">
                  {cert.description}
                </p>
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
          <div className="bg-primary-light rounded-3xl p-8 border border-primary-dark/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Professional Development
            </h3>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              My certifications and leadership experiences demonstrate my commitment to 
              continuous learning and professional growth, combining technical expertise 
              with strong business acumen and leadership skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 