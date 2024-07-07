import { Link } from "react-router-dom";
import Tag_glow_button from "../../components/Tag_glow_button";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import jslogo from "../../assets/JavaScript-logo.png";
import pylogo from "../../assets/Python_icon.png";
import reactlogo from "../../assets/react-icon.png";
import nextlogo from "../../assets/nextlogo.webp";
import rustlogo from "../../assets/rustlogo.webp";
import tailwindlogo from "../../assets/tailwindlogo.jpg";
import mongoDBlogo from "../../assets/mongologo.png";
import dockerlogo from "../../assets/dockerlogo.png";
import nodelogo from "../../assets/nodejs.jpg";

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      className="stack_preview_div flex w-full justify-center opacity-0 sm:mx-auto sm:max-w-[100rem]"
      ref={ref}
    >
      <div className="m-0 flex w-full flex-col sm:w-[46.5%]">
        <div className="font-RobotoCondensed text-white">
          <h2 className="flex w-full flex-row justify-between text-nowrap">
            <div className="w-[40%] overflow-hidden sm:w-[30%]">
              <span className="font-RobotoCondensed text-3xl sm:text-4xl">
                TECH STACK
              </span>
            </div>
            <div className="relative w-[50%] sm:w-[65%]">
              <div className="lines" ref={lines}>
                <span className="hori hori-1"></span>
                <span className="hori hori-2"></span>
                <span className="hori hori-3"></span>
                <span className="hori hori-4"></span>
                <span className="hori hori-5"></span>
              </div>
            </div>
          </h2>

          <Carousel
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            className="my-10"
            autoPlay={true}
            // partialVisible={true}
            autoPlaySpeed={1500}
            centerMode={true}
            arrows={false}
            customTransition="transition-all  duration-700"
            itemClass="rounded-xl p-5"
            transitionDuration={500}
          >
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
                src={pylogo}
                alt="Image"
                className="aspect-square rounded-xl object-cover"
              />
              <h5>Python</h5>
            </div>
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
                src={rustlogo}
                alt="Image"
                className="aspect-square rounded-xl object-cover"
              />
              <h5>Rust</h5>
            </div>
            <div className="item text-center">
              <img
                src={dockerlogo}
                alt="Image"
                className="aspect-square rounded-xl object-cover"
              />
              <h5>Docker</h5>
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
                src={nodelogo}
                alt="Image"
                className="aspect-square rounded-xl object-cover"
              />
              <h5>NodeJS</h5>
            </div>
          </Carousel>

          <Link to="/techstack">
            <Tag_glow_button text="MORE" className="max-w-80" />
          </Link>
        </div>
      </div>
    </div>
  );
}
