import Image from "next/image";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MyDocument from "../pages/_document";

export default function Layout({ src, pageTitle , textColor, children }) {

    let textShadow = false;
    if (textColor === "white") {
        textShadow = true;
    }

    return (
        <div>
            <div className='w-full h-[500px] relative'>
                <Navigation textColor={textColor} className={`absolute`} textShadow={textShadow}></Navigation>
                <Image priority src={src} layout='fill' objectFit='cover' className='-z-20'></Image>
                <h1 className={ `left-8 absolute text-9xl top-28 font-["Amatic_SC"] text-${textColor} text-shadow` }>{pageTitle}</h1>
            </div>
        <div className="flex justify-center">
            <div className="w-4/5 flex flex-col items-center">
                {children}
            </div>
        </div>
        <Footer></Footer>
        </div>
    )
}