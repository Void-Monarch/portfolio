import { useEffect, useRef, useState } from "react";
import Bars, { Cross } from "./Bars";
import StarBg from "../StarBg";
import anime from "animejs";
import monarch from "../../assets/Monarch-side-pic.png";
import { Link } from "react-router-dom";
import github from "../../assets/github_logo.png";
import insta from "../../assets/insta_logo.png";
import linkedin from "../../assets/linedin_logo.png";

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
        duration: 1,
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
        className={`fixed left-0 top-0 z-40 h-dvh w-screen translate-x-[-100%] overflow-hidden bg-black ${isDrawerOpen ? "flex" : "hidden"}`}
        ref={NavDrawerRef}
      >
        <StarBg />

        <div className="relative h-dvh w-full flex-row">
          <div className="h-full py-1">
            <img
              src={monarch}
              ref={monarchRef}
              alt="Monarch"
              className="max-h-dvh w-96 mix-blend-screen"
            />
          </div>
          {/* Menu items  */}
          <div className="absolute top-0 flex h-full w-full items-center justify-center text-white">
            <div className="relative md:w-[650px] md:pt-[40px]">
              <ul className="menuItems flex flex-col justify-around font-RobotoCondensed text-4xl *:relative *:my-8">
                <li className="my-4 cursor-pointer hover:text-mainpinkog">
                  <Link
                    to="/profile"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      return setIsOpen(false);
                    }}
                  >
                    <span className="relative z-10 bg-black pr-2">PROFILE</span>
                  </Link>
                </li>
                <li className="my-4 cursor-pointer hover:text-mainpinkog">
                  <Link
                    to="/techstack"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      return setIsOpen(false);
                    }}
                  >
                    <span className="relative z-10 bg-black pr-2">
                      TECH STACK
                    </span>
                  </Link>
                </li>
                <li className="my-4 cursor-pointer hover:text-mainpinkog">
                  <Link
                    to="/projects"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      return setIsOpen(false);
                    }}
                  >
                    <span className="relative z-10 bg-black pr-2">
                      PROJECTS
                    </span>
                  </Link>
                </li>
                <li className="my-4 cursor-pointer hover:text-mainpinkog">
                  <Link
                    to="/contact"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      return setIsOpen(false);
                    }}
                  >
                    <span className="relative z-10 bg-black pr-2">CONTACT</span>
                  </Link>
                </li>
                <li className="my-4 cursor-pointer hover:text-mainpinkog">
                  <Link
                    to="/thisWebsite"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      return setIsOpen(false);
                    }}
                  >
                    <span className="relative z-10 bg-black pr-2">THIS WEBSITE</span>
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-row justify-center pt-10 *:me-8 md:justify-start md:pt-0">
                <li>
                  <Link to="https://github.com/Void-Monarch" target="_blank">
                    <img src={github} alt="github" className="w-10" />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/harsh_cypher/">
                    <img src={insta} alt="instagram" className="w-10" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/harsh-parashar-54112024b/"
                    target="_blank"
                  >
                    <img src={linkedin} alt="linkedin" className="w-10" />
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
