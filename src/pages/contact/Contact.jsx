import { Link } from "react-router-dom";
import Heading_component from "../../components/Heading_component";
import github from "../../assets/github_logo.png";
import insta from "../../assets/insta_logo.png";
import linkedin from "../../assets/linedin_logo.png";

export default function Contact() {
  return (
    <div className="m-0 pt-20 text-white">
      <Heading_component text="Contact" />
      <div className="pt-10 font-RobotoCondensed text-2xl md:pl-20 md:text-4xl text-purple-400">
        Hi there ! Lets connect
      </div>
      <div className="flex flex-row justify-evenly pt-20 pb-48">
        <div className="flex flex-col justify-center hover:text-mainpink">
          <Link to="https://www.instagram.com/harsh_cypher/">
            <img src={insta} alt="instagram" className="w-24" />

            <div className="text-center font-RobotoCondensed">Instagram</div>
          </Link>
        </div>
        <div className="flex flex-col justify-center hover:text-mainpink" >
          <Link
            to="https://www.linkedin.com/in/harsh-parashar-54112024b/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="w-24" />
            <div className="text-center font-RobotoCondensed">LinkedIn</div>
          </Link>
        </div>
        <div className="flex flex-col justify-center hover:text-mainpink">
        <Link to="https://github.com/Void-Monarch" target="_blank">
        <img src={github} alt="github" className="w-24" />
            <div className="text-center font-RobotoCondensed">Github</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
