import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import img1 from './assets/5.jpg';
import img2 from './assets/6.jpg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const imageVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay },
  },
});

const articles = [
  {
    date: 'APRIL 30, 2021',
    title: 'Symphonies in Steel',
    description: 'Crossing the Golden Gate Bridge from San Francisco, you arrive in March even before landing on solid ground.',
    image: img1,
  },
  {
    date: 'JANUARY 15, 2023',
    title: 'The Dune Journey',
    description: 'Walking across these golden dunes with a caravan offers peace, rhythm, and an ancient perspective.',
    image: img2,
  },
];

const ThirdPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <div className="bg-black text-white px-6 py-16 min-h-screen text-center">
      <motion.h2
        className="text-4xl font-light mb-4"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        The Journal
      </motion.h2>

      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-16"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        Our favorite stories about public lands and opportunities for you to get involved
        in protecting your outdoor experience.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center mb-12">
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            className="w-[400px] md:w-[500px]"
            variants={imageVariant(idx * 0.5)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <img
              src={article.image}
              alt={article.title}
              className="rounded-lg mb-4 w-full h-[320px] object-cover shadow-lg"
            />
            <p className="text-sm text-gray-400 mb-1">{article.date}</p>
            <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-300 text-base">{article.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="text-blue-400 hover:text-blue-700 transition px-8 py-3 rounded-lg font-semibold text-lg"
        type="button"
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        View All Posts
      </motion.button>
    </div>
  );
};

export default ThirdPage;
