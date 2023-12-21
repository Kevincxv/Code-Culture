import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/static/navigation/navBar";
import SideBar from "./components/static/sideBar";
import Footer from "./components/static/footer";

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
        <NavBar />
        <SideBar />
        <Footer />
        {children}
      </body>
    </html>
  );
}
