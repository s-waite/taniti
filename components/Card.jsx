import Image from "next/image"
import Link from "next/link";

export default function Card({ src, alt, children, title }) {
    return (
        <Link href="" className="">
            <div className="w-72 bg-slate-300 group drop-shadow-md hover:drop-shadow-2xl duration-300 hover:cursor-pointer overflow-hidden">
                <div className="overflow-hidden">
                <div className="relative w-full h-72 group-hover:scale-110 duration-300">
                    <Image src={src} alt={alt} layout="fill" objectFit="cover" className=""></Image>
                </div>
                </div>
                <div className="group flex flex-col gap-3 p-6">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="font-['Josefin_Sans'] font-bold">{children}</p>
                    <button className="w-1/2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Website</button>
                </div>
            </div>

        </Link>
    )
}