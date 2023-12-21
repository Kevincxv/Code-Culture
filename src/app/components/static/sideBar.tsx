'use client';
import Link from "next/link";
import images from "../../../../public/images";
import { useState, useEffect } from "react";

export default function sideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to handle sidebar state based on viewport width
  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      setIsSidebarOpen(true); // Expand the sidebar if the viewport width is less than 768px
    }
  };

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
      <aside className={`fixed mt-1 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul>
          {sideBar.map((link) =>
            <li key={link.href} className="mb-1">
              <Link href={link.href} className={`flex items-center ml-6 gap-3 transition-all duration-300 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-[60px] md:w-80 h-16`}>
                <img src={link.icon} alt={`${link.label} Page`} className="ml-3 w-9" />
                <p className={`text-white font-bold md:opacity-100 opacity-0 transition-all duration-300 ease-in-out`}>{link.label}</p>
              </Link>
            </li>
          )}
        </ul>
      </aside>
      <button onClick={toggleSidebar} className={`absolute ${isSidebarOpen ? 'top-[270px] left-[360px]' : 'top-[270px] left-[20px]'} bg-white rounded-full p-2 z-20 md:opacity-100 opacity-0 transition-all duration-300 ease-in-out`}>
        {/* SVG for the toggle button */}
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-gray-800">
          <path d={isSidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>
    </div>
  )
}