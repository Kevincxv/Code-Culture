'use client';
import Link from "next/link";
import Image from "next/image";
import images from "../../../../public/images";
import { useState } from "react";

export default function Center() {
    const [selectedIcon, setselectedIcon] = useState<string | null>(null); // State to track if the icon is active

    const handleClick = (iconName: string) => {
        setselectedIcon(selectedIcon === iconName ? null : iconName); // Toggle the active state
    };

    const center = [
        { label: "Dashboard", href: "/home", icon: images.dashboard, iconGreen: images.dashboardGreen },
        { label: "Media", href: "/media", icon: images.media, iconGreen: images.mediaGreen },
        { label: "Code", href: "/code", icon: images.code, iconGreen: images.codeGreen },
        { label: "Group", href: "/group", icon: images.group, iconGreen: images.groupGreen },
    ];

    return (
        <ul className="flex">
            {center.map((link) => (
                <li key={link.href}>
                    <div
                        onClick={() => handleClick(link.icon)}
                        className={`${selectedIcon === link.icon ? "border-b-2 border-[#01DF67]" : "border-b-2 border-transparent"}`}
                    >
                        <Link href={link.href}>
                            <Image
                                src={selectedIcon === link.icon ? link.iconGreen : link.icon}
                                alt={`${link.label} Page`}
                                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded pointer-events-none"
                                width={100} height={100}
                            />
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}