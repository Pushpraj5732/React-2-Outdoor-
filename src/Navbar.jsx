import React from 'react';
import { motion } from 'framer-motion';
import Logo from './assets/Logo.png';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-black py-6 px-8 font-sans text-white uppercase tracking-wide text-sm"
    >
      <div className="flex justify-center items-center space-x-20 relative">
        {/* Left Side */}
        <div className="flex space-x-8">
          <motion.a
            href="#"
            className="hover:text-gray-400 transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-gray-400 transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Explore
          </motion.a>
        </div>

        {/* Center Logo - absolutely positioned */}
        <motion.div
          className=" left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: 'easeOut' }}
        >
          <img src={Logo} alt="Logo" className="h-8" />
        </motion.div>

        {/* Right Side */}
        <div className="flex space-x-8">
          <motion.a
            href="#"
            className="hover:text-gray-400 transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Journal
          </motion.a>
          <motion.a
            href="#"
            className="hover:text-gray-400 transition"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Search
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
