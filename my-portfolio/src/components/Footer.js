import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark py-12 border-t border-primary-dark/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <p className="text-text-secondary">
              © {currentYear} Malin Ekanayake. All rights reserved.
            </p>
            <p className="text-text-muted text-sm mt-1">
              Made with <Heart className="inline w-4 h-4 text-red-500" /> using React & Tailwind
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <motion.a
              href="mailto:malinash246@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-primary-light rounded-xl text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/malin-ekanayake-92a86b26b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-primary-light rounded-xl text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://github.com/MalinEkanayake31"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 bg-primary-light rounded-xl text-accent hover:bg-accent hover:text-primary-dark transition-all duration-300"
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-accent hover:text-accent-light transition-colors duration-300"
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 