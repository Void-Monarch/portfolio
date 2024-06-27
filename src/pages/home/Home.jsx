import Top_element from "./Top_element";
import Center_element from "./Center_element";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Top_element />
      <Center_element />
    </div>
  );
}
