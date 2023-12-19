import Link from "next/link";

export default function footer() {
  return (
    <>
      <div className="mt-36 ml-3 flex flex-row justify-start gap-2">
        <Link href="about">
          <p className=" text-gray-400 text-xs hover:underline">About</p>
        </Link>
        <Link href="help-ceneter">
          <p className=" text-gray-400 text-xs hover:underline">Help Center</p>
        </Link>
        <Link href="content-policy">
          <p className=" text-gray-400 text-xs hover:underline">
            Content Policy
          </p>
        </Link>
      </div>
      <div className="flex ml-3 gap-2">
        <Link href="code-of-conduct">
          <p className=" text-gray-400 text-xs hover:underline">
            Code of Conduct
          </p>
        </Link>
        <Link href="terms-of-service">
          <p className=" text-gray-400 text-xs hover:underline">
            Terms of Service
          </p>
        </Link>
        <Link href="more">
          <p className=" text-gray-400 text-xs hover:underline">More</p>
        </Link>
      </div>
      <div className="flex ml-3 border-t border-gray-700 w-64">
        <Link href="code-culture-inc">
          <p className=" w-72 text-gray-400 text-xs hover:underline">
            Code Culture, Inc &#x40; 2023. All rights reserved
          </p>
        </Link>
      </div>
    </>
  );
}
