import { useEffect, useRef } from "react";
import Tag_glow_button from "../../components/Tag_glow_button";
import anime from "animejs";
import { Link } from "react-router-dom";

export default function Content_profile() {
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
      className="m-0 flex justify-center pl-1 pt-10 font-RobotoCondensed text-xl text-white sm:pl-0 md:max-w-[72vw]"
      ref={main}
    >
      <div>
        <div>
          Hi there! I am a Harsh Parashar aka <span>VoidMonarch </span>
          on github.
        </div>
        <br />
        I am a software developer, I specialize in crafting innovative and
        secure web solutions using Python and JavaScript. With a passion for web
        development and cybersecurity, I bring a robust blend of technical
        skills and creative problem-solving abilities to every project. My
        expertise in full-stack development ensures that I can build and
        maintain scalable and efficient web applications from front to back end.
        <br />
        <br />
        Currently in University persuing my Masters, specializing in web
        development and cybersecurity.
        <br />
        <br />
        Would love to connect with you, feel free to reach out to me on my
        socials.
        <Link to="/contact">
          <Tag_glow_button text="SOCIALS" className="sm:max-w-56" />
        </Link>
      </div>
    </div>
  );
}
