import Image from "next/image";
import Layout from "../components/Layout";

export default function Transportation() {
    const text =
        <div className="text-xl font-['Josefin_Sans'] leading-relaxed font-thin">
        </div>

    const myTitle = <h1 className='text-5xl font-["Amatic_SC"] text-shadow-md'></h1>
    return (
        <Layout src="/hero/plane.jpg" pageTitle="Transportation" textColor="black">

            <div className="grid grid-cols-2 gap-6 pt-12">
                <div className="flex flex-col gap-5">
                    <h1 className='text-5xl font-["Amatic_SC"] text-shadow-md'>Getting To Taniti</h1>
                    <div className="text-xl font-['Josefin_Sans'] leading-relaxed font-thin">Most people get to Taniti by air, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <ul>
                        <li>Airplane</li>
                        <li>Cruise</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className='text-5xl font-["Amatic_SC"] text-shadow-md'>Getting Around Taniti</h1>
                    <div className="text-xl font-['Josefin_Sans'] leading-relaxed font-thin">There are lots of ways to get around Taniti, including:</div>
                    <ul>
                        <li>Public Busses</li>
                        <li>Private Busses</li>
                        <li>Taxis</li>
                        <li>Rental Cars</li>
                        <li>Bikes</li>
                        <li>Walking</li>
                    </ul>
                </div>
            </div>

            <div className="w-full h-96 py-12">
                <div className="relative w-full h-full drop-shadow-md">
                    <Image src="/biking.jpg" alt="people biking" layout="fill" objectFit="cover" className="drop-shadow-2xl"></Image>
                </div>
            </div>
        </Layout>
    )
}