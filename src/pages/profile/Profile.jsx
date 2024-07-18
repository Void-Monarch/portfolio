import Content_profile from "./Content_profile";
import Heading_component from "../../components/Heading_component";
import Top_pic from "./Top_pic";

export default function Profile() {
  return (
    <div className="">
      <div className="flex -translate-y-10 justify-center">
        <Top_pic />
      </div>
      <Heading_component text="PROFILE" />
      <div className="flex justify-center">
        <Content_profile />
      </div>
    </div>
  );
}
