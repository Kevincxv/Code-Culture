import Link from "next/link";

export default function signup() {
  return (
    <>
      <Link href="/">
          <div className="flex items-center h-screen ml-40">
            <p className=" text-7xl text-[#01DF67] text-center ">Code Culture</p>
            <p className=" text-white">Connect with programmers around the world</p>
          </div>
      </Link>
    </>
  );
}
