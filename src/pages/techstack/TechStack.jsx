import Top_pic from "./Top_pic";
import Heading_component from "../../components/Heading_component";
import Content_stack from "./Content_stack";

export default function TechStack() {
  return (
    <div className="">
      <div className="flex -translate-y-10 justify-center">
        <Top_pic />
      </div>
      <Heading_component text="TECH STACK"/>
      <div className="flex justify-center">
        <Content_stack />
      </div>
    </div>
  );
}
