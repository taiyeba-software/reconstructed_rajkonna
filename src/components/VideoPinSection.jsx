{/*import { useEffect, useRef } from "react";


import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const VideoPinSection = () => {
  const videoContainer = useRef();
  const videoRef = useRef(null);


    useEffect(() => {
    const container = videoContainer.current;
    const videoBox = videoRef.current;

    gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "-10 top",
        end: "120 top",
        scrub: 1,
        pin: true,
      },
    }).to(videoBox, {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
    });
  }, []);


  return (
  <div
    id="home"
    ref={videoContainer}
    className="relative w-full h-[110vh]  sm:h-[150vh] overflow-hidden z-0"
  >
   
    <div
      ref={videoRef}
      className="video-box absolute top-0 left-0 w-full h-full overflow-y-hidden"
      style={{
        clipPath: "circle(0.5% at 50% 50%)", // Initial hidden state
        WebkitClipPath: "circle(0.5% at 50% 50%)", // Safari fix
      }}
    >
      <video
        className="w-full h-full object-cover filter-glitter"
        src="/assets/videos/pin-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="glitter-section z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }} />
        ))}
      </div>

    </div>
  </div>
);

};


*/}

import { useRef } from "react";


export const VideoPinSection = () => {
  const videoContainer = useRef();
  const videoRef = useRef(null);


   

  return (
  <div
    id="home"
    ref={videoContainer}
    className="relative w-full h-[110vh]  sm:h-[150vh] overflow-hidden z-0"
  >
   
    <div
      ref={videoRef}
      className="video-box absolute top-0 left-0 w-full h-full overflow-y-hidden"
    >
      <video
        className="w-full h-full object-cover filter-glitter"
        src="/assets/videos/pin-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      

      <div className="glitter-section z-10">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="star" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`
          }} />
        ))}
      </div>

    </div>
  </div>
);

};





