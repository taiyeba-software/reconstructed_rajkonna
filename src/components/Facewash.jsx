// src/components/ProductSection.jsx
"use client";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { StarBackground } from "./StarBackground"; // Adjust the path as needed

const productData = [
  {
    id: 1,
    title: "Glow Booster FaceWash",
    desc: "Vitamin C infused.",
    img: "/facewash/1.png",
    hoverImg: "/facewash/10.jpg",
    price: 25,
    discountedPrice: 18,
  },
  {
    id: 2,
    title: "Acne Fiting Facewash",
    desc: "Deep hydration overnight.",
    img: "/facewash/2.png",
    hoverImg: "/facewash/20.jpg",
    price: 20,
    discountedPrice: 15,
  },
  {
    id: 3,
    title: "Charcoal Facewash",
    desc: "Balances & preps skin.",
    img: "/facewash/3.png",
    hoverImg: "/facewash/30.jpg",
    price: 22,
    discountedPrice: 16,
  },
  {
    id: 4,
    title: "White Glow Shower Gel",
    desc: "Balances & preps skin.",
    img: "/facewash/4.png",
    hoverImg: "/facewash/40.jpg",
    price: 28,
    discountedPrice: 21,
  },
  {
    id: 5,
    title: "Moisturizing Shower Gel",
    desc: "Balances & preps skin.",
    img: "/facewash/5.png",
    hoverImg: "/facewash/50.jpg",
    price: 30,
    discountedPrice: 24,
  },
];

export const Facewash = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen px-1 py-20 overflow-hidden bg-[#98bad5]">
      {/* Only one StarBackground */}

      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10 text-primary-foreground/80">
        RajKonna <span className="italic">Facewash</span>
      </h1>
      <StarBackground />
      <StarBackground />
      <StarBackground />
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-end gap-2 mb-4 pr-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full text-amber-950 bg-gray-100 shadow hover:bg-gray-900 hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full text-amber-950 bg-gray-100 shadow hover:bg-gray-900 hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
          >
            {productData.map((product, index) => {
              const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

              const spring = useSpring({
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateX(0px)"
                  : `translateX(${index % 2 === 0 ? "30px" : "-30px"})`,
                config: { mass: 1, tension: 200, friction: 20 },
              });

              return (
                <animated.div
                  ref={ref}
                  key={product.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={spring}
                  className="min-w-[240px] bg-[#d8cec4] rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={hoveredIndex === index ? product.hoverImg : product.img}
                    alt={product.title}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />

                  <h3 className="text-lg font-bold text-amber-900 mb-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#7ca4a1] mb-2">{product.desc}</p>

                  {/* Price + Discounted Price */}
                  <div className="flex justify-center items-center gap-2 mb-3">
                    <span className="text-sm line-through text-gray-400">
                      ${product.price}
                    </span>
                    <span className="text-lg font-bold text-fuchsia-950">
                      ${product.discountedPrice}
                    </span>
                  </div>

                  <button className="px-5 py-2 rounded-full bg-pink-500 text-white font-semibold tracking-wide shadow-md hover:bg-pink-600 hover:scale-105 transition-transform duration-300">
                    Add to Cart
                  </button>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
