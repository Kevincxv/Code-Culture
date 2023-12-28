import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./(navbar)/navigation/navBar";
import SideBar from "./(sidebar)/sideBar";
import Footer from "./(sidebar)/footer";
import Login from "./(register)/routes/login";

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
        <Login />
        {/* <NavBar />
        <SideBar />
        <Footer /> */}
        {children}
      </body>
    </html>
  );
}
