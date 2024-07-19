import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import anime from "animejs";
import findmyway1 from "../../assets/Find_my_Way-1.png";
import farmkart from "../../assets/Farmkart.png";
import ims from "../../assets/ims.png";
import workser from "../../assets/coding-workshop-concept-illustration.png";
import Tag_glow_button from "../../components/Tag_glow_button";
import anime_small from "../../assets/anime_small.jpg";
import manga_small from "../../assets/manga_Small.jpg";
import manhwa_small from "../../assets/manhwa_small.jpg";
import light_novel from "../../assets/light_novel.jpg";

export default function Center_element() {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const t1 = anime({
      targets: document.querySelector("#center-element"),
      opacity: [0, 0.2, 0.4, 0.7, 0.4, 0.7, 1],
      delay: 100,
      duration: 1000,
      easing: "easeInOutQuad",
      autoplay: false,
    });
    if (
      inView &&
      document.querySelector("#center-element").style.opacity == "0"
    ) {
      t1.play();
    }
  }, [inView]);

  return (
    <div
      className="mb-20 mt-40 flex w-full flex-col justify-between pt-10 opacity-0 *:mb-10 sm:mx-auto sm:max-w-256 sm:flex-row"
      id="center-element"
      ref={ref}
    >
      <div className="m-0 flex w-full flex-col sm:w-[46.5%]">
        <div className="font-RobotoCondensed text-white">
          <h2 className="flex w-full flex-row justify-between">
            <div className="w-[30%]">
              <span className="font-RobotoCondensed text-3xl sm:text-4xl">
                PROJECT
              </span>
            </div>
            <div className="relative w-[65%]">
              <div className="lines">
                <span className="hori hori-1"></span>
                <span className="hori hori-2"></span>
                <span className="hori hori-3"></span>
                <span className="hori hori-4"></span>
                <span className="hori hori-5"></span>
              </div>
            </div>
          </h2>
          <ul className="my-5 mt-8 font-RobotoCondensed text-white">
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">FIND MY WAY</div>
              <div className="flex w-full flex-row">
                <img
                  src={findmyway1}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  Find My Way is a dynamic web application built using Node.js,
                  a powerful JavaScript runtime, renowned for its efficiency and
                  scalability in building server-side applications.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">FARMKART</div>
              <div className="flex w-full flex-row">
                <img
                  src={farmkart}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  FarmKart is a user-friendly e-commerce website designed to
                  bridge the gap between farmers and consumers. It provides a
                  marketplace to sell their fresh produce and agricultural
                  products directly to customers.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">
                INVENTORY MANAGEMENT SYSTEM
              </div>
              <div className="flex w-full flex-row">
                <img
                  src={ims}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  The Inventory Management System (IMS) is a web-based
                  application designed to streamline data management and product
                  cataloging for businesses.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">RESTRO SERVER</div>
              <div className="flex w-full flex-row">
                <img
                  src={workser}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  This Node.js server serves as the backend for an online food
                  ordering application. The app is designed to cater to the food
                  needs of university students, allowing them to order food from
                  local vendors, with students as delivery partners.
                </div>
              </div>
            </div>
          </ul>
          <Link to="https://github.com/Void-Monarch?tab=repositories" target="_blank">
            <Tag_glow_button text="MORE" />
          </Link>
        </div>
      </div>

      {/* SENCOND COLUMN */}

      <div className="m-0 flex w-full flex-col sm:w-[46.5%]">
        <div className="font-RobotoCondensed text-white">
          <h2 className="flex w-full flex-row justify-between">
            <div className="w-[30%]">
              <span className="font-RobotoCondensed text-3xl sm:text-4xl">
                HOBBIES
              </span>
            </div>
            <div className="relative w-[65%]">
              <div className="lines">
                <span className="hori hori-1"></span>
                <span className="hori hori-2"></span>
                <span className="hori hori-3"></span>
                <span className="hori hori-4"></span>
                <span className="hori hori-5"></span>
              </div>
            </div>
          </h2>
          <ul className="my-5 mt-8 font-RobotoCondensed text-white">
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">ANIME</div>
              <div className="flex w-full flex-row">
                <img
                  src={anime_small}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  Anime is a popular form of animation originating from Japan.
                  It often features vibrant visuals, compelling storytelling,
                  and diverse genres such as action, romance, and fantasy.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">MANGA</div>
              <div className="flex w-full flex-row">
                <img
                  src={manga_small}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  Manga is a Japanese comic book or graphic novel that is
                  typically serialized and features a wide range of genres such
                  as action, romance, fantasy, and more.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">MANHWA</div>
              <div className="flex w-full flex-row">
                <img
                  src={manhwa_small}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  Manhwa is a Korean comic book or graphic novel that is similar
                  to manga. It is known for its unique art style, captivating
                  storytelling, and diverse genres.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">
                LIGHT NOVELS/WEB NOVELS
              </div>
              <div className="flex w-full flex-row">
                <img
                  src={light_novel}
                  className="w-20 rounded-md p-1 sm:aspect-[16/9] sm:object-cover"
                />
                <div className="text-sm sm:text-sm">
                  Light novels and web novels are popular forms of written
                  entertainment originating from Japan and other countries. They
                  are often serialized online and feature a wide range of genres
                  such as fantasy, romance, and adventure.
                </div>
              </div>
            </div>
          </ul>
          <Link
            to="/hobbies"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Tag_glow_button text="MORE" />
          </Link>
        </div>
      </div>
    </div>
  );
}
