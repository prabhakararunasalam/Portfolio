import React from 'react';
import SideBar from '../Components/SideBar';
import About from '../Components/About';
import MyWork from '../Components/MyWork';
import Contact from '../Components/Contect';

const HomePage = () => {
  const nameText = "I'm Prabhakar Arunachalam";
  const roleText = "I am a Full Stack Developer";

  return (
    <div className="flex">
      {/* Sidebar (fixed width) */}
      <SideBar />

      {/* Main content area */}
      <div className="flex-1 overflow-x-hidden">
        {/* Hero Section */}
        <div className="bg-[url('/homeBg.avif')] h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center text-center sm:bg-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">
            {nameText.split("").map((char, index) => (
              <span
                key={index}
                className="fade-in-letter inline-block"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <h1 className="text-xl sm:text-2xl md:text-2xl font-bold text-white mt-4">
            {roleText.split("").map((char, index) => (
              <span
                key={index}
                className="fade-in-letter inline-block"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* My Work / Projects Section */}
        <section id="mywork">
          <MyWork />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
