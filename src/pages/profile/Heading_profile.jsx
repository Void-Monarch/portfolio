import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Heading_profile() {
  const lines = useRef(null);
  const heading = useRef(null);

  useEffect(() => {
    anime({
      targets: heading.current,
      opacity: [0, 1],
      delay: 300,
      duration: 1500,
      easing: "easeInOutQuad",
    });

    anime({
      targets: lines.current,
      width: ["0px", "100%"],
      delay: 300,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, [lines]);
  return (
    <>
      <div className="flex justify-center font-impact text-white">
        <h1 className="flex w-full md:max-w-[75vw] flex-row justify-center text-3xl sm:text-5xl lg:text-7xl">
          <div className="w-[30%]" ref={heading}>
            <span className="">PROFILE</span>
          </div>
          <div className="relative w-[65%]">
            <div className="lines" ref={lines}>
              <span className="hori hori-1"></span>
              <span className="hori hori-2"></span>
              <span className="hori hori-3"></span>
              <span className="hori hori-4"></span>
              <span className="hori hori-5"></span>
            </div>
          </div>
        </h1>
      </div>
    </>
  );
}
