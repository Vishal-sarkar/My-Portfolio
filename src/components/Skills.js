import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-[100%] font-semibold bg-black text-light px-6 py-3 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale: 1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition: {duration: 1.5}}}
        viewport={{once: true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
            
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-[100%] font-semibold bg-dark text-light px-8 py-5 dark:text-dark dark:bg-light cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2'
                whileHover={{
                    scale: 1.05
                }}> 
                    Web
                </motion.div>
                <Skill name="ExpressJS" x="-25vw" y="5vw" />
                <Skill name="CSS" x="-12vw" y="-2vw" />
                <Skill name="Javascript" x="20vw" y="-2vw" />
                <Skill name="ReactJS" x="0vw" y="16vw" />
                <Skill name="NextJS" x="-22vw" y="-22vw" />
                <Skill name="Laravel" x="15vw" y="-12vw" />
                <Skill name="GitHub" x="32vw" y="-5vw" />
                <Skill name="PHP" x="0vw" y="-12vw" />
                <Skill name="Bootstrap" x="-25vw" y="18vw" />
                <Skill name="Tailwind Css" x="18vw" y="10vw" />
                <Skill name="NodeJS" x="26vw" y="-20vw" />
                <Skill name="HTML" x="-24vw" y="-9vw" />
                <Skill name="PostgreSQL" x="-35vw" y="-3vw" />
                <Skill name="MySQL" x="-6vw" y="22vw" />
                <Skill name="MongoDB" x="12vw" y="22vw" />
                <Skill name="NocoDB " x="-15vw" y="12vw" />
                <Skill name="Framer" x="10vw" y="-18vw" />
                <Skill name="Daisy UI" x="-10vw" y="-18vw" />
                <Skill name="Wix" x="34vw" y="12vw" />
            </div>
        </>
    )
}

export default Skills