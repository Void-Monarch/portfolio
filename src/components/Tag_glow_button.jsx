export default function Tag_glow_button({ text }) {
  return (
    <div className="mt-10 flex w-full justify-center">
      <div
        className="relative flex w-[70%] justify-center border border-white py-3 hover:border-mainpinkog *:hover:text-mainpinkog"
        id="profiletag"
      >
        <span className="font-RobotoCondensed text-lg text-white">{text}</span>
      </div>
    </div>
  );
}
