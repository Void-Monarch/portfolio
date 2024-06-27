import { Outlet } from "react-router-dom";
import StarBg from "./StarBg";
import Header from "./Header/Header";

import RobotoCondendensed from "../fonts/RobotoCondensed-Regular.woff";

function AppLayout() {
  return (
    <>
      <StarBg />
      <div className="z-10 m-9 flex flex-col">
        <Header />
        <div className="flex w-full">
          <main className="mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
