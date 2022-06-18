import Link from 'next/link';

function Navigation({ textColor }) {
    // color = "white"
    return (
        <div className={`flex text-lg justify-center py-4 text-${textColor}`}>
           <div className='px-5 z-50 text-shadow'><Link className='' href="/">Home</Link></div>
           <div className='px-5 z-50 text-shadow'><Link href="/">Attractions</Link></div> 
           <div className='px-5 z-50 text-shadow'><Link href="/lodging">Lodging</Link></div> 
           <div className='px-5 z-50 text-shadow'><Link href="/">Food</Link></div> 
           <div className='px-5 z-50 text-shadow'><Link href="/">Getting Around</Link></div> 
        </div>
    )
}


export default Navigation