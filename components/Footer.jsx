import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-gray-200 w-full px-8 h-16 flex items-center justify-between">
            <div className="flex gap-12">
                <Link href="/">Home</Link>
                |
                <Link href="/faq">FAQ</Link>
                |
                <Link href="/Contact">Contact Us</Link>
            </div>
            <div>
                © Copyright 2022
            </div>
        </div>
    )
}