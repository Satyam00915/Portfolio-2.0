import BlurText from "../Components/UI/BlurText";
import Button from "../Components/UI/Button";
import Location from "../Components/UI/Location";
import Navbar from "../Components/UI/Navbar";
import ShinyText from "../Components/UI/ShinyText";
import Skill from "../Components/UI/Skill";
import { SparklesCore } from "../Components/UI/sparkles";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between ">
      <Navbar />

      <div className="pt-40 flex flex-col gap-3 sm:gap-0 relative">
        <BlurText
          text="SATYAM UPADHYAY"
          direction="top"
          delay={100}
          className="sm:text-6xl text-2xl pl-16 sm:pl-13 saira-font text-white"
        />
        <ShinyText
          text="Full Stack Web Developer"
          speed={1}
          disabled={false}
          className="text-md sm:text-3xl pl-18 sm:pl-34"
        />

        <div className="w-[40rem] hidden sm:block  h-40 relative">
          <div className="absolute  sm:inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute sm:inset-x-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="absolute sm:inset-x-60 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute sm:-inset-x-20 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-full" />

          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <div className="flex justify-center items-center pr-12">
          <Location />
          <ShinyText
            text="Visakhapatnam, India"
            speed={5}
            className="text-sm sm:text-lg"
          />
        </div>
        <div className="flex text-sm justify-center items-center">
          <Button />
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="group relative">
            <button>
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="white"
                fill="none"
                viewBox="0 0 24 24"
                className="w-8 hover:scale-125 duration-200 hover:stroke-white"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </button>
          </div>
          <div className="group relative">
            <button>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 382 382"
                xmlSpace="preserve"
                fill="#ffffff"
                className="w-8 hover:scale-125 duration-200 hover:stroke-white"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    style={{ fill: "#ffffff" }}
                    d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                  />{" "}
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-5 items-center justify-center mt-5">
          <Skill text="React" />
          <Skill text="NextJS" />
          <Skill text="Express" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
