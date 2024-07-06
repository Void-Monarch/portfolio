import { Link } from "react-router-dom";
import Tag_glow_button from "../../components/Tag_glow_button";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";

export default function Stack_preview() {
  const lines = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    const t2 = anime({
      targets: document.querySelector(".stack_preview_div"),
      opacity: [0, 0.2, 0.4, 0.7, 0.4, 0.7, 1],
      delay: 100,
      duration: 1000,
      easing: "easeInOutQuad",
      autoplay: false,
      onComplete: () => {
        document
          .querySelector(".stack_preview_div")
          .classList.remove("opacity-0");
      },
    });

    if (
      inView == true &&
      document.querySelector(".stack_preview_div").style.opacity == "0"
    ) {
      t2.play();
      anime({
        targets: lines.current,
        width: ["0px", "100%"],
        delay: 500,
        duration: 1000,
        easing: "easeInOutQuad",
      });
    }
  }, [inView]);

  return (
    <div
      className="stack_preview_div flex w-full justify-center opacity-0 sm:mx-auto sm:max-w-[100rem]"
      ref={ref}
    >
      <div className="m-0 flex w-full flex-col sm:w-[46.5%]">
        <div className="font-RobotoCondensed text-white">
          <h2 className="flex w-full flex-row justify-between text-nowrap">
            <div className="w-[30%] overflow-hidden">
              <span className="font-RobotoCondensed text-3xl sm:text-4xl">
                TECH STACK
              </span>
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
          </h2>
          <div>
            
          </div>

          <Link to="https://github.com/Void-Monarch?tab=repositories">
            <Tag_glow_button text="MORE" className="max-w-80" />
          </Link>
        </div>
      </div>
    </div>
  );
}
