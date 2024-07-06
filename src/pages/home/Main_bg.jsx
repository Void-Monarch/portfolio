import { useEffect, useRef } from "react";
import monarch from "../../assets/Monarch-main-pic.png";
import anime from "animejs";

export default function Main_bg() {
  const main_pic_div = useRef(null);
  const main_pic = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 650) {
      console.log(window.innerWidth);
      const rect = main_pic.current.getBoundingClientRect();
      main_pic_div.current.style.paddingTop = `${rect.bottom}px`;
    }
  }, []);

  useEffect(() => {
    anime({
      targets: main_pic.current,
      opacity: [0, 1],
      easing: "cubicBezier(0.23, 1, 0.32, 1)",
      duration: 1000,
    });
  }, []);

  return (
    <div
      className="flex justify-center pt-64"
      id="main_pic_div"
      ref={main_pic_div}
    >
      <img
        src={monarch}
        id="main_pic"
        ref={main_pic}
        alt="monarch"
        className="w-[90%] max-w-[1100px] opacity-0"
      />
    </div>
  );
}
