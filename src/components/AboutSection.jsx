"use client";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { StarBackground } from "./StarBackground";
import { useInView } from "react-intersection-observer";



export const AboutSection = () => {
  const ref = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const [refText, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const textSpring = useSpring({
    opacity: inView ? 1 : 0.8,
    y: inView ? 0 : 40,
    config: { tension: 120, friction: 18 },
  });

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionTop = window.scrollY + rect.top;
      const sectionHeight = rect.height;

      // Calculate scroll percentage within the section (0 to 1)
      const progress = Math.min(
        1,
        Math.max(0, (scrollPosition - sectionTop) / sectionHeight)
      );

      setScrollY(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Each layer moves at a different speed
  const imageSpring = useSpring({ transform: `translateY(${scrollY * -60}px)` });
  const leafSpring = useSpring({ transform: `translateY(${scrollY * -100}px)` });
  const peelSpring = useSpring({ transform: `translateY(${scrollY * -80}px)` });
  const cardsSpring = useSpring({ transform: `translateY(${scrollY * -120}px)` });
  const textSpring2 = useSpring({opacity: inView ? 1 : 0, y: inView ? 0 : 30,delay: inView ? 300 : 0,});



  return (
    <section
      ref={ref}
      className="min-h-screen relative overflow-hidden py-32 px-4 bg-background" // Soft luxury pastel
      id="about"
    >
      {/*Background Stars (Layer 0) */}
      <StarBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-50 items-center">
        

          <animated.div
            ref={refText}
            style={textSpring}
            className="space-y-6 text-left will-change-transform will-change-opacity"
          >
            <h2
              className="text-4xl md:text-5xl font-semibold leading-tight"
              style={{ fontFamily: "EduCursive" }}
            >
              CLEAN, CONSCIOUS,<br />
              PERFORMANCE <br />
              <span className="italic font-serif text-foreground/90">skincare.</span>
            </h2>

            <p
              className="text-muted-foreground max-w-md"
              style={textSpring2}
            >
              Unreasonably honest products that truly work. Be kind to skin and the planet — no exceptions.
            </p>
          </animated.div>





        {/* Parallax Visual Section */}
        
        <div className="relative min-h-[600px] w-full">
          {/* Portrait Image */}
        <animated.div
          style={imageSpring}
          className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="/images/about.jpg"
            alt="Model"
            className="w-full h-full object-cover"
          />
        </animated.div>

          <animated.img
            src="/images/rose2.png"
            alt="Leaf"
            style={leafSpring}
            className="absolute top-0 right-10 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose.png"
            alt="Peel"
            style={peelSpring}
            className="absolute top-100 right-10 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose1.png"
            alt="Peel"
            style={peelSpring}
            className="absolute top-50 right-20 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose.png"
            alt="Peel"
            style={peelSpring}
            className="absolute top-100 left-20 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose1.png"
            alt="Peel"
            style={peelSpring}
            className="absolute top-120 left-150 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose.png"
            alt="Peel"
            style={peelSpring}
            className="absolute top-0 left-20 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose2.png"
            alt="Peel"
            style={peelSpring}
            className="absolute bottom-150 right-190 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose.png"
            alt="Peel"
            style={peelSpring}
            className="absolute bottom-150 right-80 w-28 sm:w-32 z-20 hidden md:block"
          />

          <animated.img
            src="/images/rose2.png"
            alt="Peel"
            style={peelSpring}
            className="absolute bottom-50 right-263 w-28 sm:w-32 z-20"
          />
         

          {/* Floating Cards */}
          <animated.div
            style={cardsSpring}
            className="absolute inset-0 z-30 grid grid-cols-2 gap-4 place-items-center"
          >
            {cardData.map((card, i) => (
              <div
                key={i}
                className="w-56 h-56 sm:w-60 sm:h-60 p-6 bg-white bg-opacity-90 shadow-lg text-center flex flex-col justify-center text-[#c8145a] rounded-none"
              >
                <div className="text-xl font-semibold mb-2 text-[#c8145a]">{card.title}</div>
                <p className="text-sm text-[#c8145a]">{card.desc}</p>
              </div>
            ))}
          </animated.div>
        </div>
      </div>
    </section>
  );
};

// Dummy Card Data
const cardData = [
  {
    title: "Radical Transparency",
    desc: "No black boxes. Nothing to hide. Just clean formulas you'll understand.",
  },
  {
    title: "Clean, Beyond Reproach",
    desc: "Truly safe, dermatologist-reviewed, verified by independent scientists.",
  },
  {
    title: "Potent & Multi-Tasking",
    desc: "Our formulas are shockingly effective and multitask like you do.",
  },
  {
    title: "Conscious & Responsible",
    desc: "Planet-friendly. Ethically sourced. Always made with care.",
  },
];