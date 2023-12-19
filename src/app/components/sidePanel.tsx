import images from "../../../public/images";
import Link from "next/link";

export default function sidePanel() {
  return (
    <>
      <div className="flex-col mt-5">
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="profile">
            <span className="flex items-center">
              <img src={images.profile} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Username</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="groups">
            <span className="flex items-center">
              <img src={images.groupColor} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Groups</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="post">
            <span className="flex items-center">
              <img src={images.addButton} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Post</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="questions">
            <span className="flex items-center">
              <img src={images.question} alt="" className="ml-2 w-9" />
              <p className="ml-2 text-white">Questions</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="media">
            <span className="flex items-center">
              <img src={images.play} alt="" className="ml-2 w-11" />
              <p className="ml-2 text-white">Media</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="events">
            <span className="flex items-center">
              <img src={images.schedule} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Events</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
          <Link href="bookmark">
            <span className="flex items-center">
              <img src={images.bookmark} alt="" className="ml-3 w-8" />
              <p className="ml-2 text-white">Bookmarks</p>
            </span>
          </Link>
        </div>
          <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-80 h-16 rounded">
        <Link href="premium">
            <span className="flex items-center">
                <img src={images.logo} alt="" className="ml-1 w-12" />
                <p className="ml-2 text-white">Premium</p>
            </span>
        </Link>
          </div>
      </div>
    </>
  );
}
