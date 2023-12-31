import Link from "next/link";

export default function footer() {
  return (
    <>
      <div className="absolute bottom-3 left-0 w-full">
        <div className="font-medium">
          <div className="flex justify-start ml-3 gap-2">
            <Link href="/">
              <p className="text-[#B7B7B7] text-xs hover:underline">About</p>
            </Link>
            <Link href="/">
              <p className=" text-[#B7B7B7] text-xs hover:underline">Help Center</p>
            </Link>
            <Link href="/">
              <p className=" text-[#B7B7B7] text-xs hover:underline">
                Content Policy
              </p>
            </Link>
          </div>
          <div className="flex ml-3 gap-2">
            <Link href="/">
              <p className=" text-[#B7B7B7] text-xs hover:underline">
                Code of Conduct
              </p>
            </Link>
            <Link href="/">
              <p className=" text-[#B7B7B7] text-xs hover:underline">
                Terms of Service
              </p>
            </Link>
            <Link href="/">
              <p className=" text-[#B7B7B7] text-xs hover:underline">More</p>
            </Link>
          </div>
          <div className="flex ml-3 border-t border-gray-700 w-64">
            <Link href="/">
              <p className=" w-72 text-[#B7B7B7] text-xs hover:underline">
                Code Culture, Inc &#x40; 2023. All rights reserved
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
