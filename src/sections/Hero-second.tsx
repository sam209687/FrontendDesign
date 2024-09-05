"use client";
import React from "react";
import { motion } from "framer-motion";
import darkSaasLandingPage from "@/assets/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import { FaArrowUp, FaRegCheckCircle } from "react-icons/fa";
import grainImage from '../assets/grain.jpg';

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export default function SolarTrendsPage() {
  return (
    <section className="mb-8 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="font-semibold lg:text-xl uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Lorem ipsum dolor{" "}
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl text-center mt-6">Solar Trends</h2>
        <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4">
          Watch the solar trends if you are kneen to know more..
        </p>

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
           <div className="sticky top-0" style={{
            top: `calc(64px + ${projectIndex * 40}px)`
           }}>
             <div
              className='bg-gray-800 rounded-3xl z-0 after:z-10 overflow-hidden  after:conten-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2  after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20  relative'
              key={project.title}
            >
              <div className="absolute inset-0 -z-10 opacity-5" style={{
                backgroundImage: `url(${grainImage.src})`
              }}></div>

              <div className="lg:grid grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-r from-emerald-300 to  bg-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <div>&bull;</div>
                  <span>{project.year}</span>
                </div>
              
              <h3 className="text-2xl mt-2 md:text-3xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5 ">
                {project.results.map((result) => (
                  <li className="flex gap-2 text-sm md:text-base text-white/50">
                    <FaRegCheckCircle className="md:size-5" />
                    <span className="">{result.title}</span>
                  </li>
                ))}
              </ul>
              <Link href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"> 
                    <span>Watch live</span> 
                    <FaArrowUp className="rot rotate-45"/>
                    </button>
              </Link>
              </div>
              <div className="relative">
                
                {/* <iframe className="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe> */}

                
              <Image className="mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none
              " src={project.image} alt={project.title} />
              </div>
              </div>

            </div> 
           </div>


          ))}
        </div>
      </div>
    </section>
  );
}
