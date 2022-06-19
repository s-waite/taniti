import Link from 'next/link';

function Navigation({ textColor, textShadow }) {
    return (
        <div className={`flex text-lg justify-center py-4 ${textShadow ? "text-shadow" : ""} text-${textColor}`}>
           <div className='px-5 z-50'><Link className='' href="/">Home</Link></div>
           <div className='px-5 z-50'><Link href="/attractions">Attractions</Link></div> 
           <div className='px-5 z-50'><Link href="/lodging">Lodging</Link></div> 
           <div className='px-5 z-50'><Link href="/food">Food</Link></div> 
           <div className='px-5 z-50'><Link href="/transportation">Transportation</Link></div> 
        </div>
    )
}


export default Navigation