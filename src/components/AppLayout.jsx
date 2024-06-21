import { Outlet } from "react-router-dom";
import StarBg from "./StarBg";
import Header from "./Header/Header";

function AppLayout() {
  return (
    <>
      <StarBg />
      <div className="z-10 m-9 flex flex-col">
        <Header />
        <div className="relative flex w-full overflow-hidden transition-all">
          <main className="m-auto">
            <Outlet />
            <h1 className="text-9xl text-pink-600">Void Monarch</h1>
          </main>
        </div>
      </div>
    </>
  );
}

export default AppLayout;
