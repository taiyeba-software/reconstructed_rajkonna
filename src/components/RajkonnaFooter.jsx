import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import { StarBackground } from "./StarBackground";

export const RajkonnaFooter = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b bg-[#7ca4a1] text-[#81414d] py-12 px-6 overflow-hidden">
        <StarBackground/>
      <div className="absolute inset-0 pointer-events-none opacity-30 animate-pulse bg-[url('/stars.svg')] bg-repeat" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-spectral font-bold text-foreground">
            Rajkonna
        </h3>

          <p className="mt-1 text-sm font-mplus text-foreground italic">
            Feel like royalty, every single day
          </p>
        </div>
        <div className="flex gap-6 text-primary text-2xl">
          {[
            {
              href: "https://www.facebook.com/rajkonnabd",
              icon: <FaFacebookF />,
              label: "Facebook",
            },
            {
              href: "https://www.instagram.com/rajkonnabd/",
              icon: <FaInstagram />,
              label: "Instagram",
            },
            {
              href: "https://www.tiktok.com/@rajkonnabd",
              icon: <FaTiktok />,
              label: "TikTok",
            },
          ].map(({ href, icon, label }, idx) => (
            <motion.a
              key={label}
              href={href}
              title={`Rajkonna ${label}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2 + idx * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hover:text-[#ff91ac] transition-all"
            >
              {icon}
            </motion.a>
          ))}
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-foreground text-center md:text-right font-mplus">
          &copy; {new Date().getFullYear()} Rajkonna. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
