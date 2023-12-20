"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import images from "../../../../public/images";

export default function NavTest() {
  const currentPath = usePathname();

  const [selectedIcon, setselectedIcon] = useState<string | null>(null); // State to track if the icon is active

  const handleClick = (iconName: string) => {
    setselectedIcon(selectedIcon === iconName ? null : iconName); // Toggle the active state
  };

  const center = [
    { label: "Dashboard", href: "/", icon: images.dashboard, iconGreen: images.dashboardGreen },
    { label: "Media", href: "/media", icon: images.media, iconGreen: images.mediaGreen },
    { label: "Code", href: "/code", icon: images.code, iconGreen: images.codeGreen },
    { label: "Group", href: "/group", icon: images.group, iconGreen: images.groupGreen },
  ];

  const right = [
    { label: "Messages", href: "/messages", icon: images.messages, iconGreen: images.messagesGreen },
    { label: "Notifications", href: "/notification", icon: images.notification, iconGreen: images.notificationGreen },
    { label: "Settings", href: "/settings", icon: images.settings, iconGreen: images.settingsGreen },
  ]

  return (
    <>
      <nav className="flex space-x-5 border-b border-[#333B43] h-16 px-3 items-center">
        <Link className="flex w-14" href="/">
          <img src={images.logo} />
        </Link>
        <form action="/search">
          <img src={images.search} className="absolute top-5 left-24 w-5" />
          <input
            className="rounded-full bg-[#718090] text-[#BDBDBD] font-medium focus:outline-none focus:text-white caret-white py-2 px-8"
            type="text"
            placeholder="Search Code Culture"
          />
        </form>
        <ul className="flex">
          {center.map((link) => (
            <li key={link.href}>
              <div 
                onClick={() => handleClick(link.icon)}
                className={`${ selectedIcon === link.icon ? "border-b-2 border-[#01DF67]" : "" }`}>
                  <Link href={link.href}>
                    <img
                      src={ selectedIcon === link.icon ? link.iconGreen : link.icon } 
                      alt={`${link.label} Page`}
                      className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded">
                    </img>
                  </Link>
              </div>
            </li>
          ))}
          {right.map((link) => (
            <li className="flex items-center" key={link.href}>
              <div 
                onClick={() => handleClick(link.icon)}
                className={`flex rounded-full w-9 h-9 items-center justify-center ${ selectedIcon === link.icon ? "bg-[rgba(1,223,103,0.20)]" : "bg-[#4B5661]" }`}>
                  <Link href={link.href}>
                    <img
                      src={selectedIcon === link.icon ? link.iconGreen : link.icon}
                      alt={`${link.label}Page`}
                      className="w-6">
                    </img>
                  </Link>
              </div>
            </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
