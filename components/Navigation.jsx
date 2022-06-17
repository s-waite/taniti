import Link from 'next/link';

function Navigation({ textColor }) {
    // color = "white"
    return (
        <div className={`flex justify-center py-4 text-${textColor}`}>
           <div className='px-5 z-50 shadow-2xl'><Link className='' href="/">Home</Link></div>
           <div className='px-5 z-50'><Link href="/">Attractions</Link></div> 
           <div className='px-5 z-50'><Link href="/lodging">Lodging</Link></div> 
           <div className='px-5 z-50'><Link href="/">Food</Link></div> 
           <div className='px-5 z-50'><Link href="/">Getting Around</Link></div> 
        </div>
    )
}


export default Navigation