'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles/styles.jsx';
import { insights } from '../constants/index.jsx';
import { staggerContainer } from '../utils/index.jsx';
import { TitleText, TypingText, InsightCard } from '../components';

const Projects = () => (
    <section id='projects' className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Personal Projects" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
  
export default Projects;