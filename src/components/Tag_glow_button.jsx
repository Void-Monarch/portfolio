export default function Tag_glow_button(prop) {
  return (
    <div className="mt-10 flex w-full justify-center">
      <div
        className={`relative flex w-[70%] justify-center border border-white py-3 hover:border-mainpinkog *:hover:text-mainpinkog ${prop.className}`}
        id="profiletag"
      >
        <span className="font-RobotoCondensed text-lg text-white">{ prop.text }</span>
      </div>
    </div>
  );
}
