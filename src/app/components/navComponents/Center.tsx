import Link from "next/link";
import Image from "next/image";
import images from "../../../../public/images";

export default function Center({ selectedIcon, onSelectIcon }: any) {
    // Stored the configurations for each of the buttons within an array
    const center = [
        { label: "Dashboard", href: "/home", icon: images.dashboard, iconGreen: images.dashboardGreen },
        { label: "Media", href: "/media", icon: images.media, iconGreen: images.mediaGreen },
        { label: "Code", href: "/code", icon: images.code, iconGreen: images.codeGreen },
        { label: "Group", href: "/group", icon: images.group, iconGreen: images.groupGreen },
    ];

    return (
        // Dynamically iterating and rendering the buttons for the settings where we are tying the configurations to each of the keys in the array.
        <ul className="flex items-center">
            {center.map((link) => (
                <li key={link.href}>
                    <div
                        onClick={() => onSelectIcon(link.icon)}
                        className={`${selectedIcon === link.icon ? "border-b-2 border-[#01DF67]" : "border-b-2 border-transparent"}`}
                    >
                        <Link href={link.href}>
                            <Image
                                src={selectedIcon === link.icon ? link.iconGreen : link.icon}
                                alt={`${link.label} Page`}
                                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded select-none"
                                width={100} height={100}
                                draggable={false}
                            />
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
    );
}