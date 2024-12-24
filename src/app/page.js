"use client";
import Head from "next/head";
import { BsFillMoonStarsFill, BsMenuButton } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin,AiFillMail ,  } from "react-icons/ai";
import 'animate.css';
import React from "react";
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import CodeforcesRating from './CodeforcesRating';
import LeetcodeStats from "./LeetcodeRating";



export default function Home() {
  const[darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [text] = useTypewriter({
    words: ['Developer', 'Competitive Programmer', 'Freelancer'],
    loop: true, // Infinite loop
    delaySpeed: 2000, // Delay between each word
  });
  return (
    <div className={darkMode?"dark":""}>
      <Head>
        <title>
          Sparsh Garg Portfolio
        </title>
        <meta name  = "description" content="Generated by cre"></meta>
        <link rel="icon" href = "/favicon.ico"/>
      </Head>
      <main className="bg-white px-10 dark:bg-black">
        <section className= "min-h-screen" id="Home">
        <nav className=" relative py-8 mb-12 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-3xl py-1 ease-in duration-300 text-gray-800 dark:text-white hover:scale-110 cursor-pointer">
        Sparsh{" "}
        <span className="bg-gradient-to-r from-orange-600 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Garg
        </span>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-xl">
        <a href="#home" className="text-gray-800 dark:text-white">
          Home
        </a>
        <a href="#Services" className="text-gray-800 dark:text-white">
          Service
        </a>
        <a href="#Projects" className="text-gray-800 dark:text-white">
          Projects
        </a>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl text-gray-800 dark:text-white" id="nightmode"
          />
        </li>
        <a
          className="ease-in duration-300 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full ml-8 hover:to-yellow-500 hover:scale-110 cursor-pointer"
          href="#Contact"
        >
          Contact Me
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl text-gray-800 dark:text-white cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-20 right-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col items-center gap-4 p-4 text-lg">
          <a
            href="#home"
            className="text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#Services"
            className="text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Service
          </a>
          <a
            href="#Projects"
            className="text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#nightmode"
            className="text-gray-800 dark:text-white">
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl text-gray-800 dark:text-white" id="nightmode"
          />
          
          </a>
          <a
            href="#Contact"
            className="text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </a>

        </ul>
      )}
    </nav>
        <div>
           
          <h2 className=" flex justify-center text-5xl py-1 font-medium  bg-gradient-to-r from-orange-800 via-orange-600 to-yellow-200 bg-clip-text text-transparent"><span className="text-5xl text-gray-800  dark:text-white ">Hi,It's&nbsp;</span>Sparsh</h2>
          <h3 className="flex justify-center text-3xl py-1 bg-gradient-to-r from-orange-800 via-orange-600 to-yellow-200 bg-clip-text text-transparent font-medium"> {text} <span> <Cursor/></span></h3>
          <p className="flex justify-center text-lg py-5  text-gray-800  dark:text-white">Freelancer providing services for programming needs. Join me down below and let's get code websites</p>
          </div>
          <div className="text-5xl flex justify-center gap-5 text-gray-900  dark:text-orange-500">
            <a className=" " href="https://github.com/Sparshgarg14/Java-DSA-" ><AiFillGithub /> </a>
            <a className="" href="https://www.linkedin.com/in/sparsh-garg14/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
          </a>
          <a  className="" href="mailto:ssparsh2000@gmail.com"><AiFillMail/> </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-orange-600 rounded-full w-80 h-80 mt-10 mb-10 overflow-hidden shadow-[0_10px_30px_rgba(255,165,0,0.6)]"><img src="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png" alt="" /></div>
        </section>



        <section className=" Services min-h-screen mb-4" id="Services">
      <h2 className="  text-5xl text-center text-gray-800 dark:text-white py-10 mb-0 ">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {/* Frontend Development */}
        <div className="servicebox bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-6 ease-in duration-300 hover:to-yellow-500 hover:scale-110 cursor-pointer">
          <div className="servicesinfo flex flex-col">
            <h4 className="text-xl font-semibold text-white mb-4">Frontend Development</h4>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis numquam, iure voluptate impedit tenetur commodi deleniti voluptatum.
            </p>
          </div>
        </div>
        {/* UI/UX Design */}
        <div className="servicebox bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-6 ease-in duration-300 hover:to-yellow-500 hover:scale-110 cursor-pointer">
          <div className="servicesinfo flex flex-col">
            <h4 className="text-xl font-semibold text-white mb-4">UI/UX Design</h4>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis numquam, iure voluptate impedit tenetur commodi deleniti voluptatum.
            </p>
          </div>
        </div>
        {/* Backend Development */}
        <div className="servicebox bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-6 ease-in duration-300 hover:to-yellow-500 hover:scale-110 cursor-pointer">
          <div className="servicesinfo flex flex-col">
            <h4 className="text-xl font-semibold text-white mb-4">Backend Development</h4>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis numquam, iure voluptate impedit tenetur commodi deleniti voluptatum.
            </p>
          </div>
        </div>
        {/* Competitive Programming */}
        <div className="servicebox bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-6 ease-in duration-300 hover:to-yellow-500 hover:scale-110 cursor-pointer">
          <div className="servicesinfo flex flex-col">
            <h4 className="text-xl font-semibold text-white mb-4">Competitive Programming</h4>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis numquam, iure voluptate impedit tenetur commodi deleniti voluptatum.
            </p>
          </div>
        </div>
      </div>
    </section>


    <section
  className="profiledisplay flex flex-col items-center min-h-screen py-20 bg-white dark:bg-black"
  id="Profile"
>
  <h2 className="text-5xl text-center text-gray-800 dark:text-white py-10">
    Coding Profiles
  </h2>
  <div className="flex flex-row flex-wrap justify-center items-center gap-16">
    {/* First Codeforces Rating */}
    <div className="flex flex-col items-center">
      <div className="h-56 w-56 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg">
        <CodeforcesRating className="text-3xl text-white" handle="SG_14" />
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-300 text-center max-w-sm mt-4">
        Explore my competitive programming journey on Codeforces, where I solve
        challenging problems and enhance my coding skills.
      </p>
    </div>

   {/* Second Leetcode Rating */}
   <div className="flex flex-col items-center">
      <div className="h-56 w-56 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg">
        <LeetcodeStats className="text-3xl text-white" username="Sparsh_Garg" />
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-300 text-center max-w-sm mt-4">
        Another competitive programming journey showcased through Leetcode.
      </p>
    </div>
  </div>
</section>



    <section className="projects min-h-screen  text-white py-20 mb-20" id="Projects">
  <h2 className="text-5xl text-center text-gray-800 dark:text-white py-10">Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-10">
    
    <div className=" ease-in duration-300 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full ml-8 hover:to-yellow-500 hover:scale-110 cursor-pointer">
      <img
        className="rounded-md mb-4"
        src="https://deifkwefumgah.cloudfront.net/screenshots/thumbnail/trananhtuat-fullstack-mern-movie-2022-thumbnail-2x.webp"
        alt="Project 1"
      />
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Project 1</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, fuga vitae saepe itaque rem blanditiis quo obcaecati.
      </p>
      <button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded hover:to-yellow-500">
        See Project
      </button>
    </div>

    
    <div className=" ease-in duration-300 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full ml-8 hover:to-yellow-500 hover:scale-110 cursor-pointer">
      <img
        className="rounded-md mb-4"
        src="https://www.creative-tim.com/blog/content/images/wordpress/2021/03/Material-Dashboard-React-Nodejs.jpg"
        alt="Project 2"
      />
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Project 2</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, fuga vitae saepe itaque rem blanditiis quo obcaecati.
      </p>
      <button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded hover:to-yellow-500">
        See Project
      </button>
    </div>

    
    <div className=" ease-in duration-300 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full ml-8 hover:to-yellow-500 hover:scale-110 cursor-pointer">
      <img
        className="rounded-md mb-4"
        src="https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway-1024x869.png"
        alt="Project 3"
      />
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Project 3</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, fuga vitae saepe itaque rem blanditiis quo obcaecati.
      </p>
      <button className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded hover:to-yellow-500">
        See Project
      </button>
    </div>
  </div>
</section>
<section className="contactsection mt-5 mb-20" id="Contact">
  <h2 className="heading text-4xl font-medium text-center text-gray-900 dark:text-white">
    Contact <span className="text-orange-600">Me</span>
  </h2>
  <form className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    {/* Left Section */}
    <div className="input-group flex flex-col space-y-4 text-gray-900 dark:white">
      <div className="input-box flex flex-col space-y-4">
        <input 
          type="text" 
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" 
          placeholder="Full Name"
        />
        <input 
          type="email" 
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" 
          placeholder="Email"
        />
        <input 
          type="number" 
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" 
          placeholder="Phone Number"
        />
        <input 
          type="text" 
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600" 
          placeholder="Subject"
        />
      </div>
    </div>

    {/* Right Section */}
    <div className="input-group-2 flex flex-col space-y-4 text-gray-900 ">
      <textarea
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
        id=""
        cols="30"
        rows="10"
        placeholder="Your Message"
      ></textarea>
      <input 
        type="submit" 
        value="Send Message" 
        className="bg-orange-600 w-40 text-white p-3 rounded-md cursor-pointer hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
    </div>
  </form>
</section>



<footer className="bg-gradient-to-r from-orange-600 to-orange-400 text-white py-10">
  <div className="container mx-auto px-8">
    <div className="flex justify-center">
      {/* Social Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
        <div className="flex justify-center gap-8 text-4xl">
          <a
            href="https://github.com/Sparshgarg14/Java-DSA-"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sparsh-garg14/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="mailto:ssparsh2000@gmail.com"
            className="hover:text-yellow-400 transition-transform transform hover:scale-110"
          >
            <AiFillMail />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="mt-8 border-t border-gray-300 pt-4">
      <p className="text-center text-gray-200">
        © {new Date().getFullYear()} Sparsh Garg. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>

      </main>
    </div>
    
  );
}
