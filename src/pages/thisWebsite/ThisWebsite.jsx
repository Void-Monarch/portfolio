import Heading_component from "../../components/Heading_component";
import Content_project from "./Content_website";
import Top_pic from "./Top_pic";

export default function ThisWebsite() {
  return (
    <div>
    <div className="flex -translate-y-10 justify-center">
       <Top_pic />
     </div>
     <Heading_component text="This Website" />
     <div className="flex justify-center">
       <Content_project />
     </div>
  </div>
  );
}
