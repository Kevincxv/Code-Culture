import images from "../../../../public/images";
import Link from "next/link";

export default function sidePanel() {
  return (
    <>
      <div className="flex-col mt-2 font-bold">
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16">
          <Link href="profile">
            <span className="flex items-center">
              <img src={images.profile} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Username</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16">
          <Link href="friends">
            <span className="flex items-center">
              <img src={images.friends} alt="" className="ml-3 w-8"/>
              <p className="ml-3 text-white">Friends</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16">
          <Link href="groups">
            <span className="flex items-center">
              <img src={images.groupColor} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Groups</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16">
          <Link href="post">
            <span className="flex items-center">
              <img src={images.addButton} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Post</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-6 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16 ">
          <Link href="questions">
            <span className="flex items-center">
              <img src={images.question} alt="" className="ml-2 w-9" />
              <p className="ml-2 text-white">Questions</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16 ">
          <Link href="media">
            <span className="flex items-center">
              <img src={images.play} alt="" className="ml-2 w-11" />
              <p className="ml-1 text-white">Media</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16 ">
          <Link href="events">
            <span className="flex items-center">
              <img src={images.schedule} alt="" className="ml-3 w-9" />
              <p className="ml-2 text-white">Events</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16 ">
          <Link href="bookmark">
            <span className="flex items-center">
              <img src={images.bookmark} alt="" className="ml-3 w-8" />
              <p className="ml-3 text-white">Bookmarks</p>
            </span>
          </Link>
        </div>
        <div className="flex ml-5 items-center transition duration-100 ease-in-out hover:bg-custom-hover hover:shadow-custom-hover rounded w-80 h-16 ">
          <Link href="premium">
            <span className="flex items-center">
              <img src={images.logo} alt="" className="ml-1 w-12" />
              <p className="ml-1 text-white">Premium</p>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
