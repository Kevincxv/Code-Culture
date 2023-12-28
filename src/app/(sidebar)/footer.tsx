import Link from "next/link";
import classNames from "classnames";

export default function footer({ currentPath }: any) {
  const top = [
    { label: "About", href: "/about" },
    { label: "Help Center", href: "/help-center" },
    { label: "Content Policy", href: "/content-policy" },
  ];

  const middle = [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "More", href: "/more" },
  ];

  const bottom = [
    { label: "Code Culture, Inc 2023. All rights reserved", href: "/rights" },
  ];

  return (
    <footer className="fixed bottom-2 left-3 flex flex-col gap-1 font-semibold text-xs">
      <div className="flex space-x-2">
        {top.map((link) => (
          <Link key={link.href} href={link.href}>
            <p className={`hover:underline hover:text-[#646464] ${classNames({
              "text-[#646464]": currentPath === link.href,
              "text-[#B7B7B7]": currentPath !== link.href,
            })}`}>
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex space-x-2">
        {middle.map((link) => (
          <Link key={link.href} href={link.href}>
            <p className={`hover:underline hover:text-[#646464] ${classNames({
              "text-[#646464]": currentPath === link.href,
              "text-[#B7B7B7]": currentPath !== link.href,
            })}`}>
              {link.label}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex border-t border-[#2C2C2C]">
        {bottom.map((link) => (
          <Link key={link.href} href={link.href}>
            <p className={`hover:underline hover:text-[#646464] ${classNames({
              "text-[#646464]": currentPath === link.href,
              "text-[#B7B7B7]": currentPath !== link.href,
            })}`}>
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    </footer>
  );
}
