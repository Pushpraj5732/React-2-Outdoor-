import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  },
});

const SecondPagr = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const images = [
    { src: image1, label: 'Beaches' },
    { src: image2, label: 'Canyons' },
    { src: image3, label: 'Lakes' },
  ];

  return (
    <div className="bg-black min-h-screen text-white px-8 py-12 flex flex-col items-center">
      <motion.h2
        className="text-4xl font-light mb-4"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        Explore the World
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center mb-12 text-gray-300 leading-relaxed"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        We look to provide the most authentic contentt from athletes, adventuren,
        explorers travellers autound the world. Our long them mission is to educate
        inspire and enuble all peoples to experience & protect wildeness.
      </motion.p>

      <div className="flex flex-wrap gap-8 max-w-7xl w-full justify-center mb-12">
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[300px] md:w-[400px] lg:w-[400px] h-[550px] overflow-hidden rounded-lg shadow-lg"
            variants={imageVariant(index * 0.6)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold z-10">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="text-blue-400 hover:text-blue-700 transition px-8 py-3 rounded-lg font-semibold text-lg "
        type="button"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        See More
      </motion.button>
    </div>
  );
};

export default SecondPagr;
