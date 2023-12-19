import Link from "next/link";
import NavBar from "./components/static-page/navBar";
import SidePanel from "./components/static-page/sidePanel";
import Footer from "./components/static-page/footer";
import SignUp from "./components/register/signup";

export default function Home() {
  return (
    <>
      <div>
        {/* <NavBar />
        <SidePanel />
        <Footer /> */}
        <SignUp />
      </div>
    </>
  );
}
