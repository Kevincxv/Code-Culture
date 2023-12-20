import Link from "next/link";
import NavBar from "./components/static/navBar";
import SidePanel from "./components/static/sidePanel";
import Footer from "./components/static/footer";
import SignUp from "./components/register/signup";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <SidePanel />
        <Footer />
        {/* <SignUp /> */}
      </div>
    </>
  );
}
