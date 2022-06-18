import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import Layout from "../components/Layout";

export default function Lodging() {
    const resortSvg =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M10,2V4.26L12,5.59V4H22V19H17V21H24V2H10M7.5,5L0,10V21H15V10L7.5,5M14,6V6.93L15.61,8H16V6H14M18,6V8H20V6H18M7.5,7.5L13,11V19H10V13H5V19H2V11L7.5,7.5M18,10V12H20V10H18M18,14V16H20V14H18Z" />
        </svg>

    const hostelSvg =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M7 14C8.66 14 10 12.66 10 11C10 9.34 8.66 8 7 8C5.34 8 4 9.34 4 11C4 12.66 5.34 14 7 14M7 10C7.55 10 8 10.45 8 11C8 11.55 7.55 12 7 12C6.45 12 6 11.55 6 11C6 10.45 6.45 10 7 10M19 7H11V15H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7M21 15H13V9H19C20.1 9 21 9.9 21 11Z" />
        </svg>

    const hotelSvg =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" />
        </svg>

    return (
        <Layout src="/hero/lodging.jpg" pageTitle="Lodging" textColor="white" className="text-white">
            <CardTitle svg={hotelSvg}>Hotels</CardTitle>
            <div className="flex gap-1">
                <Card src="/hotel.jpg" alt="a hotel" title="Hotel 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/hotel.jpg" alt="a hotel" title="Hotel 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/hotel.jpg" alt="a hotel" title="Hotel 3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>

            <CardTitle svg={resortSvg}>Resorts</CardTitle>
            <Card src="/resort.jpg" alt="a resort" title="Resort 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>

            <CardTitle svg={hostelSvg}>Hostels</CardTitle>
            <div className="flex gap-1">
                <Card src="/hostel.jpg" alt="a hostel" title="Hostel 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/hostel.jpg" alt="a hostel" title="Hostel 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>
            <div className="h-6"></div>
        </Layout>
    )
}