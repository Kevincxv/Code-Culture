import Link from "next/link";
import Image from "next/image";
import images from "../../../../public/images";

export default function Right({ selectedIcon, onSelectIcon }: any) {
    const right = [
        { label: "Messages", href: "/messages", icon: images.messages, iconGreen: images.messagesGreen },
        { label: "Notifications", href: "/notification", icon: images.notification, iconGreen: images.notificationGreen },
        { label: "Settings", href: "/settings", icon: images.settings, iconGreen: images.settingsGreen },
    ]

    return (
        <ul className="flex items-center gap-2">
            {right.map((link) => (
                <li className="flex items-center" key={link.href}>
                    <div
                        onClick={() => onSelectIcon(link.icon)}
                        className={`flex rounded-full w-9 h-9 items-center justify-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover ${selectedIcon === link.icon ? "bg-[rgba(1,223,103,0.20)]" : "bg-[#4B5661]"}`}>
                        <Link
                        href={link.href}
                        >
                            <Image
                                src={selectedIcon === link.icon ? link.iconGreen : link.icon}
                                alt={`${link.label}Page`}
                                className="w-6"
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