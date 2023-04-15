'use client';

import { motion } from 'framer-motion';
import {Type} from '../components/index'
import styles from '../styles/styles.jsx';
import { slideIn, staggerContainer, textVariant } from '../utils/index.jsx';
import Image from 'next/image';

const Hero = () => (

    <section className={`${styles.yPaddings} sm:pl-12 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center sm:items-start items-center 
         flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Abhishek
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Vishal</h1>
            
          </motion.div>
          <motion.div 
          variants={textVariant(1.3)}
          className={styles.typeWriterText}>
            <Type />
          </motion.div>
        </div>
  
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className={`${styles.xPaddings} relative w-full md:-mt-[20px] mt-[20px] flex justify-center md:justify-end sm:justify-end`}
        >
          <div className="absolute w-full md:w-6/12 sm:6/12 h-[400px] hero-gradient rounded-[140px] z-[0] -top-[30px]" />
  
          <Image
            src="/devImage.png"
            alt="hero_cover"
            className="w-full md:w-6/12 sm:w-6/12 sm:h-[400px] h-[350px] object-contain rounded-tl-[140px] z-10 relative"
          />
  
        </motion.div>
      </motion.div>
    </section>
  );
  
  export default Hero;