import Link from "next/link";

export default function footer() {
  const footer = [
    { label: "About", href: "/about" },
    { label: "Help Center", href: "/help-center" },
    { label: "Content Policy", href: "/content-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Code of Conduct", href: "/code-of-conduct" },
    { label: "More", href: "/more" },
  ];

  return (
    <>
      <footer className="flex text-[#B7B7B7] font-semibold justify-center gap-4 mt-12">
        {footer.map((link) => (
          <Link
            key={link.label}
            href={link.label}
            className="hover:underline hover:text-[#646464] p-2"
          >
            {link.label}
          </Link>
        ))}
      </footer>
    </>
  );
}
