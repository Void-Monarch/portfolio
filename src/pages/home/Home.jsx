import monarch from "../../assets/Monarch-main-pic.png";

export default function Home() {
  return (
    <div className="flex justify-center pt-64">
      <img
        src={monarch}
        id="main_pic"
        alt="monarch"
        className="w-[90%] max-w-[1100px]"
      />
    </div>
  );
}
