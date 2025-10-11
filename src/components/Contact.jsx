"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { StarBackground } from "./StarBackground";

export const Contact= () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full min-h-screen bg-background px-6 py-20 flex flex-col items-center text-[#7ca4a1]" id="contact">
        <StarBackground/>
        <StarBackground/>
      <h2 className="text-4xl font-bold mb-6 text-amber-900">Contact Rajkonna</h2>
      <p className="max-w-lg text-center mb-10 px-4 text-foreground">
        Have questions or want to start your skincare ritual? Reach out to us!
      </p>

      {submitted ? (
        <div className="text-center text-lg text-[#c69fac] font-semibold">
          Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-6"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-[#c69fac] focus:outline-none focus:ring-2 focus:ring-[#C8145A] bg-[#fff5f8] text-[#7ca4a1]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-[#c69fac] focus:outline-none focus:ring-2 focus:ring-[#C8145A] bg-[#fff5f8] text-[#7ca4a1]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-3 rounded-md border border-[#c69fac] focus:outline-none focus:ring-2 focus:ring-[#C8145A] bg-[#fff5f8] text-[#7ca4a1]"
          />

          <motion.button
            type="submit"
            whileHover={{
              scale: 1.08,
              rotate: -1,
              boxShadow: "0 0 26px rgba(200, 20, 90, 0.6)",
              filter: "brightness(1.2) blur(0.5px)",
              backgroundColor: "#C8145A",
            }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-6 px-6 py-3 rounded-full bg-[#C8145A] text-white font-mplus shadow-md animate-glow text-center"
            title="Send Message"
          >
            Send Message
          </motion.button>
        </form>
      )}

    </section>
  );
};
