import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <>
        <Head>
          <title>CodeBucks | About Page</title>
          <meta name="description" content="any description" />
        </Head>
        <TransitionEffect />
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <AnimatedText
              text="Passion Fuels Purpose!"
              className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            />
            <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
              <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Biography
                </h2>
                <p className="font-medium ">
                  Greetings! I'm Bishal Sarkar, a dedicated and versatile
                  Full-Stack Web Developer, and this is a glimpse into my
                  journey.
                </p>
                <p className="my-4 font-medium">
                  My expertise spans across Front-End technologies like HTML,
                  CSS, and ReactJS, and extends into Back-End tools such as
                  NodeJS, Express, and databases like PostgreSQL and MongoDB.
                  I'm also well-versed in frameworks like Laravel, ensuring a
                  holistic development experience.
                </p>
                <p className="mb-4 font-medium">
                  👨‍🎓 <span className="font-bold">Education</span>: I hold a Bachelor's in Physics from Tangla
                  College, Gauhati University, where I cultivated a strong
                  foundation. Further, I've invested in my skills through
                  comprehensive courses on platforms like Udemy and The Coding School, covering
                  everything from web development to quantum computing.
                </p>
                <p className="font-medium">
                  💡 <span className="font-bold">What Drives Me</span>: Passionate about continuous learning, I
                  thrive in dynamic environments, bringing together my technical
                  prowess, soft skills like teamwork and critical thinking, and
                  a genuine excitement for software development.
                </p>
              </div>
              <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                <Image
                  src={profilePic}
                  alt="CodeBucks"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 
                                (max-width: 1200px) 50vw, 
                                50vw"
                />
              </div>
              <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={5} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Satisfied clients
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={40} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Projects Complited
                  </h2>
                </div>

                <div className="flex flex-col items-end justify-center xl:items-center">
                  <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                    <AnimatedNumbers value={1} />+
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                    Years of experience
                  </h2>
                </div>
              </div>
            </div>
            <Skills />
            <Experience />
            <Education />
          </Layout>
        </main>
      </>
    </div>
  );
};

export default about;
