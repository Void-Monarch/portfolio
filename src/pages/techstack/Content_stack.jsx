import { useEffect, useRef } from "react";
import anime from "animejs";

import jslogo from "../../assets/JavaScript-logo.png";
import pylogo from "../../assets/Python_icon.png";
import rustlogo from "../../assets/rustlogo.webp";
import csharp from "../../assets/Csharp_Logo.png";
import javalogo from "../../assets/Java-Logo.png";
import sqllite from "../../assets/sqllitelogo.png"
import prostgresslogo from "../../assets/prostgresslogo.png"
import reactlogo from "../../assets/react-icon.png";
import nextlogo from "../../assets/nextlogo.webp";
import tailwindlogo from "../../assets/tailwindlogo.jpg";
import mongoDBlogo from "../../assets/mongologo.png";
import nodelogo from "../../assets/nodejs.jpg";
import sqllogo from "../../assets/mySQLlogo.png";
import djangologo from "../../assets/djangologo.png";
import tslogo from "../../assets/Typescript_logo.png";

export default function Content_stack() {
  const main = useRef(null);

  useEffect(() => {
    anime({
      targets: main.current,
      opacity: [0, 1],
      delay: 1200,
      duration: 1000,
      easing: "easeInOutQuad",
    });
  }, []);

  return (
    <div
      className="m-0 flex flex-col pl-1 pt-10 font-RobotoCondensed text-xl text-white sm:pl-0 md:w-[70vw] md:max-w-[72vw]"
      ref={main}
    >
      <div className="flex w-full flex-col">
        <div className="pb-10 font-impact text-3xl">Languages</div>
        <div className="flex flex-row justify-evenly *:*:size-20">
          <div className="item text-center">
            <img
              src={jslogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>JavaScript</h5>
          </div>
          <div className="item text-center">
            <img
              src={tslogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>TypeScript</h5>
          </div>
          <div className="item text-center">
            <img
              src={pylogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>Python</h5>
          </div>
          <div className="item text-center">
            <img
              src={rustlogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>Rust</h5>
          </div>
          <div className="item text-center">
            <img
              src={csharp}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>C#</h5>
          </div>
          <div className="item text-center">
            <img
              src={javalogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>Java</h5>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="pb-10 font-impact text-3xl">FrameWorks</div>
        <div className="flex flex-row justify-evenly *:*:size-20">
          <div className="item text-center">
            <img
              src={reactlogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>React</h5>
          </div>
          <div className="item text-center">
            <img
              src={nextlogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>Next JS</h5>
          </div>
          <div className="item text-center">
            <img
              src={tailwindlogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>TailWind CSS</h5>
          </div>
          <div className="item text-center">
            <img
              src={nodelogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>NodeJS</h5>
          </div>
          <div className="item text-center">
            <img
              src={djangologo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>Django</h5>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="pb-10 font-impact text-3xl">Databases</div>
        <div className="flex flex-row justify-evenly *:*:size-20">
          <div className="item text-center">
            <img
              src={sqllogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>MySQL</h5>
          </div>
          <div className="item text-center">
            <img
              src={mongoDBlogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>MongoDB</h5>
          </div>
          <div className="item text-center">
            <img
              src={sqllite}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>SQLite</h5>
          </div>
          <div className="item text-center">
            <img
              src={prostgresslogo}
              alt="Image"
              className="aspect-square rounded-xl object-cover"
            />
            <h5>Postgress</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
