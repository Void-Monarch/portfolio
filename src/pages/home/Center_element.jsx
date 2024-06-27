import findmyway1 from "../../assets/Find_my_Way-1.png";
import farmkart from "../../assets/Farmkart.png";
import ims from "../../assets/ims.png";
import workser from "../../assets/coding-workshop-concept-illustration.png";
import Tag_glow_button from "../../components/Tag_glow_button";

export default function Center_element() {
  return (
    <div className="mt-40 flex w-full flex-col justify-between pt-10 *:mb-10 sm:mx-auto sm:max-w-256 sm:flex-row">
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
                <img src={findmyway1} className="w-20 rounded-md p-1" />
                <div className="text-sm sm:text-sm">
                  Find My Way is a dynamic web application built using Node.js,
                  a powerful JavaScript runtime, renowned for its efficiency and
                  scalability in building server-side applications.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">FIND MY WAY</div>
              <div className="flex w-full flex-row">
                <img src={farmkart} className="w-20 rounded-md p-1" />
                <div className="text-sm sm:text-sm">
                  FarmKart is a user-friendly e-commerce website designed to
                  bridge the gap between farmers and consumers. It provides a
                  marketplace to sell their fresh produce and agricultural
                  products directly to customers.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">FIND MY WAY</div>
              <div className="flex w-full flex-row">
                <img src={ims} className="w-20 rounded-md p-1" />
                <div className="text-sm sm:text-sm">
                  The Information Management System (IMS) is a web-based
                  application designed to streamline data management and product
                  cataloging for businesses.
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <div className="text-sm text-gray-300">FIND MY WAY</div>
              <div className="flex w-full flex-row">
                <img src={workser} className="w-20 rounded-md p-1" />
                <div className="text-sm sm:text-sm">
                  This Node.js server serves as the backend for an online food
                  ordering application. The app is designed to cater to the food
                  needs of university students, allowing them to conveniently
                  order food from local vendors
                </div>
              </div>
            </div>
          </ul>
          <Tag_glow_button text="MORE" />
        </div>
      </div>
      {/* SENCOND COLUMN */}
      <div className="m-0 flex w-full flex-col sm:w-[46.5%]">
        <div className="font-RobotoCondensed text-white">
          <h2 className="flex w-full flex-row justify-between">
            <div className="w-[30%]">
              <span className="font-RobotoCondensed text-3xl sm:text-4xl">
                STACK
              </span>
            </div>
            <div className="relative w-[70%]">
              <div className="lines">
                <span className="hori hori-1"></span>
                <span className="hori hori-2"></span>
                <span className="hori hori-3"></span>
                <span className="hori hori-4"></span>
                <span className="hori hori-5"></span>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
