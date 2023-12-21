import Link from "next/link";
import Image from "next/image";
import images from "../../../../public/images";

export default function Left() {
    return (
        <div className="flex gap-2 pl-5 items-center">
            <Link className="flex w-14" href="/">
                <Image src={images.logo} alt={""} width={100} height={100} className="pointer-events-none" />
            </Link>
            <form action="/search" className="relative">
                <Image src={images.search} className="absolute top-2.5 left-3 w-5" alt={""} width={20} height={20} />
                <input
                    className="rounded-full bg-[#718090] text-[#BDBDBD] font-medium focus:outline-none focus:text-white caret-white py-2 px-12"
                    type="text"
                    placeholder="Search Code Culture"
                />
            </form>
        </div>
    );
}