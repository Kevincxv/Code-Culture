import images from "../../../public/images";

export default function sidePanel() {
  return (
    <>
      <div className="flex-col ml-6 mt-5">
        <div className="flex items-center mb-5 transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-52 rounded">
          <img src={images.profile} alt="" className="w-9" />
          <p className="ml-2 text-white">Username</p>
        </div>
        <div className="flex items-center mb-5">
          <img src={images.groupColor} alt="" className="w-9" />
          <p className="ml-2 text-white">Groups</p>
        </div>
        <div className="flex items-center mb-5">
          <img src={images.addButton} alt="" className="w-9" />
          <p className="ml-2 text-white">Post</p>
        </div>
        <div className="flex items-center mb-5">
          <img src={images.question} alt="" className="w-9" />
          <p className="ml-2 text-white">Questions</p>
        </div>
        <div className="flex items-center mb-5">
          <img src={images.play} alt="" className="w-11" />
          <p className="ml-2 text-white">Media</p>
        </div>
        <div className="flex items-center mb-5">
          <img src={images.schedule} alt="" className="w-9" />
          <p className="ml-2 text-white">Events</p>
        </div>
        <div className="flex items-center mb-5">
          <img src={images.bookmark} alt="" className="w-9" />
          <p className="ml-2 text-white">Bookmarks</p>
        </div>
        <div className="flex items-center">
          <img src={images.logo} alt="" className="w-12" />
          <p className="ml-2 text-white">Premium</p>
        </div>
      </div>
    </>
  );
}
