import monarch from "../../assets/Monarch-main-pic.png";

export default function Home() {
  return (
    <div className="flex pt-64 justify-center">
      <img src={monarch} id="main_pic" alt="monarch" className="w-[90%] max-w-[1100px]" />
      <h1 className="font-RobotoCondensed">
        Hello
      </h1>
    </div>
  );
}
