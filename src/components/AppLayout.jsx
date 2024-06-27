import { Outlet } from "react-router-dom";
import StarBg from "./StarBg";
import Header from "./Header/Header";

function AppLayout() {
  return (
    <>
      <StarBg />
      <div className="z-10 m-4 sm:m-9 flex flex-col">
        <Header />
        <div className="w-full">
          <main className="sm:mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;