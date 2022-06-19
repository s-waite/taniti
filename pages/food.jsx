import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import Layout from "../components/Layout";

export default function Lodging() {
    const localFood =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M12,20L12.76,17C9.5,16.79 6.59,15.4 5.75,13.58C5.66,14.06 5.53,14.5 5.33,14.83C4.67,16 3.33,16 2,16C3.1,16 3.5,14.43 3.5,12.5C3.5,10.57 3.1,9 2,9C3.33,9 4.67,9 5.33,10.17C5.53,10.5 5.66,10.94 5.75,11.42C6.4,10 8.32,8.85 10.66,8.32L9,5C11,5 13,5 14.33,5.67C15.46,6.23 16.11,7.27 16.69,8.38C19.61,9.08 22,10.66 22,12.5C22,14.38 19.5,16 16.5,16.66C15.67,17.76 14.86,18.78 14.17,19.33C13.33,20 12.67,20 12,20M17,11A1,1 0 0,0 16,12A1,1 0 0,0 17,13A1,1 0 0,0 18,12A1,1 0 0,0 17,11Z" />
        </svg>

    const americanFood =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M18.06 23H19.72C20.56 23 21.25 22.35 21.35 21.53L23 5.05H18V1H16.03V5.05H11.06L11.36 7.39C13.07 7.86 14.67 8.71 15.63 9.65C17.07 11.07 18.06 12.54 18.06 14.94V23M1 22V21H16.03V22C16.03 22.54 15.58 23 15 23H2C1.45 23 1 22.54 1 22M16.03 15C16.03 7 1 7 1 15H16.03M1 17H16V19H1V17Z" />
        </svg>

    const panAsianFood =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M22 3L10 4.41V6H22V7H10V12H22C22 13.81 21.43 15.46 20.32 16.95S17.77 19.53 16 20.25V22H8V20.25C6.24 19.53 4.79 18.43 3.68 16.95S2 13.81 2 12H5V4L22 2V3M6 4.88V6H7V4.78L6 4.88M6 7V12H7V7H6M9 12V7H8V12H9M9 6V4.55L8 4.64V6H9Z" />
        </svg>

    const groceryFood =
        <svg className="fill-teal-900" style={{ width: 36, height: 36 }} viewBox="0 0 24 24">
            <path d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z" />
        </svg>

    return (
        <Layout src="/hero/food.jpg" pageTitle="Food" textColor="white" className="text-white">
            <CardTitle svg={localFood}>Local Food</CardTitle>
            <div className="flex gap-1 flex-wrap justify-center">
                <Card src="/fish.jpg" alt="fish food" title="Local Food 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/fish.jpg" alt="fish food" title="Local Food 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/fish.jpg" alt="fish food" title="Local Food 3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/fish.jpg" alt="fish food" title="Local Food 4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/fish.jpg" alt="fish food" title="Local Food 5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>

            <CardTitle svg={americanFood}>American Food</CardTitle>
            <div className="flex gap-1 flex-wrap justify-center">
                <Card src="/american.jpg" alt="a burger and fries" title="American Food 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/american.jpg" alt="a burger and fries" title="American Food 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/american.jpg" alt="a burger and fries" title="American Food 3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>

            <CardTitle svg={panAsianFood}>Pan-Asian Food</CardTitle>
            <div className="flex gap-1">
                <Card src="/asian.jpg" alt="asian food dishes" title="Pan-Asian Food 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/asian.jpg" alt="asian food dishes" title="Pan-Asian Food 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>

            <CardTitle svg={groceryFood}>Groceries</CardTitle>
            <div className="flex gap-1 flex-wrap justify-center">
                <Card src="/grocery.jpg" alt="grocery store" title="Grocery Food 1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/grocery.jpg" alt="grocery store" title="Grocery Food 2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/grocery.jpg" alt="grocery store" title="Grocery Food 3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/grocery.jpg" alt="grocery store" title="Grocery Food 4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
                <Card src="/grocery.jpg" alt="grocery store" title="Grocery Food 5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tortor magna, ultricies sit am</Card>
            </div>
            <div className="h-6"></div>
        </Layout>
    )
}