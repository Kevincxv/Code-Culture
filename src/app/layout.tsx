import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/static/navigation/navBar";
import SideBar from "./components/static/sideBar";

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
        {children}
      </body>
    </html>
  );
}
