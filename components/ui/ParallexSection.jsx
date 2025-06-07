export const ParallaxSection = ({ children }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30 };
  const translateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.5]), springConfig);

  return (
    <section
      ref={ref}
      className="relative h-[150vh] overflow-hidden flex items-center justify-center"
    >
      <motion.div
        style={{ translateY, opacity }}
        className="w-full max-w-6xl px-4 text-center"
      >
        {children}
      </motion.div>
    </section>
  );
};
