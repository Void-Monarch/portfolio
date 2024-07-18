import Content_profile from "./Content_profile";
import Heading_profile from "./Heading_profile";
import Top_pic from "./Top_pic";

export default function Profile() {
  return (
    <div className="">
      <div className="flex -translate-y-10 justify-center">
        <Top_pic />
      </div>
      <Heading_profile />
      <div className="flex justify-center">
        <Content_profile />
      </div>
    </div>
  );
}
