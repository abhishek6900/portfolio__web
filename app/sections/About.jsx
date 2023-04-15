'use client';

import { motion } from 'framer-motion';
import {TypingText} from '../components/CustomText'
import styles from '../styles/styles.jsx';
import { fadeIn, staggerContainer } from '../utils/index.jsx';

const About = () => (
    <section id="about" className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| A Little About Me" textStyles="text-center" />
  
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          
  
          Hello, I am <span className="font-extrabold text-white">Abhishek Vishal</span>. I am a <span className="font-extrabold text-white">Full-Stack Developer</span> and currently pursuing <span className="font-extrabold text-white">Applied Electronics and Instrumentation Engineering</span> from Heritage Institute of Technology, Kolkata.
          <br />
          
        </motion.p>
  
        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        Apart from coding my other hobbies are:
          <ul className="list-disc list-inside text-left">
            <li><span className="font-extrabold text-white">Gaming</span></li>
            <li><span className="font-extrabold text-white">Video Editor</span></li>
            <li><span className="font-extrabold text-white">Writing Raps</span></li>
          </ul>
        </motion.p>
  
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
  
  export default About;