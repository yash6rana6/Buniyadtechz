"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import { cn } from "@/lib/utils";

export function LampHero() {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, mass: 1 };
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [1, 0]),
    springConfig
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.9]),
    springConfig
  );

  return (
    <LampContainer>
      <motion.div
        ref={ref}
        style={{ translateY, opacity, scale }}
        className="relative z-20 text-white px-6 md:px-20 max-w-2xl"
        suppressHydrationWarning
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          <Typewriter
            options={{
              strings: [
                "We Build Websites That Convert.",
                "We Design With Purpose.",
                "We Create Digital Magic.",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </h1>

        <p
          className="text-md md:text-xl text-white/90 font-medium mb-8 drop-shadow-md"
          style={{ filter: "drop-shadow(0 4px 3px rgba(255, 215, 0, 0.7))" }}
        >
          We help startups and brands grow online with fast, modern, and
          strategic websites that bring results.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-yellow-400 text-black font-medium px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          <span>Explore Now</span>
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>

      {/* Social Links */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-30">
        <a
          href="https://www.instagram.com/buniyadtechz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          <AiFillInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/buniyadtechz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedinIn size={24} />
        </a>
        <a
          href="https://github.com/buniyadtechz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61577281851785"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </LampContainer>
  );
}

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
        className
      )}
    >
      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[
          { src: "re.svg", top: "10%", left: "20%" },
          { src: "js.svg", top: "25%", left: "70%" },
          { src: "nodejs.svg", top: "45%", left: "40%" },
          { src: "mdb.svg", top: "65%", left: "15%" },
          { src: "tail.svg", top: "75%", left: "85%" },
          { src: "ts.svg", top: "50%", left: "10%" },
          { src: "next.svg", top: "35%", left: "50%" },
          { src: "angular.svg", top: "20%", left: "30%" },
          { src: "aws.svg", top: "60%", left: "70%" },
          { src: "css3.svg", top: "30%", left: "10%" },
          { src: "firefox.svg", top: "80%", left: "40%" },
          { src: "git.svg", top: "45%", left: "80%" },
          { src: "github.svg", top: "60%", left: "30%" },
          { src: "html5.svg", top: "15%", left: "60%" },
          { src: "linkedin.svg", top: "40%", left: "90%" },
          { src: "mysql.svg", top: "50%", left: "60%" },
          { src: "nodemon.svg", top: "35%", left: "25%" },
          { src: "npm.svg", top: "70%", left: "50%" },
          { src: "sql.svg", top: "80%", left: "20%" },
        ].map((icon, index) => (
          <img
            key={index}
            src={`/${icon.src}`}
            className={`floating-icon pulse-glow-multi float${(index % 5) + 1}`}
            style={{
              position: "absolute",
              top: icon.top,
              left: icon.left,
            }}
            alt=""
          />
        ))}
      </div>

      {/* Background Glow */}
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent"
        >
          <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500"
        >
          <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
