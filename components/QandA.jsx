export default function QandA({ question, answer }) {
    return (
        <div className="py-10 font-['Josefin_Sans'] text-2xl flex gap-4 flex-col">
            <div className="flex gap-4 text-bold font-['Josefin_Sans']">
                <p className="[font-family:inherit]">Q:</p>
                <p className="[font-family:inherit]">{question}</p>
            </div>
            <div className="flex gap-4">
                <p className="">A:</p>
                <p className="font-['Josefin_Sans'] font-thin">{answer}</p>
                </div>
        </div>
    )
}