import anime from "animejs";
import { useEffect, useRef } from "react";

export default function Scroll_down() {
  const Scroll_text = useRef(null);

  useEffect(() => {
    anime({
      targets: Scroll_text.current,
      translateY: ["100%", 0],
      easing: "cubicBezier(0.23, 1, 0.32, 1)",
      delay: 1500,
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="select-none sm:relative sm:mt-8 sm:w-full"
      id="Scroll_down_div-1"
    >
      <div
        className="ml-[-6px] flex overflow-hidden sm:ml-0 sm:justify-center"
        id="Scroll_down_div-2"
      >
        <div
          className="pt-3 font-RobotoCondensed text-lg text-white"
          ref={Scroll_text}
        >
          SCROLL DOWN
        </div>
      </div>
      <div className="relative mt-3 h-[70px]" id="Scroll_down_div-3">
        <span id="scrollLine"></span>
      </div>
    </div>
  );
}
