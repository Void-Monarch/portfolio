import NavDrawer from "./navbarDrawer";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="flex flex-row justify-evenly">
      <div>
        <img src={logo} className="h-8" />
      </div>
      <NavDrawer />
    </div>
  );
}
