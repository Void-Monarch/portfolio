import { useEffect, useRef } from "react";
import Tag_glow_button from "../../components/Tag_glow_button";
import anime from "animejs";
import { Link } from "react-router-dom";
import findmyway1 from "../../assets/Find_my_Way-2.png";
import farmkart from "../../assets/Farmkart.png";
import ims from "../../assets/ims.png";

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
      <div className="flex w-full flex-col justify-start">
        <div className="flex justify-start font-impact text-3xl text-mainpink">
          <Link to="https://github.com/Void-Monarch/Farmkart" target="_blank">
            <span className="hover:text-yellow-300">FarmKart</span>
          </Link>
        </div>
        <div>
          <div className="flex justify-start font-impact text-2xl text-purple-400">
            A platform to connect farmers to consumers
          </div>
          <div className="flex flex-col justify-start gap-5 pt-2 text-lg text-gray-500 lg:flex-row">
            <div className="lg:w-[70%]">
              FarmKart is a user-friendly e-commerce website designed to bridge
              the gap between farmers and consumers. It provides a digital
              marketplace where farmers can list and sell their fresh produce
              and agricultural products directly to customers. By eliminating
              intermediaries, FarmKart aims to empower farmers, provide
              consumers with high-quality farm-fresh products, and promote
              sustainable agriculture.
              <div>
                Technologies Used :: Django 4.0 | Tailwind CSS | sqlite3
              </div>
            </div>
            <div className="lg:w-[30%]">
              <Link
                to="https://github.com/Void-Monarch/Farmkart"
                target="_blank"
              >
                <img
                  src={farmkart}
                  className="rounded-md hover:shadow-lg hover:shadow-purple-400"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-start">
        <div className="flex justify-start font-impact text-3xl text-mainpink">
          <Link
            to="https://github.com/Void-Monarch/Find-My-Way"
            target="_blank"
          >
            <span className="hover:text-yellow-300">Find My Way</span>
          </Link>
        </div>
        <div>
          <div className="flex justify-start font-impact text-2xl text-purple-400">
            A platform to empower and support the disabled community
          </div>
          <div className="flex flex-col justify-start gap-5 pt-2 text-lg text-gray-500 lg:flex-row-reverse">
            <div className="lg:w-[70%]">
              Find My Way is a dynamic web application built using Node.js, a
              powerful JavaScript runtime, renowned for its efficiency and
              scalability in building server-side applications. Leveraging the
              Express.js framework, the website ensures rapid development and
              robust routing capabilities, enabling seamless navigation and
              efficient handling of HTTP requests.fully responsive to work on
              both large screen (laptops) and small screen devices ( mobile
              phones )
              <div>
                Technologies Used :: NodeJs &gt;=20.0.1 | Tailwind CSS
                &gt;=3.0.0 | Ejs | Mongoose 8 | MongoDB | JWT | webpack
              </div>
            </div>
            <div className="lg:w-[30%]">
              <Link
                to="https://github.com/Void-Monarch/Find-My-Way"
                target="_blank"
              >
                <img
                  src={findmyway1}
                  className="rounded-md hover:shadow-lg hover:shadow-purple-400"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-start">
        <div className="flex justify-start font-impact text-3xl text-mainpink">
          <Link to="https://github.com/Void-Monarch/IMS" target="_blank">
            <span className="hover:text-yellow-300">
              Inventory management System
            </span>
          </Link>
        </div>
        <div>
          <div className="flex justify-start font-impact text-2xl text-purple-400">
            A platform to connect farmers to consumers
          </div>
          <div className="flex flex-col justify-start gap-5 pt-2 text-lg text-gray-500 lg:flex-row">
            <div className="lg:w-[70%]">
              The Information Management System (IMS) : : is a web-based
              application designed to streamline data management and product
              cataloging for businesses. It provides a user-friendly interface
              for efficiently storing and retrieving information, making it a
              valuable tool for various industries.
              <div>
                Technologies Used :: Django 4.0 | Bootstrap 4.6 | Vanila
                Javascript
              </div>
            </div>
            <div className="lg:w-[30%]">
              <Link
                to="https://github.com/Void-Monarch/Farmkart"
                target="_blank"
              >
                <img
                  src={ims}
                  className="rounded-md hover:shadow-lg hover:shadow-purple-400 md:-translate-y-7"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="*:max-w-48 pb-5">
        <Link
          to="https://github.com/Void-Monarch?tab=repositories"
          target="_blank"
        >
          <Tag_glow_button text="View More" className="w-48" />
        </Link>
      </div>
    </div>
  );
}
