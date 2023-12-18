import images from "../../../public/images";

export default function sidePanel() {
  return (
    <>
      <div className="flex-col mt-5">
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.profile} alt="" className="ml-3 w-9" />
          <p className="ml-2 text-white">Username</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.groupColor} alt="" className="ml-3 w-9" />
          <p className="ml-2 text-white">Groups</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.addButton} alt="" className="ml-3 w-9" />
          <p className="ml-2 text-white">Post</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.question} alt="" className="ml-2 w-9" />
          <p className="ml-2 text-white">Questions</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.play} alt="" className="ml-2 w-11" />
          <p className="ml-2 text-white">Media</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.schedule} alt="" className="ml-3 w-9" />
          <p className="ml-2 text-white">Events</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.bookmark} alt="" className="ml-3 w-8" />
          <p className="ml-2 text-white">Bookmarks</p>
        </div>
        <div className="flex ml-5 items-center transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 h-16 rounded">
          <img src={images.logo} alt="" className="ml-1 w-12" />
          <p className="ml-2 text-white">Premium</p>
        </div>
      </div>
    </>
  );
}
