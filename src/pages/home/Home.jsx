import Main_bg from "./Main_bg";
import Profile_tag from "./Profile_tag";
import Scroll_down from "./Scroll_down";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        <Main_bg />
        <Profile_tag />
        <Scroll_down />
      </div>
    </div>
  );
}
