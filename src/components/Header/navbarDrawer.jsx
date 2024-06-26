import { useEffect, useRef, useState } from "react";
import Bars, { Cross } from "./Bars";
import StarBg from "../StarBg";
import anime from "animejs";
import monarch from "../../assets/Monarch-side-pic.png";
import { Link } from "react-router-dom";

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const NavDrawerRef = useRef(null);
  const monarchRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsDrawerOpen(true);
      anime({
        targets: monarchRef.current,
        translateX: ["-20%", "0"],
        delay: 300,
        duration: 2000,
        easing: "cubicBezier(.23,1,.32,1)",
      });

      anime({
        targets: NavDrawerRef.current,
        translateX: 0,
        duration: 800,
        easing: "cubicBezier(.23,1,.32,1)",
      });
    }

    if (!isOpen) {
      monarchRef.current.classList.remove("monarch-bg-pic");
      const t1 = anime.timeline({
        duration: 800,
        easing: "cubicBezier(.23,1,.32,1)",
      });

      t1.add({
        targets: NavDrawerRef.current,
        translateX: "100%",
        complete: () => setIsDrawerOpen(false),
      });
      t1.add({
        targets: NavDrawerRef.current,
        translateX: "-100%",
        duration: 10,
      });
    }

    return () => {
      // anime.remove(NavDrawerRef.current);
    };
  }, [isOpen]);

  return (
    <div className="flex w-full flex-row justify-end">
      <div className="fixed z-50">
        <button className="" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Cross /> : <Bars />}
        </button>
      </div>

      <div
        className={`absolute left-0 top-0 z-40 h-screen w-screen translate-x-[-100%] overflow-hidden bg-black ${isDrawerOpen ? "flex" : "hidden"}`}
        ref={NavDrawerRef}
      >
        <StarBg />

        <div className="relative h-screen w-full flex-row">
          <div className="h-full py-1">
            <img
              src={monarch}
              ref={monarchRef}
              alt="Monarch"
              className="max-h-screen w-96 mix-blend-screen"
            />
          </div>
          {/* Menu items  */}
          <div className="absolute top-0 flex h-full w-full items-center justify-center text-white">
            <div className="relative w-[650px] pt-[40px]">
              <ul className="menuItems *:hover:scale-x-1 font-RobotoCondensed text-2xl *:relative *:my-8 lg:text-4xl lg:*:my-16">
                <li className="hover:text-mainpinkog">
                  <Link to="/">
                    <span>PROFILE</span>
                  </Link>
                </li>
                <li className="hover:text-mainpinkog">
                  <Link to="/techstack">
                    <span>TECH STACK</span>
                  </Link>
                </li>
                <li className="hover:text-mainpinkog">
                  <Link to="/projects">
                    <span>PROJECTS</span>
                  </Link>
                </li>
                <li className="hover:text-mainpinkog">
                  <Link to="/contact">
                    <span>CONTACT</span>
                  </Link>
                </li>
                <li className="hover:text-mainpinkog">
                  <Link to="/hobbies">
                    <span>HOBBIES</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
