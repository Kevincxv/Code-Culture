import Link from "next/link";
import images from "../../../../../public/images";

export default function Left() {
  return (
    <>
      <div className="flex gap-4 pl-4 items-center">
        <Link className="flex w-12" href="/dashboard">
          <img src={images.logo} draggable="false" />
        </Link>
        <form action="/search">
          <img
            src={images.search}
            draggable="false"
            className="absolute top-[26px] left-[104px] w-5"
          />
          <input
            type="text"
            placeholder="Search Code Culture"
            className="rounded-full bg-[#718090] text-[#BDBDBD] font-medium focus:outline-none focus:text-white caret-white py-2 px-8"
          />
        </form>
      </div>
    </>
  );
}
