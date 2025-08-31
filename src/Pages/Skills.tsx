import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { CometCard } from "../Components/UI/CometCard";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative px-4 flex flex-col items-center md:mt-25 sm:px-6 md:px-10 md:py-10"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl mb-10 animate-pulse saira-font text-white">
        Skills
      </h1>

      <div className="w-full max-w-6xl p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CometCard className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Frontend
          </h2>
          <div className="flex flex-col gap-5 px-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <FaHtml5 className="text-orange-500 text-xl" />
              </div>
              <span className="text-white">HTML</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <FaCss3Alt className="text-blue-500 text-xl" />
              </div>
              <span className="text-white">CSS</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <FaReact className="text-cyan-400 text-xl" />
              </div>
              <span className="text-white">React</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center">
                <SiNextdotjs className="text-white text-xl" />
              </div>
              <span className="text-white">NextJS</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center">
                <SiTailwindcss className="text-cyan-400 text-xl" />
              </div>
              <span className="text-white">Tailwind</span>
            </div>
          </div>
        </CometCard>

        <CometCard className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Backend
          </h2>
          <div className="flex flex-col gap-5 px-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center">
                <FaNodeJs className="text-green-500 text-xl" />
              </div>
              <span className="text-white">NodeJS</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-500/20 flex items-center justify-center">
                <SiExpress className="text-white text-xl" />
              </div>
              <span className="text-white">Express</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-700/20 flex items-center justify-center">
                <SiMongodb className="text-green-500 text-xl" />
              </div>
              <span className="text-white">MongoDB</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-800/20 flex items-center justify-center">
                <SiPrisma className="text-blue-300 text-xl" />
              </div>
              <span className="text-white">Prisma</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <SiPostgresql className="text-blue-400 text-xl" />
              </div>
              <span className="text-white">PostgreSQL</span>
            </div>
          </div>
        </CometCard>

        <CometCard className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Others
          </h2>
          <div className="flex flex-col gap-5 px-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <RiOpenaiFill className="text-green-400 text-xl" />
              </div>
              <span className="text-white">ChatGPT</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                <SiGoogle className="text-blue-300 text-xl" />
              </div>
              <span className="text-white">Gemini</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <div className="text-purple-400 font-bold text-sm">DS</div>
              </div>
              <span className="text-white">DeepSeek</span>
            </div>
          </div>
        </CometCard>
      </div>
    </section>
  );
};
