'use client';

import Link from "next/link"
import {motion} from 'framer-motion'
import styles from '../styles/styles.jsx'
import {navVariants} from '../utils/index.jsx'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <h2 className="underline underline-offset-1 font-extrabold text-[24px] leading-[30.24px] text-white">
        Abhishek!!
      </h2>
      
      <button type="button" className="flex items-center h-[48px] py-4 px-6 bg-[#7862c7] rounded-[32px] gap-[12px]">
          <span className="font-normal text-[16px] text-white">
            <a href='https://drive.google.com/file/d/1G37V8Vl-WTkKHx_5g_fvZBR-MRKENVjh/view?usp=sharing'>Download Resume</a>
          </span>
      </button>
    </div>
  </motion.nav>
);

export default Navbar;