import { memo } from "react";

export default memo(function StarBg() {
  return (
    <div className="z-[-10]">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
});
