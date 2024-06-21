import { useEffect, useRef, useState } from "react";
import Bars, { Cross } from "./Bars";
import StarBg from "../StarBg";
import anime from "animejs";

export default function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const NavDrawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsDrawerOpen(true);
      anime({
        targets: NavDrawerRef.current,
        translateX: 0,
        duration: 800,
        easing: "cubicBezier(.23,1,.32,1)",
      });
    }

    if (!isOpen) {
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
      anime.remove(NavDrawerRef.current);
    };
  }, [isOpen]);

  return (
    <div className="flex w-full flex-row justify-end">
      <div className="z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Cross /> : <Bars />}
        </button>
      </div>

      <div
        className={`absolute left-0 z-40 h-full w-screen translate-x-[-100%] overflow-hidden bg-black ${isDrawerOpen ? "flex" : "hidden"}`}
        ref={NavDrawerRef}
      >
        <StarBg />
        <div className="text-9xl text-white">Picture</div>
      </div>
    </div>
  );
}
