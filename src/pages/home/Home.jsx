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
      <br />
      <h1 className="font-RobotoCondensed text-3xl text-white">Hello</h1>
    </div>
  );
}
