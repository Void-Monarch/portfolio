import NavDrawer from "./navbarDrawer";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row justify-between">
      <div className="fixed">
        <Link to="/" className="flex flex-row justify-start">
          <img src={logo} className="h-8" />
          <span className="self-end text-nowrap font-impact text-xl text-mainpinkog ms-1 hidden md:block ">
            VOID MONARCH
          </span>
        </Link>
      </div>
      <NavDrawer />
    </div>
  );
}
