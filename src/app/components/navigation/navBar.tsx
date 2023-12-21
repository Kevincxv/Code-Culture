"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Left from "./left";
import Center from "./center";
import Right from "./right";

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <>
      <nav className="flex border-b-2 border-[#333B43] h-16 items-center mt-2 pb-1.5">
        <Left />
        <Center currentPath={currentPath} />
        <Right currentPath={currentPath} />
      </nav>
    </>
  );
}
