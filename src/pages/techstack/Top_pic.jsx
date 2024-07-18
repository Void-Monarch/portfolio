import { useEffect, useRef } from "react";
import main_pic from "../../assets/25860683_7081471.png";
import anime from "animejs";

export default function Top_pic() {
  const pic = useRef(null);

  useEffect(() => {
    anime({
      targets: pic.current,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1200,
    });
  }, []);

  return (
    <div id="top_pic_profile" className="relative min-w-fit" ref={pic}>
      <img src={main_pic} className="max-w-[90vw] rounded-sm sm:max-w-[70vw] sm:max-h-128" />
    </div>
  );
}
