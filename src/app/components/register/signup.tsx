import Link from "next/link";

export default function signup() {
  return (
    <>
      <div className="flex flex-col justify-center h-screen ml-44">
        <div className="flex">
          <p className="font-medium text-8xl text-[#01DF67] text-center ">
            Code Culture
          </p>
        </div>
        <div className="flex">
          <p className="font-semibold text-4xl text-white ml-16">
            Connect with programmers
          </p>
        </div>
        <div>
          <p className="font-semibold text-4xl text-white ml-32">
            around the world
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-end bg-[#333B43] rounded">
        <div className="flex flex-col ml-3 mt-3 mb-3">
          <label className="font-semibold text-white">Username</label>
          <input
            type="text"
            required
            className="w-32 h-7 rounded bg-[#718090] text-white font-medium"
          ></input>
        </div>
        <div className="flex flex-col ml-3 mt-3 mb-3">
          <label className="font-semibold text-white ">Email</label>
          <input
            type="email"
            required
            className="w-32 h-7 rounded bg-[#718090] text-white font-medium"
          />
        </div>
        <div className="flex flex-col ml-3 mt-3 mb-3">
          <label className="font-semibold text-white">Password</label>
          <input
            type="password"
            required
            className="w-32 h-7 rounded bg-[#718090] text-white font-normal"
          />
        </div>
      </div>
    </>
  );
}
