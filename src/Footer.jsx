import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img from './assets/Footer.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer
      className="bg-black text-white py-12 px-6 flex flex-col items-center"
      ref={ref}
    >
      <motion.div
        className="relative w-full rounded-lg shadow-lg mb-6"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        style={{ height: '550px' }}
      >
        <img
          src={img}
          alt="Footer Banner"
          className="w-full h-full object-cover rounded-lg"
        />
        <motion.p
          className="absolute inset-0 m-auto flex items-end justify-center px-6 py-3 text-white font-semibold rounded-lg shadow-lg cursor-pointer text-center max-w-lg select-none"
          variants={fadeIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          © 2024. All rights reserved | The Coding Journey
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
