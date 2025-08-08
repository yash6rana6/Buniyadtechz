"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a] bg-gradient-to-b from-[#0a0a0a] via-[#0f0f1a] to-[#13162D] text-white">
      <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight">
        A Small Selection of <br />
        <span className="text-purple-400">Recent Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-16 mt-16">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[28rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link || "/project"}
              href={item.link || "#"}
            >
              {/* Card Image Block */}
              <div className="relative sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-3xl shadow-xl">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-white line-clamp-1">
                {item.title}
              </h2>

              <p className="text-sm md:text-base text-gray-400 font-light mt-2 line-clamp-2">
                {item.des}
              </p>

              {/* Bottom icons + link */}
              <div className="flex items-center justify-between mt-7 mb-3">
                {/* Tech Stack Icons */}
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center shadow-md"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                {/* Visit Link - converted to button */}
                <button
                  onClick={() => window.open(item.link, "_blank")}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
                >
                  <p className="text-sm md:text-base font-medium">Check Live Site</p>
                  <FaLocationArrow className="ms-2" />
                </button>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;

