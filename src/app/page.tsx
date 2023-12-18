import Image from "next/image";
import NavBar from "./components/navBar";
import SidePanel from "./components/sidePanel";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SidePanel />
    </div>
  );
}
