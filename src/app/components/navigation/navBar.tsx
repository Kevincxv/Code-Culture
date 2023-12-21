"use client";
import { usePathname } from "next/navigation";
import Left from "./left";
import Center from "./center";
import Right from "./right";

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <>
      <nav className="flex border-b border-[#333B43] h-16 items-center px-4 mt-2 pb-1.5">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1 flex justify-center">
        <Center currentPath={currentPath} />
      </div>
      <div className="flex-1 flex justify-end">
        <Right currentPath={currentPath} />
      </div>
    </nav>
    </>
  );
}
