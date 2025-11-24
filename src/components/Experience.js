import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="Handysolver"
            time="May 2024 - Present"
            address="C 705, Pioneer Urban Square, Golf Course Ext Rd, Sector 62, Gurugram, Ghata, Haryana 122098"
            companyLink="https://handysolver.com"
            work="Full-stack developer with hands-on experience building responsive dashboards, automation tools, and API-driven systems using React.js, PHP, MySQL, and Firebase. Improved workflow efficiency by 40% through scalable automation solutions. Skilled in creating reusable components, optimizing performance, and collaborating across teams to deliver reliable, user-centric business applications."
          />
          <Details
            position="Web Developer"
            company="Criss Cross Lab"
            time="Dec 2022 - Present"
            address="Gurugram, Sector 49, Unitech Arcadia"
            companyLink="https://www.crisscrosslab.com"
            work="Working with a team responsible for developing robust web application for various business and organisations.My primary responsibilities include working on a diverse range of projects, where I utilize my skills in HTML, CSS, JavaScript, ReactJS, NextJS, Tailwind CSS, NocoDB and more  for both front-end and back-end development."
          />
          <Details
            position="Junior Web Developer"
            company="Mindnine Inovative Technologies"
            time="Apr 2022 - Dec 2022"
            address="Bengaluru, Karnataka, India"
            companyLink="https://www.linkedin.com/in/anirban-banerjee-710a7921b/"
            work="Worked as a Web Developer, creating and deploying responsive company and client websites using ReactJS, Bootstrap, and Wix. Focused on mobile-first design, clean UI, and optimized performance."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
