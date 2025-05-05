import React from "react";

const workItems = [
  {
    title:
      "Social Media Platform - Full Stack (React, Node.js, Express, MongoDB, Tailwind CSS)",
    description:
      "Developed a full-stack social media app where users can create accounts, post updates, like and comment on posts, and follow other users. Built the frontend with React and Tailwind CSS, and the backend with Node.js, Express, and MongoDB for user authentication, data storage, and real-time updates.",
    image: "./public/project1.png",
    link: "https://social-media-platform-frontend.vercel.app/",
    backend:"https://social-media-backend-reon.onrender.com/",
    github:
      "https://github.com/prabhakararunasalam/social-media-platform-frontend",
  },
  {
    title: "Movie Search Application with React and Tailwind CSS",
    description:
      "Built a responsive frontend app to search and explore movies using the OMDB API. Users can search movies, view detailed info, and manage a list of favorite movies. Features include pagination, movie details view, and a clean UI with Tailwind CSS.",
    image: "./public/project2.png",
    link: "https://moviesearchapi1.netlify.app/",
    github: "https://github.com/prabhakararunasalam/movie-search",
  },
  {
    title: "Recipes App – Backend (Node.js, Express.js, MongoDB)",
    description:
      "Built a RESTful API for managing recipes with full CRUD functionality. Users can create, view, update, and delete recipes using endpoints built with Express.js and MongoDB. Implemented data validation and routing for efficient backend operations. Deployed and tested using Postman.",
    image: "./public/recipes.png",
    api: "https://documenter.getpostman.com/view/39189138/2sAYHwKQxN",
    backend: "https://recipiesapp.onrender.com/",
    github: "https://github.com/prabhakararunasalam/RecipiesApp",
  },
  // Add more items as needed
];

const MyWork = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">My Work</h1>
      <div className="container mx-auto lg:mx-55 mt-7 max-w-7xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 justify-center md:justify-items-end md:mx-20 ">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={item.link}>
              <img className="rounded-t-lg" src={item.image} alt={item.title} />
            </a>
            <div className="p-5">
              <a href={item.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              {item.api && (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <a
                    className="underline text-blue-600"
                    href={item.api}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    API Documentation
                  </a>
                </p>
              )}

              <div className="flex gap-2">
                {item.link && (
                  <a
                  href={item.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Frontend URL
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                )}
                {item.backend && (
                  <a
                  href={item.backend}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Backend URL
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                )}
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  GitHub
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.729.082-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.996.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.468-2.381 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.005 2.047.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.839 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.921.43.372.815 1.103.815 2.222v3.293c0 .319.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
