'use client';

import { motion } from 'framer-motion';

import styles from '../styles/styles.jsx';
import { startingFeatures } from '../constants/index.jsx';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/index.jsx';


const Experience = () => (
    <section id='experience' className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-[0.75] ${styles.flexCenter}`}
        >
          <img
            src="/work.png"
            alt="workExp"
            className="rounded-[23px] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 flex justify-center flex-col"
        >
          <TypingText title="| My Work Experience" />
          <TitleText title={<>Web Designer and Developer</>} />
          <div className="mt-[31px] flex flex-col max-w-[600px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                text={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
  
export default Experience
  