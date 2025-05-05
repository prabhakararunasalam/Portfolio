import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen bg-gray-800 flex flex-col justify-center items-start text-center px-2 pl-0 sm:pl-56 py-10">
      <div className="text-white md:w-2/3 sm:w-1/2 md:p-6 lg:ml-30">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-lg mt-4">
          Hello! I'm Prabhakar Arunachalam, a passionate Full Stack Developer with expertise in building responsive web applications.
          I love to learn and explore new technologies to solve real-world problems. I enjoy working with both frontend and backend technologies, making sure to create user-friendly and optimized applications.
        </p>

        <h3 className="text-2xl font-semibold mt-6">Skills:</h3>
        <ul className="ml-5 mt-2 list-none">
          <li>Frontend: React.js, HTML5, CSS3, TailwindCSS, JavaScript</li>
          <li>Backend: Node.js, Express.js, MongoDB, MySQL</li>
          <li>Version Control: Git, GitHub, GitLab</li>
          <li>Others: REST APIs, Responsive Design,postman,</li>
        </ul>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/1CRwjw7jU2qlUMXQx_mFfjlPD4zAtjTv1/view?usp=sharing" // Replace this link with your Google Docs URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-xl hover:bg-blue-600 transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
