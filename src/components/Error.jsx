import { Link } from "react-router-dom";
import error404 from "../assets/404.svg";
import Tag_glow_button from "./Tag_glow_button";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Error() {
  const er404 = useRef(null);
  useEffect(() => {
    anime({
      targets: er404.current,
      opacity: [0.2, 0.5, 0.4, 0.7, 0.4, 0.7, 0.9],
      loop: true,
      easing: "easeInOutQuad",
      duration: 1200,
      direction: "alternate",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center pt-52 sm:pt-20">
      <div className="h-56 sm:h-112">
        <img src={error404} className="h-56 sm:h-112" ref={er404} />
      </div>

      <div className="*:max-w-48">
        <Link to={"/"}>
          <Tag_glow_button text="HOME" className="w-48" />
        </Link>
      </div>
    </div>
  );
}
