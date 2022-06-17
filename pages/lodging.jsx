import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Lodging() {
    return (
        <Layout src="/hero/lodging.jpg" title="Lodging" color="white">
            <h2 className="">
                Lodging on Taniti
            </h2>
            <h2>Hotels</h2>
            <div className="flex gap-1">
                <Card src="/hotel.jpg" alt="a volcano" title="Hotel 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/hotel.jpg" alt="a volcano" title="Hotel 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/hotel.jpg" alt="a volcano" title="Hotel 3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>
            <h2 className="text-cyan-700">
                Resorts
            </h2>
            <h2>
                Hostels
            </h2>

        </Layout>
    )
}