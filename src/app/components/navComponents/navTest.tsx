"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import images from "../../../../public/images";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function NavTest() {
  const currentPath = usePathname();


  return (
    <nav className="flex border-b border-[#333B43] h-16 items-center justify-between">
      <div className="flex">
        <Left />
      </div>
      <div className="flex">
        <Center />
      </div>
      <div className="flex">
        <Right />
      </div>
    </nav>
  );
}
