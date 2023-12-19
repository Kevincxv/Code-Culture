"use client";
import Link from "next/link";
import { useState } from "react";
import images from "../../../../public/images";

export default function NavBar() {
  const [selectedIcon, setselectedIcon] = useState<string | null>(null); // State to track if the icon is active

  const handleClick = (iconName: string) => {
    setselectedIcon(selectedIcon === iconName ? null : iconName); // Toggle the active state
  };

  return (
    <>
      <div className="flex flex-row border-b border-custom p-1">
        <div className="flex gap-2 items-center justify-start w-full ml-6 ">
          <div className="">
            <Link href="/">
              <img src={images.logo} alt="Code Culture Logo" className="w-14" />
            </Link>
          </div>
          <div className=" relative">
            <input
              type="text"
              placeholder="Search Code Culture"
              className="bg-gray-500 text-gray-200 rounded-full py-2 px-8 focus:outline-none caret-white"
            />
            <div className="absolute top-2 left-0 mt-1 ml-2">
              <img src={images.search} alt="Search Icon" className="w-4" />
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center w-full">
          <div
            onClick={() => handleClick("home")}
            className={`${
              selectedIcon === "home" ? "border-b-2 border-[#01DF67]" : ""
            }`}
          >
            <Link href="/">
              <img
                src={
                  selectedIcon === "home"
                    ? images.homepageGreen
                    : images.homepage
                }
                alt="Home Page"
                className={`transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded`}
              />
            </Link>
          </div>
          <div
            onClick={() => handleClick("media")}
            className={`${
              selectedIcon === "media" ? "border-b-2 border-[#01DF67]" : ""
            }`}
          >
            <Link href="/">
              <img
                src={
                  selectedIcon === "media" ? images.mediaGreen : images.media
                }
                alt="Media Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded "
              />
            </Link>
          </div>
          <div
            onClick={() => handleClick("code")}
            className={`${
              selectedIcon === "code" ? "border-b-2 border-[#01DF67]" : ""
            }`}
          >
            <Link href="/">
              <img
                src={selectedIcon === "code" ? images.codeGreen : images.code}
                alt="Code Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded "
              />
            </Link>
          </div>
          <div
            onClick={() => handleClick("group")}
            className={`${
              selectedIcon === "group" ? "border-b-2 border-[#01DF67]" : ""
            }`}
          >
            <Link href="/">
              <img
                src={
                  selectedIcon === "group" ? images.groupGreen : images.group
                }
                alt="Group Page"
                className="transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover w-16 p-4 rounded "
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-3 justify-end w-full mr-5 mt-3">
          <div
            onClick={() => handleClick("messages")}
            className={`flex rounded-full w-9 h-9 items-center justify-center ${
              selectedIcon === "messages"
                ? "bg-[rgba(1,223,103,0.20)]"
                : "bg-gray-500"
            }`}
          >
            <Link href="/">
              <img
                src={
                  selectedIcon === "messages" ? images.chatGreen : images.chat
                }
                alt="Messages"
                className="w-5"
              />
            </Link>
          </div>
          <div
            onClick={() => handleClick("bell")}
            className={`flex rounded-full w-9 h-9 items-center justify-center ${
              selectedIcon === "bell"
                ? "bg-[rgba(1,223,103,0.20)]"
                : "bg-gray-500"
            }`}
          >
            <Link href="/">
              <img
                src={selectedIcon === "bell" ? images.bellGreen : images.bell}
                alt="Notification Bell"
                className="w-5"
              />
            </Link>
          </div>
          <div
            onClick={() => handleClick("settings")}
            className={`flex rounded-full w-9 h-9 items-center justify-center ${
              selectedIcon === "settings"
                ? "bg-[rgba(1,223,103,0.20)]"
                : "bg-gray-500"
            }`}
          >
            <Link href="/">
              <img src={selectedIcon === "settings" ? images.settingsGreen : images.settings} alt="settings" className="w-5" />
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
