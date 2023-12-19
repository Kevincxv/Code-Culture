import images from "../../../public/images";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row border-b border-gray-500 p-1">
        <div className="flex gap-2 items-center justify-start w-full ml-6 ">
          <div className="">
            <Link href="/">
              <img src={images.logo} alt="Code Culture Logo" className="w-14" />
            </Link>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Code Culture"
              className="bg-gray-500 text-gray-200 rounded-full py-1 px-8 focus:outline-none caret-white"
            />
            <div className="absolute top-1 left-0 mt-1 ml-2">
              <img src={images.search} alt="Search Icon" className="w-4" />
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center w-full">
          <div>
            <Link href="/home-page">
              <img
                src={images.homepage}
                alt="Home Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded"
              />
            </Link>
          </div>
          <div>
            <Link href="/media-page">
              <img
                src={images.media}
                alt="Media Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded "
              />
            </Link>
          </div>
          <div>
            <Link href="/code-page">
              <img
                src={images.code}
                alt="Code Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded "
              />
            </Link>
          </div>
          <div>
            <Link href="/group-page">
              <img
                src={images.group}
                alt="Group Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded "
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-5 justify-end w-full mr-5 mt-3">
          <div className="flex rounded-full bg-gray-500 w-9 h-9 items-center justify-center">
            <Link href="/messages">
              <img src={images.chat} alt="Messages" className="w-5" />
            </Link>
          </div>
          <div className="flex rounded-full bg-gray-500 w-9 h-9 items-center justify-center">
            <Link href="/notifications">
              <img src={images.bell} alt="Notification Bell" className="w-5" />
            </Link>
          </div>
          <div className="flex rounded-full bg-gray-500 w-9 h-9 items-center justify-center">
            <Link href="settings">
              <img src={images.settings} alt="settings" className="w-5" />
            </Link>
          </div>
          <div className="flex justify-center">
            <Link href="profile">
              <img
                src={images.profile}
                alt="Profile Picture"
                className="w-9 "
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
