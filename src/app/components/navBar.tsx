import images from "../../../public/images";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-row border-b border-gray-500 mt-1">
        <div className="flex gap-5 items-center justify-start w-full ml-5 ">
          <div>
            <img src={images.logo} alt="Code Culture Logo" className="w-12" />
          </div>
          <div>
            <img src={images.search} alt="Search Icon" className="w-4" />
          </div>
          <input
            type="text"
            placeholder="Search Code Culture"
            className="bg-gray-500 text-gray-500 rounded py-1 px-3 focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div className="flex gap-1 justify-center w-full">
          <div>
            <img
              src={images.homepage}
              alt="Home Page"
              className="transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-16 p-4 rounded"
            />
          </div>
          <div>
            <img
              src={images.media}
              alt="Media Page"
              className="transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-16 p-4 rounded "
            />
          </div>
          <div>
            <img
              src={images.code}
              alt="Code Page"
              className="transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-16 p-4 rounded "
            />
          </div>
          <div>
            <img
              src={images.group}
              alt="Group Page"
              className="transition duration-300 ease-in-out hover:bg-gray-500 hover:bg-opacity-20 w-16 p-4 rounded "
            />
          </div>
        </div>
        <div className="flex gap-5 justify-end w-full mr-5 ">
          <div className="flex rounded-full bg-gray-500">
            <img src={images.chat} alt="Messages" className=" w-7 " />
          </div>
          <div className="flex rounded-full bg-gray-500 p-4">
            <img src={images.bell} alt="Notification Bell" className="w-6" />
          </div>
          <div className="flex rounded-full bg-gray-500 p-4">
            <img src={images.settings} alt="settings" className=" w-6" />
          </div>
          <div className="flex">
            <img src={images.profile} alt="Profile Picture" className="w-6 " />
          </div>
        </div>
      </div>
    </>
  );
}
