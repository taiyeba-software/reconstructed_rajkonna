import { motion } from "framer-motion";
import { StarBackground } from "./StarBackground";

export const HeroSection = () => {

  // Motion variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="absolute top-[110px] left-0 w-full z-10 text-center px-4 pointer-events-none"
    >
      <StarBackground/>

      <motion.h1
        className="text-[60px] sm:text-[72px] font-bold text-foreground text-glow hero-title"
        style={{ fontFamily: "MPLUSRounded" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.span className="word" style={{ fontFamily: "EduCursive" }} variants={wordVariant}>Feel</motion.span>{" "}
        <motion.span className="word" variants={wordVariant}>like</motion.span>{" "}
        <motion.span className="word" variants={wordVariant}>royalty,</motion.span>
        <br />
        <motion.span className="word" variants={wordVariant}>every</motion.span>{" "}
        <motion.span className="word" variants={wordVariant}>single</motion.span>{" "}
        <motion.span className="word" style={{ fontFamily: "EduCursive" }} variants={wordVariant}>day</motion.span>.
      </motion.h1>

      <motion.p
        className="mt-4 max-w-xl mx-auto text-lg md:text-xl text-white"
        style={{ fontFamily: "MPLUSRounded" }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 1, 
              ease: "easeOut",
            } 
          },
        }}
      >
        Rediscover self-love through skincare rituals crafted to treat you
        like the queen you are.
      </motion.p>
      
        <motion.a
          href="#products"
          whileHover={{
            scale: 1.08,
            rotate: -1,
            boxShadow: "0 0 26px rgba(200, 20, 90, 0.6)", // Juicier glow
            filter: "brightness(1.2) blur(0.5px)",
            backgroundColor: "#C8145A", // Vivid mulberry
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-14 px-6 py-2 rounded-full bg-[#C8145A] text-white text-sm font-mplus shadow-md animate-glow inline-block"
          title="Explore Rajkonna products"
        >
          Enter Ritual Space 
        </motion.a>

    </div>
  );
};
