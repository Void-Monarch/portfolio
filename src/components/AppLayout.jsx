import { Outlet } from "react-router-dom";
import StarBg from "./StarBg";
import Header from "./Header/Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <StarBg />
      <div className="z-10 m-4 flex flex-col sm:m-9">
        <Header />
        <div className="w-full">
          <main className="sm:mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppLayout;
