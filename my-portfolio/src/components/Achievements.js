import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe } from 'lucide-react';

const achievements = [
  {
    icon: <Award size={32} className="text-accent" />,
    title: 'Rotaract Club of University of Colombo School of Computing',
    role: 'Director – Professional Development Avenue (2023–2024)',
    description: '',
  },
  {
    icon: <Users size={32} className="text-accent" />,
    title: 'Leo Club of University of Colombo',
    role: 'Active Member (2023–2024)',
    description: '',
  },
  {
    icon: <Globe size={32} className="text-accent" />,
    title: 'Model United Nations',
    role: 'Participant (SYMUN and THE MUN Councils, 2015–2017)',
    description: 'Developed teamwork, communication, and problem-solving skills',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Achievements = () => {
  return (
    <>
      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Extra Curricular Activities
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-primary-light rounded-3xl p-8 border border-primary-dark/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
                whileHover={{ y: -8, scale: 1.03 }}
              >
                <div className="mb-4">{ach.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {ach.title}
                </h3>
                <p className="text-accent font-semibold mb-2">{ach.role}</p>
                {ach.description && (
                  <p className="text-text-secondary text-sm leading-relaxed">{ach.description}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sports Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Sports
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Cricket */}
            <motion.div
              variants={cardVariants}
              className="bg-primary rounded-3xl p-8 border border-primary-dark/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><rect x="11" y="6" width="2" height="8" rx="1" fill="currentColor" /><rect x="9" y="14" width="6" height="2" rx="1" fill="currentColor" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">Cricket</h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1">
                <li>Rahula College Matara – U13, U15 (School Level)</li>
                <li>Sportech Sports Club – May 2022 Season</li>
                <li>Matara Sports Club – October 2022 Season</li>
                <li>University of Colombo – 2023–2024</li>
              </ul>
            </motion.div>
            {/* Badminton */}
            <motion.div
              variants={cardVariants}
              className="bg-primary rounded-3xl p-8 border border-primary-dark/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="10" y="4" width="4" height="10" rx="2" fill="currentColor" /><rect x="8" y="14" width="8" height="2" rx="1" fill="currentColor" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">Badminton</h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1">
                <li>Rahula College Matara – U15, U17</li>
                <li>District and All-Island Level Winner</li>
              </ul>
            </motion.div>
            {/* Baseball */}
            <motion.div
              variants={cardVariants}
              className="bg-primary rounded-3xl p-8 border border-primary-dark/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" strokeWidth="2" /><rect x="11" y="7" width="2" height="7" rx="1" fill="currentColor" /></svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">Baseball</h3>
              <ul className="text-text-secondary text-sm leading-relaxed space-y-1">
                <li>University of Colombo Team</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Achievements; 