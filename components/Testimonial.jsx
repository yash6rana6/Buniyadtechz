"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data"; // make sure this file exists

const variants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    scale: 0.95,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? 100 : -100,
    scale: 0.95,
  }),
};

const TestimonialSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = useCallback((newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      const currentIndex = testimonialIndex;
      const targetDirection = index > currentIndex ? 1 : -1;
      const steps = Math.abs(index - currentIndex);

      for (let i = 0; i < steps; i++) {
        setTimeout(() => {
          setPage(([prevPage]) => [prevPage + targetDirection, targetDirection]);
        }, i * 100);
      }
    },
    [testimonialIndex]
  );

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => paginate(1), 5000);
      return () => clearInterval(interval);
    }
  }, [paginate, isPaused]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a] text-white min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
            What People Say
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-12">
            About{" "}
            <span className="text-transparent bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text">
              Buniyad Techz
            </span>
          </h3>
        </motion.div>

        <div
          className="relative overflow-hidden min-h-[280px] mb-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex items-center justify-center w-full"
            >
              <div className="bg-[#1a1a1a]/60 backdrop-blur-lg border border-yellow-400/30 rounded-3xl p-8 mx-auto w-full max-w-2xl shadow-2xl hover:shadow-yellow-500/30 transition-shadow duration-300">
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-400 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <p className="text-yellow-100 text-lg md:text-xl italic mb-8 leading-relaxed font-light">
                  {testimonials[testimonialIndex]?.quote}
                </p>

                <div className="border-t border-yellow-400/20 pt-6">
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[testimonialIndex]?.name}
                  </h4>
                  <p className="text-yellow-400 font-medium">
                    {testimonials[testimonialIndex]?.title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={() => paginate(-1)}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 text-yellow-300 hover:text-white hover:bg-yellow-400/30 transition-all duration-300 hover:scale-110"
            title="Previous testimonial"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`relative transition-all duration-300 ${
                  i === testimonialIndex
                    ? "w-8 h-3 bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full"
                    : "w-3 h-3 bg-yellow-200/30 rounded-full hover:bg-yellow-300"
                }`}
                title={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/10 backdrop-blur-sm border border-yellow-400/20 text-yellow-300 hover:text-white hover:bg-yellow-400/30 transition-all duration-300 hover:scale-110"
            title="Next testimonial"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {!isPaused && (
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-yellow-300/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-200"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                key={page}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSlider;
