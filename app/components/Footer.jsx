'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants/index';

import styles from '../styles/styles.jsx';
import { footerVariants } from '../utils/index';


const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Connect with me!
        </h4>

        <div className="flex gap-4">
            
              <a href='https://twitter.com/aBhiSheK___V'>
                <img 
                src='/twitter.svg'
                alt='Twitter'
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                />

              </a>
              <a href='https://www.linkedin.com/in/abhishek-vishal-6455a7270/'>
                <img 
                src='/linkedin.svg'
                alt='linkedin'
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                />

              </a>
              <a href=''>
                <img 
                src='/instagram.svg'
                alt='instagram'
                className="w-[24px] h-[24px] object-contain cursor-pointer"
                />

              </a>
          
          </div>

      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            Abhishek
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023. All rights reserved.
          </p>

          
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
