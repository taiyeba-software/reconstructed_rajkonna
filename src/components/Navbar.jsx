import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingBag, LogIn } from "lucide-react";
import { AudioToggle } from "@/components/AudioToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navContainerRef = useRef(null); // Ref for the main nav container

  // 1. Replaced Framer Motion's useScroll with a standard React useEffect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Replaced Framer Motion hover animations with GSAP
  useGSAP(() => {
    // Select all nav links within the container
    const links = gsap.utils.toArray(".nav-link");

    links.forEach(link => {
      const underline = link.querySelector(".underline-span");

      // Create a timeline for each link's hover animation
      const tl = gsap.timeline({ paused: true });
      tl.to(underline, {
        width: "100%",
        duration: 0.4,
        ease: "easeInOut",
      });

      // Attach mouse events to play and reverse the timeline
      link.addEventListener("mouseenter", () => tl.play());
      link.addEventListener("mouseleave", () => tl.reverse());
    });
  }, { scope: navContainerRef }); // Scope the GSAP query to our container

  return (
    // Replaced <motion.nav> with <nav>
    <nav
      ref={navContainerRef}
      className={cn(
        "navbar", // Added class for z-index
        "transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-xs" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between py-4" style={{ fontFamily: "MPLUS-Rounded" }}>
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="#hero" className="text-xl font-bold text-primary flex items-center">
            <img src="/images/Rajkonna.png" alt="Brand Logo" className="h-10" />
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            // Replaced <motion.a> with <a> and added "nav-link" class
            <a
              key={key}
              href={item.href}
              className="nav-link relative text-sm font-light text-foreground/80 hover:text-primary transition-colors duration-300 group"
            >
              {item.name}
              {/* Replaced <motion.span> with <span> and added "underline-span" class */}
              <span
                className="underline-span absolute left-0 -bottom-0.5 h-[1px] bg-primary block"
                style={{ width: 0 }} // Initial state set with inline style
              />
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-3 py-1 text-sm font-light text-foreground hover:text-primary border border-border hover:border-primary rounded-full transition flex items-center gap-1">
            <LogIn size={18} /> Log In
          </button>
          <button className="px-3 py-1 text-sm font-light text-foreground hover:text-primary border border-border hover:border-primary rounded-full transition flex items-center gap-1">
            <ShoppingBag size={18} /> Cart
          </button>
          <AudioToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Mobile menu content remains the same */}
          <div className="flex flex-col items-center space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a key={key} href={item.href} className="text-foreground/80 hover:text-primary hover:underline underline-offset-4 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </a>
            ))}
            <button className="text-foreground/80 hover:text-primary flex items-center gap-2 hover:underline underline-offset-4" style={{ fontFamily: "MPLUS-Rounded" }} onClick={() => setIsMenuOpen(false)}>
              <LogIn size={20} /> Log In
            </button>
            <button className="text-foreground/80 hover:text-primary flex items-center gap-2 hover:underline underline-offset-4" style={{ fontFamily: "MPLUS-Rounded" }} onClick={() => setIsMenuOpen(false)}>
              <ShoppingBag size={20} /> Cart
            </button>
            <AudioToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
