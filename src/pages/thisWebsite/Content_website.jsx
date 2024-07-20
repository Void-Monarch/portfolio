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
      className="m-0 flex w-full flex-col justify-center gap-10 pl-1 pt-10 font-RobotoCondensed text-xl text-white sm:pl-0 md:max-w-[72vw]"
      ref={main}
    >
      <div>
        <p>
          This website was built using React, Tailwind CSS, and Vite. It is a
          single-page application (SPA) that uses React Router for navigation.
          The website is hosted on Vercel and the source code is available on
          &nbsp;
          <a href="https://github.com/Void-Monarch/portfolio" target="_blank">
            <span className="underline hover:text-purple-400">GitHub.</span>
          </a>
        </p>
        <br />
        <p>
          The Design idea for this website comes from{" "}
          <a
            className="underline hover:text-purple-400"
            href="https://www.yoasobi-music.jp/"
          >
            Yoasobi Website
          </a>
          . Yaosobi is a 2 person japaneese music band that I really like. I
          decided to borrow their website design for my porfolio website. The
          website is responsive and works well on mobile devices. This was my
          first time useing React to built a website and I am happy with the
          result, I hope you like it too.
        </p>
        <br />
        <p className="*:underline">
          Technologies used in making of this website are :{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            className="hover:text-purple-400"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            className="hover:text-purple-400"
          >
            Tailwind CSS
          </a>{" "}
          ,
          <a
            className="hover:text-purple-400"
            href="https://vitejs.dev/"
            target="_blank"
          >
            Vite
          </a>
          ,{" "}
          <a
            className="hover:text-purple-400"
            href="https://reactrouter.com/en/main"
            target="_blank"
          >
            React Router
          </a>
          , and{" "}
          <a
            className="hover:text-purple-400"
            href="https://animejs.com/"
            target="_blank"
          >
            Animejs
          </a>
          .
        </p>
        <br />
        <p>
          You are free to use the source code to this website to create your own
          Portfolio or any other project , just remember to give credits.
        </p>
        <br />
        <Link to="https://github.com/Void-Monarch/portfolio" target="_blank">
          <Tag_glow_button text="Source Code" className="max-w-48" />
        </Link>
      </div>
    </div>
  );
}
