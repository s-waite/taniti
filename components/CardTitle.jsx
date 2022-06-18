export default function CardTitle({ children, svg }) {
    return (
        <div className="flex gap-4 items-center my-8">
            {svg}
            <h3 className="text-5xl font-['Amatic_SC'] text-teal-900">{children}</h3>
        </div>
    )
}