'use client';
import { useState } from "react";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function NavTest() {
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  const handleSelectIcon = (iconName: string) => {
    setSelectedIcon(selectedIcon === iconName ? null : iconName);
  };

  return (
    <nav className="flex border-b border-[#333B43] h-16 items-center justify-between px-4">
      <div className="flex-1">
        <Left />
      </div>
      <div className="flex-1 justify-center hidden lg:flex">
        <Center selectedIcon={selectedIcon} onSelectIcon={handleSelectIcon} />
      </div>
      <div className="flex-1 flex justify-end">
        <Right selectedIcon={selectedIcon} onSelectIcon={handleSelectIcon} />
      </div>
    </nav>
  );
}
