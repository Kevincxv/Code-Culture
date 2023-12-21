import Link from "next/link";
import images from "../../../../public/images";
import classNames from "classnames";

export default function Right({ currentPath }: any) {
  const right = [
    {
      label: "Messages",
      href: "/messages",
      icon: images.messages,
      iconGreen: images.messagesGreen,
    },
    {
      label: "Notifications",
      href: "/notification",
      icon: images.notification,
      iconGreen: images.notificationGreen,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: images.settings,
      iconGreen: images.settingsGreen,
    },
  ];

  return (
    // Dynamically iterating and rendering the buttons for the settings where we are tying the configurations to each of the keys in the array.
    <ul className="flex gap-2">
      {right.map((link) => (
        <li key={link.href}>
          <div
            className={`flex rounded-full w-9 h-9 items-center justify-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover 
                        ${classNames({
                          "bg-[rgba(1,223,103,0.20)]":
                            currentPath === link.href,
                          "bg-[#4B5661]": currentPath !== link.href,
                        })}
                        `}
          >
            <Link href={link.href}>
              <img
                src={classNames({
                  [link.iconGreen]: currentPath === link.href,
                  [link.icon]: currentPath !== link.href,
                })}
                alt={`${link.label} Page`}
                className="w-6"
                draggable="false"
              />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
