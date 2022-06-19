import Image from "next/image";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MyDocument from "../pages/_document";

export default function Layout({ src, pageTitle, textColor, children }) {

    let textShadow = false;
    if (textColor === "white") {
        textShadow = true;
    }

    return (
        <div>
            <div className='w-full h-[500px] relative'>
                <Navigation textColor={textColor} className={`absolute`} textShadow={textShadow}></Navigation>
                <Image priority src={src} layout='fill' objectFit='cover' className='-z-20'></Image>
                <h1 className={`left-8 absolute text-9xl top-28 font-["Amatic_SC"] text-${textColor} text-shadow`}>{pageTitle}</h1>
                <svg className={`fill-${textColor} right-8 top-4 absolute` } style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
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