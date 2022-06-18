import Image from "next/image";

function testFunc() {
    return (
        <h1>Test</h1>
    )
}

export default function PictureAndText({ side, children, src, alt, title }) {
    const img =
        <div className="w-1/2">
            <div className="w-full h-96">
                <div className="relative w-full h-full drop-shadow-md">
                    <Image src={src} alt={alt} layout="fill" objectFit="cover" className="drop-shadow-2xl"></Image>
                </div>
            </div>
        </div>

    const text =
        <div className="text-xl font-['Josefin_Sans'] leading-relaxed font-thin">
            {children}
        </div>

    const myTitle = <h1 className='text-5xl font-["Amatic_SC"] text-shadow-md'>{title}</h1>

    if (side === "left") {
        return (

            <div className="flex justify-between w-full h-full gap-16 pt-16">
                {img}
                <div className="flex flex-col gap-5 w-1/2">
                    {myTitle}
                    {text}
                </div>
            </div>
        )
    } else if (side == "right") {
        return (
            <div className="flex justify-between w-full h-full gap-16 pt-16">
                <div className="flex flex-col gap-5 w-1/2">
                    {myTitle}
                    {text}
                </div>
                {img}
            </div>)
    } else {
        throw new Error("Side must be left of right");
    }
}