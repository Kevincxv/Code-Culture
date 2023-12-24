import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/static/navigation/navBar";
import SideBar from "./components/static/sideBar";
import Footer from "./components/static/footer";
import Login from "./components/register/login";

export const metadata: Metadata = {
  title: "Code Culture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Login  />
        {/* <NavBar />
        <SideBar />
        <Footer /> */}
        {children}
      </body>
    </html>
  );
}
