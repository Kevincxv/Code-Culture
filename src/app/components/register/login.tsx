import Link from "next/link";
import images from "../../../../public/images";
import Footer from "./footer";

export default function login() {
  const auth = [
    { label: "Google", href: "/", icon: images.google },
    { label: "Github", href: "/", icon: images.github },
    { label: "LinkedIn", href: "/", icon: images.linkedin },
  ];

  return (
    <>
      <div className="absolute top-64 left-52 font-bold text-white text-3xl">
        <p className="text-8xl text-[#01DF67]">Code Culture</p>
        <p className="ml-24">Connect with programmers</p>
        <p className="ml-44">around the world</p>
      </div>
      <form className="flex flex-col items-end font-bold text-white mr-60 mb-2 mt-28">
        <div className="flex flex-col bg-[#333B43] items-center p-4 rounded-lg">
          <div className="flex flex-col gap-1">
            <label className="text-lg">Username or Email</label>
            <input
              type="email"
              placeholder="Email or Username"
              className="font-medium rounded-lg p-2 bg-[#718090] w-72 mb-6 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out 300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-20">
              <label className="text-lg">Password</label>
              <Link
                href="/"
                className="text-xs text-[#007BFF] hover:text-[#439af6] hover:underline mt-1"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="font-medium rounded-lg p-2 bg-[#718090] w-72 mb-3 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out 300"
            />
          </div>
          <div className="flex gap-2 mb-6 mr-32">
            <input type="checkbox" className="w-4 " />
            <label className="text-xl">Remeber me</label>
          </div>
          <Link href="/" className="border-b border-[#1d1d1d] pb-2">
            <button className="bg-[#007BFF] hover:bg-[#1b78db] rounded-lg p-1 w-64 h-10 text-xl">
              Login
            </button>
          </Link>
          <Link href="/">
            <button className="bg-[#00C75B] hover:bg-[#1fb362] rounded-lg p-1 mt-2 h-10 w-60 text-lg">
              Create New Account
            </button>
          </Link>
        </div>
      </form>

      <div className="flex flex-col items-end mr-60 font-bold text-white text-xl">
        <ul>
          {auth.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex flex-row font-semibold bg-[#333B43] gap-3 items-center justify-center rounded-lg mb-2 w-80 h-12 p-1 hover:bg-[#718090] transition ease-in-out 300"
              >
                <img
                  src={link.icon}
                  alt={`${link.label} Logo`}
                  className="w-7"
                />
                <p>{`Login with ${link.label}`}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
