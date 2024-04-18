import React from "react";

const page = () => {
  return (
    <div className="font-poppins relative">
      <div
        id="container"
        className="relative flex w-auto justify-center px-24"
      />

      <div
        id="container"
        className="relative flex w-auto flex-col p-10 px-4 sm:p-16 sm:px-8 md:flex-row md:p-50 md:px-24 lg:p-24 lg:px-24 xl:p-8 xl:px-24"
      >
        <div className="mr-10">
          <img
            className="h-auto w-full min-w-[100px] rounded-lg md:h-auto md:w-auto"
            src="../../profile.jpeg"
            alt="image of myself"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="mb-8 mt-6 text-3xl font-bold text-black">
            Hey it's me, Abhimantra PNW
          </h1>

          <p className="mb-10 w-full text-black sm:w-[35rem] md:w-[30rem] lg:w-[25rem]">
            I'm Bimbo, with a passion for web
            development. My tech journey started with HTML, CSS, and JavaScript,
            and I was hooked by the thrill of crafting dynamic, interactive
            websites. As I grew, Node.js and ReactJS became my go-to tools for
            building scalable applications. Feel free to connect if you have
            questions, collaboration ideas, or just want to discuss the latest
            in web development!
          </p>

          <div
            id="social"
            className="flex flex-wrap items-center justify-start gap-4"
          >
            <a
              rel="noopener"
              target="_blank"
              href="https://github.com/AbhimantraPNW"
              className="flex w-64 items-center gap-2 rounded-lg bg-gray-800 p-5 text-white"
            >
              <img
                className="mr-2 transition duration-300 ease-in-out hover:scale-105"
                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                width="20px"
                height="20px"
                alt="Github"
              />
              <span>Visit my Github</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/abhimantra-pandya-nandi-wardhana-648691287/"
              className="flex w-64 items-center gap-2 rounded-lg bg-gray-800 p-5 text-white"
            >
              <img
                className="mr-2 transition duration-300 ease-in-out hover:scale-105"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                width="20px"
                height="20px"
                alt="LinkedIn"
              />
              <span>Follow me on Linkedin</span>
            </a>
            <a
              rel="noopener"
              target="_blank"
              href="https://twitter.com/pnw199431697"
              className="flex w-64 items-center gap-2 rounded-lg bg-gray-800 p-5 text-white"
            >
              <img
                className="mr-2 transition duration-300 ease-in-out hover:scale-105"
                src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                width="20px"
                height="20px"
                alt="Twitter"
              />
              <span>Follow me on Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
