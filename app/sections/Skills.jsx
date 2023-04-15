'use client';

import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import styles from '../styles/styles.jsx';
import { services } from "../constants/index.jsx";
import {TypingText} from '../components/CustomText';
import { fadeIn, staggerContainer, textVariant } from '../utils/index.jsx';


const ServiceCard = ({ index, title, imgUrl }) => (
  <Tilt className='sm:w-[160px] w-[140px]'>
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-3 px-8 min-h-[160px] flex justify-evenly items-center flex-col'
      >
        <img
          src={imgUrl}
          alt='web-development'
          className='w-[240px] h-[150px] object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {

  return (
    <section id='skills' className={`${styles.paddings}`} id="explore">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My Skillset" textStyles="text-center" />
        
        <div className='mt-20 flex justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;



