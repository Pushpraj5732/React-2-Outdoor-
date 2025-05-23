import React from 'react';
import { motion } from 'framer-motion';
import BgImage from './assets/Horseshoe-Bend-Arizona.jpg';
import { FaPlay } from 'react-icons/fa'; // npm install react-icons

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Overlay for dark fade effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          The Great Outdoors
        </h1>
        <p className="text-lg md:text-2xl font-light mb-8">
          Wonder often, wonder always.
        </p>

        {/* Play button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-14 h-14 rounded-full border border-white flex items-center justify-center hover:scale-110 transition duration-300"
        >
          <FaPlay className="text-white text-sm ml-1" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
