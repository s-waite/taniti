import Image from "next/image";
import Navigation from "./Navigation";

export default function Layout({ src, title, color, children }) {
    return (
        <div>
            <div className='w-full h-[500px] relative'>
                <Navigation color={color} className="absolute"></Navigation>
                <Image src={src} layout='fill' objectFit='cover' className='-z-20'></Image>
                <h1 className='left-8 absolute text-8xl top-28'>{title}</h1>
            </div>
        <div className="flex justify-center">
            <div className="w-2/3 ">
                {children}
            </div>
        </div>
        </div>
    )
}