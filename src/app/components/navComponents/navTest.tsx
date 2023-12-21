'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function NavTest() {
  const currentPath = usePathname();

  return (
    <nav className="flex border-b border-[#333B43] h-16 items-center px-4 mt-2 pb-1.5">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1 justify-center hidden lg:flex">
        <Center currentPath={currentPath} />
      </div>
      <div className="flex-1 flex justify-end">
        <Right currentPath={currentPath} />
      </div>
    </nav>
  );
}
