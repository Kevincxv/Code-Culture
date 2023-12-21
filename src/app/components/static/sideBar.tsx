'use client';
import Link from "next/link";
import images from "../../../../public/images";
import { useState } from "react";

export default function sideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sideBar = [
    { label: "Profile", href: "/profile", icon: images.profile },
    { label: "Friends", href: "/friends", icon: images.friends },
    { label: "Group", href: "/group", icon: images.groupColor },
    { label: "Post", href: "/post", icon: images.post },
    { label: "Questions", href: "/questions", icon: images.question },
    { label: "Media", href: "/media", icon: images.play },
    { label: "Events", href: "/events", icon: images.events },
    { label: "Bookmarks", href: "/bookmarks", icon: images.bookmark },
    { label: "Premium", href: "/premium", icon: images.logo },
  ]

  return (
    <div className="relative">
      <aside className={`fixed mt-1 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <ul>
          {sideBar.map((link) =>
            <li key={link.href} className="mb-1">
              <Link href={link.href} className={`flex items-center ml-6 gap-3 transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-[60px] md:w-80 h-16`}>
                <img src={link.icon} alt={`${link.label} Page`} className="ml-3 w-9" />
                <p className=" text-white font-bold hidden sm:block transition-opacity duration-300 opacity-0 md:opacity-100">{link.label}</p>
              </Link>
            </li>
          )}
        </ul>
      </aside>
      <button onClick={toggleSidebar} className={`absolute opacity-0 md:opacity-100 ${isSidebarOpen ? 'top-[270px] left-[360px]' : 'top-[270px] left-[20px]' } bg-white rounded-full p-2 transition-width duration-300 ease-in-out`}>
      </button>
    </div>
  )
}