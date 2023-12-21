import Link from "next/link";
import Image from "next/image";
import images from "../../../../public/images";
import classNames from "classnames";

export default function Center({ currentPath }: any) {
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
                        className={classNames({
                            "border-b-2 border-[#01DF67]": currentPath === link.href,
                            "border-b-2 border-transparent": currentPath !== link.href
                        })}
                    >
                        <Link href={link.href}>
                            <Image
                                src={classNames({
                                    [link.iconGreen]: currentPath === link.href,
                                    [link.icon]: currentPath !== link.href
                                })}
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