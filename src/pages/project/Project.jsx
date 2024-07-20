import Heading_component from "../../components/Heading_component";
import Content_project from "./Content_project";
import Top_pic from "./Top_pic";

export default function Project() {
  return (
   <div>
     <div className="flex -translate-y-10 justify-center">
        <Top_pic />
      </div>
      <Heading_component text="PROJECTS" />
      <div className="flex justify-center">
        <Content_project />
      </div>
   </div>
  );
}
