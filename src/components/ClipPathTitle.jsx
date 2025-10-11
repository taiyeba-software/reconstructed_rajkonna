// ClipPathTitle.jsx


export const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
  const titleRef = useRef();
  const initialClip = "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)";
  const fullClip = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";

  
    return (
    <div
      className="general-title relative overflow-hidden"
      ref={titleRef}
    >
      

      {/* ✂️ Clipped title box */}
      <div
        style={{ borderColor }}
        className={`${className} border-[.5vw] text-nowrap z-10 relative`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{ backgroundColor: bg }}
        >
          <h2 style={{ color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};


