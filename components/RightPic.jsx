const RightPic = ({ alt, location, children, title }) => {
    return (
        <div className="flex gap-10 items-center">
            <div className="flex flex-col gap-2"><b>{title}</b>{children}</div> 
            <img className="w-80 h-80 object-cover" src={location} alt={alt} />
        </div>
    )
}

export default RightPic