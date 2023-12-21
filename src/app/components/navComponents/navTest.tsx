import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import images from "../../../../public/images";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function NavTest() {
  return (
    <nav className="flex border-b border-[#333B43] h-16 items-center justify-between px-4">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1 justify-center hidden lg:flex">
        <Center />
      </div>
      <div className="flex-1 flex justify-end">
        <Right />
      </div>
    </nav>
  );
}
