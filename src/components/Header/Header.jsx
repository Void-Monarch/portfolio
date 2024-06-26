import NavDrawer from "./navbarDrawer";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly">
      <div>
        <Link to="/">
          <img src={logo} className="h-8" />
        </Link>
      </div>
      <NavDrawer />
    </div>
  );
}
