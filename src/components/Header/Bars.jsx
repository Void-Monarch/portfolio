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
  return(
    <div className="headerbarsContainer relative h-6 w-[38px]">
      <span className="headerBar rotate-[45deg] translate-y-[10px]"></span>
      <span className="headerBar rotate-[-45deg] translate-y-[10px]"></span>
    </div>
  )
}