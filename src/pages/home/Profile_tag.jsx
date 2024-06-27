import anime from "animejs";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Profile_tag() {
  const profiletagRef = useRef(null);

  useEffect(() => {
    anime({
      targets: profiletagRef.current,
      opacity: [0, 0.5, 0.3, 0.3, 0.7, 0.3, 0.7, 0.2, 0.5, 1],
      duration: 300,
      delay: 900,
      easing: "cubicBezier(.23,1,.32,1)",
    });
  }, []);
  return (
    <div className="mt-0 flex w-full justify-center sm:mt-28">
      <Link to="/profile">
        <div
          className="relative flex w-52 justify-center border border-solid border-white py-3 opacity-0 hover:border-mainpinkog *:hover:text-mainpinkog"
          id="profiletag"
          ref={profiletagRef}
        >
          <span className="font-RobotoCondensed text-sm text-white">
            PROFILE
          </span>
        </div>
      </Link>
    </div>
  );
}
