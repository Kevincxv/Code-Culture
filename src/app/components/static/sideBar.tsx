import Link from "next/link";
import images from "../../../../public/images";

export default function sideBar() {
   
  const sideBar = [
    { label: "Profile", href: "/profile", icon: images.profile },
    { label: "Friends", href: "/friends", icon: images.friends },
    { label: "Groups", href:"/group", icon: images.groupColor },
    { label: "Post", href: "/post", icon: images.post },
    { label: "Questions", href:"/questions", icon: images.question },
    { label: "Media", href:"/media", icon: images.play },
    { label: "Events", href:"/events" , icon: images.events },
    { label: "Bookmarks", href: "/bookmarks", icon: images.bookmark },
    { label: "Premium", href:"/premium", icon: images.logo },
  ]
  
  return (
        <>
        <aside className="fixed mt-1">
          <ul>
            {sideBar.map((link) =>
            <li key={link.href} className="mb-1">
                <Link href={link.href} className="flex items-center ml-6 gap-3 transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-16 h-16 sm:w-80">
                  <img src={link.icon} alt={`${link.label} Page`} className="ml-3 w-9" />
                  <p className=" text-white font-bold hidden sm:block transition-opacity duration-300 opacity-0 md:opacity-100">{link.label}</p>
                </Link>
            </li>
            )}
          </ul>
        </aside>
        </>
    )
}