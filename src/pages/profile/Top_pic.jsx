import main_pic from "../../assets/developer.webp";

export default function Top_pic() {
  return (
    <div id="top_pic_profile" className="relative min-w-fit">
      <img src={main_pic} className="max-w-[90vw] sm:max-w-[70vw] rounded-sm" />
    </div>
  );
}
