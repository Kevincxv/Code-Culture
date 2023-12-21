'use client';
import { useState } from "react";
import { usePathname } from "next/navigation";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function NavTest() {
  const currentPath = usePathname();

  // React logic to keep track of which button is currently selected by the user
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  // function to transition the selected button within the navbar
  const handleSelectIcon = (iconName: string) => {
    setSelectedIcon(selectedIcon === iconName ? null : iconName);
  };

  return (
    <nav className="flex border-b border-[#333B43] h-16 items-center justify-between px-4">
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
