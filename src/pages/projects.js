import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import project1 from "../../public/images/projects/1.png";
import project2 from "../../public/images/projects/2.png";
import project3 from "../../public/images/projects/3.png";
import project4 from "../../public/images/projects/4.png";
import project5 from "../../public/images/projects/5.png";
import project6 from "../../public/images/projects/6.png";
import project7 from "../../public/images/projects/7.png";
import project8 from "../../public/images/projects/8.png";
import project9 from "../../public/images/projects/9.png";
import project10 from "../../public/images/projects/10.png";
import project11 from "../../public/images/projects/11.png";
import project12 from "../../public/images/projects/12.png";
import project13 from "../../public/images/projects/13.png";
import project14 from "../../public/images/projects/14.png";
import project15 from "../../public/images/projects/15.png";
import project16 from "../../public/images/projects/16.png";
import project17 from "../../public/images/projects/17.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summery}
        </p>
        <div className="mt-2 flex items-center">
          {github && (<Link
            href={github}
            target="_blank"
            className="w-10 dark:bg-dark dark:text-light"
          >
            <GithubIcon />
          </Link>)}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base xs:text-sm xs:px-2"
          >
            Visit Projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline dark:text-light md:text-base"
          >
            Visit
          </Link>

          {github && <Link
            href={github}
            target="_blank"
            className="w-8 dark:bg-dark dark:text-light md:w-6"
          >
            <GithubIcon />{" "}
          </Link>}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Bishal Sarkar | Project Page</title>
        <meta name="description" content="I'm Bishal Sarkar, a dedicated and versatile
                  Full-Stack Web Developer." />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Metaverse"
                img={project1}
                summery="A modern and fully responsive metaverse themed website, built using latest technology like Next13, Tailwind Css and Framer Motion."
                link="https://metanextjs.netlify.app/"
                github="https://github.com/Vishal-sarkar/Metaverse"
                type="Practice Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Just Home Stay"
                img={project13}
                summery="Contributed on building various features of this website like search functionality for mobile and build an admin panel for it to edit, add and update data in the website."
                link="https://justhomestay.in/"
                github=""
                type="Company Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Thea Homes"
                img={project14}
                link="https://theahomesmanali.com/"
                github=""
                type="Company Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Score Me"
                img={project15}
                link="https://scoreme.in/"
                github=""
                type="Company Project"
              />
            </div>
            
            <div className="col-span-12">
              <FeaturedProject
                title="Admin Panel"
                img={project17}
                summery="Admin Panel for Score Me website with analytics and graph to get insights from the website. And it consists of forms where admin can add, edit and delete data in the website."
                link="https://scoreme.in/management/dashboard"
                github=""
                type="Company Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce Web Application"
                img={project2}
                link="https://b-commerce-mystore.netlify.app/"
                github="https://b-commerce-mystore.netlify.app/"
                type="Practice Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Photo Gallery Web Application"
                img={project3}
                link="https://demo-website-rho-swart.vercel.app/"
                github="https://github.com/Vishal-sarkar/demo_website"
                type="Practice Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Book Store Application"
                img={project4}
                summery="A web application to store book online, built using Reactjs, Tailwind css, Express and MongoDB, where you can able to add, edit and delete book data stored on a MongoDB databse"
                link="https://celadon-pavlova-7a2593.netlify.app/"
                github="https://github.com/Vishal-sarkar/BookStore"
                type="Practice Project"
              />
            </div>
            
            
            <div className="col-span-12">
              <FeaturedProject
                title="Space Invader Game"
                img={project7}
                summery="A fully functional space invader game with pure HTML, CSS and JavaScript, where enemy from space invades the user’s base and the user has to protect their base from it."
                link="https://vishal-sarkar.github.io/Space-invader-game/"
                github="https://github.com/Vishal-sarkar/Space-invader-game"
                type="Practice Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Card Match Games"
                img={project10}
                summery="A fully functional Card Match gave with pure HTML, CSS and JavaScript. Here I used a pair of avenger character laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards."
                link="https://vishal-sarkar.github.io/Avenger-memoryGame/"
                github="https://github.com/Vishal-sarkar/Avenger-memoryGame"
                type="Practice Project"
              />
            </div>
            
            

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Snake Game"
                img={project11}
                link="https://vishal-sarkar.github.io/Snake-Game/"
                github="https://github.com/Vishal-sarkar/Snake-Game"
                type="Practice Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Tic-Tac-Toe Game"
                img={project16}
                link="https://vishal-sarkar.github.io/Tic-Tac-Toe/"
                github="https://github.com/Vishal-sarkar/Tic-Tac-Toe"
                type="Practice Project"
              />
            </div>



            <div className="col-span-12">
              <FeaturedProject
                title="Todo App"
                img={project8}
                summery="A fully functional Todo App build with pure HTML,
                CSS and JavaScript.This application is like a task keeper where the user would be able to enter the tasks that they need to do.
                Once they are done with their tasks they can also remove them from the list."
                link="https://vishal-sarkar.github.io/My-Custom-todo-app/"
                github="https://github.com/Vishal-sarkar/My-Custom-todo-app"
                type="Practice Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Airbnb clone"
                img={project5}
                link="https://airbnb-clone-nine-black.vercel.app/"
                github="https://github.com/Vishal-sarkar/airbnb-clone"
                type="Practice Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Note Taker App"
                img={project9}
                link="https://vishal-sarkar.github.io/Note-taker-app/"
                github="https://github.com/Vishal-sarkar/Note-taker-app"
                type="Practice Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="A simple Landing Page"
                img={project6}
                link="https://vishal-sarkar.github.io/startup-of-the-year/"
                github="https://github.com/Vishal-sarkar/startup-of-the-year"
                type="Practice Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Search Functionality in ReactJs"
                img={project12}
                link="https://vishal-sarkar.github.io/My-Robofriends/"
                github="https://github.com/Vishal-sarkar/My-Robofriends"
                type="Practice Project"
              />
            </div>
           
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
