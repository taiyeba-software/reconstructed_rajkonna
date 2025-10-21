

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
        src="/assets/videos/hero.mp4"
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





