import Link from "next/link";
import images from "../../../../../public/images";
import classNames from "classnames";

export default function Center({ currentPath }: any) {
  const center = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: images.dashboard,
      iconGreen: images.dashboardGreen,
    },
    {
      label: "Media",
      href: "/media",
      icon: images.media,
      iconGreen: images.mediaGreen,
    },
    {
      label: "Code",
      href: "/code",
      icon: images.code,
      iconGreen: images.codeGreen,
    },
    {
      label: "Group",
      href: "/group",
      icon: images.group,
      iconGreen: images.groupGreen,
    },
  ];

  return (
    <>
      <ul className="flex">
        {center.map((link) => (
          <li key={link.href}>
            <div
              className={classNames({
                "border-b-2 border-[#01DF67]": currentPath === link.href,
                "border-b-2 border-transparent": currentPath !== link.href,
              })}
            >
              <Link href={link.href}>
                <img
                  src={classNames({
                    [link.iconGreen]: currentPath === link.href,
                    [link.icon]: currentPath !== link.href,
                  })}
                  alt={`${link.label} Page`}
                  className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded select-none"
                  draggable="false"
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
