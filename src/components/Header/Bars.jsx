export default function Bars() {
  return (
    <div className="headerbarsContainer relative h-6 w-[38px]">
      <span className="headerBar"></span>
      <span className="headerBar translate-y-[10px]"></span>
      <span className="headerBar translate-y-[20px]"></span>
    </div>
  );
}

export function Cross() {
  return (
    <div className="headerbarsContainer relative h-6 w-[38px]">
      <span className="headerBar translate-y-[10px] rotate-[45deg]"></span>
      <span className="headerBar translate-y-[10px] rotate-[-45deg]"></span>
    </div>
  );
}
