import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, School } from 'lucide-react';

const About = () => {
  const mainCards = [
    {
      id: 'university',
      icon: <GraduationCap className="w-6 h-6" />,
      title: "University of Colombo School of Computing, Sri Lanka",
      subtitle: "B.Sc. in Computer Science",
      period: "2023–Present",
      description: "Currently pursuing my degree with focus on AI/ML and software engineering",
      category: "University",
      expandedDetails: [
        "Focus on AI/ML, Data Science, and Software Engineering",
        "Hands-on projects in full-stack development and machine learning",
        // "Active participation in coding competitions and hackathons"
      ]
    },
    {
      id: 'school',
      icon: <School className="w-6 h-6" />,
      title: "Rahula College Matara",
      subtitle: "2009–2021",
      period: "2009–2021",
      description: "Secondary education with excellent academic performance",
      category: "Secondary",
      expandedDetails: [
        "G.C.E A/Ls 2021 - Combined Mathematics: A, Chemistry: A, Physics: B",
        "G.C.E O/Ls 2018 - 9A (English Medium)",
        // "Strong foundation in Mathematics and Sciences"
      ]
    },
    {
      id: 'cima',
      icon: <Award className="w-6 h-6" />,
      title: "CIMA",
      subtitle: "2023–Present",
      period: "2023–Present",
      description: "Professional qualification in management accounting and business strategy",
      category: "Professional",
      expandedDetails: [
        "CIMA Foundational level - 2024 November - 2024 February",
        "CIMA Operational level - Score: 110 - 2024 February - 2024 May",
        "CIMA Management level - 2024 May - Present"
      ]
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

  const Card = ({ item }) => (
    <motion.div
      key={item.id}
      variants={itemVariants}
      className="bg-primary rounded-2xl border border-primary-dark/20 shadow-sm p-6 flex flex-col h-full"
    >
      <div className="flex items-start space-x-4 mb-3">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
          {item.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="text-lg font-semibold text-text-primary">
              {item.title}
            </h3>
            <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
              {item.category}
            </span>
          </div>
          <p className="text-accent font-medium mb-1">
            {item.subtitle}
          </p>
          <p className="text-text-muted text-sm mb-2">
            {item.period}
          </p>
        </div>
      </div>
      <div className="mb-2 text-text-secondary text-sm">{item.description}</div>
      <div className="border-t border-accent/20 pt-3 space-y-2 mt-auto">
        {item.expandedDetails.map((detail, idx) => (
          <div key={idx} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-text-secondary text-sm leading-relaxed">{detail}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

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

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 flex-1"
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm Malin Ashmitha Ekanayake, a 3rd-year Computer Science undergraduate at the University of Colombo School of Computing (UCSC).
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Passionate about Machine Learning and Generative AI, with growing expertise in Data Science, Data Analytics, and Cloud Computing. Skilled in Full-Stack Development and driven to create intelligent, impactful solutions.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Alongside my technical journey, I'm currently pursuing the CIMA qualification, building a solid foundation in financial reporting, business strategy, and data-driven decision-making. This combination helps me approach problems at the intersection of technology and business with a strategic mindset. I'm also deeply interested in project management and effective execution.
            </p>
          </motion.div>

          {/* Education & Certifications Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 flex-1 w-full"
          >
            {mainCards.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 