import * as React from 'react'

const Header = ({ page }) => {
    let isAnimal, isHome, isDog, isCat, isBird, isContact, isFAQ = false;
    if (page === "dog" || page === "cat" || page === "bird") {
        isAnimal = true;
        page === "dog" ? isDog = true : isDog = false;
        page === "cat" ? isCat = true : isCat = false;
        page === "bird" ? isBird = true : isBird = false;
    }
    page === "home" ? isHome = true : isHome = false;
    page === "contact" ? isContact = true : isContact = false;
    page === "home" ? isHome = true : isHome = false;


    return (
        <div>
            <header className="flex h-10 justify-between">
                <div className="flex h-full gap-6 items-center">
                    <img className="max-h-full" src="./logo1.png" alt="" />
                    <p className="text-dim-gray">Evidence based pet care advice for every pet-lover</p>
                </div>
                <nav className="z-50">
                    <ul className="flex h-full">
                        <li><a className={"hover:bg-midnight-blue hover:text-white h-full px-5 flex items-center " + (isHome ? 'bg-midnight-blue text-white' : '')} href="./index.html">Home</a></li>
                        <li className="group"><a className={"hover:bg-midnight-blue group-hover:text-white  flex items-center px-5  h-full group-hover:bg-midnight-blue " + (isAnimal ? 'bg-midnight-blue text-white' : 'text-black')} href="#">Pets</a>
                            <ul className="text-black  group-hover:visible bg-midnight-blue block invisible">
                                <li><a className={"px-5 py-3 block hover:bg-blue-sky group-hover:text-white " + (isDog ? 'bg-blue-sky' : '')} href="./dog.html">Dogs</a></li>
                                <li><a className={"px-5 py-3 block hover:bg-blue-sky group-hover:text-white " + (isCat ? 'bg-blue-sky' : '')} href="./cat.html">Cats</a></li>
                                <li><a className={"px-5 py-3 block hover:bg-blue-sky group-hover:text-white " + (isBird ? 'bg-blue-sky' : '')} href="./bird.html">Birds</a></li>
                            </ul>
                        </li>
                        <li><a className={" hover:bg-midnight-blue hover:text-white flex items-center px-6 whitespace-nowrap h-full " + (isContact ? 'bg-midnight-blue text-white' : 'text-black')}href="./contact.html">Contact Us</a></li>
                        <li><a className="text-black flex hover:bg-midnight-blue hover:text-white items-center px-6  h-full" href="#">FAQ</a></li>
                    </ul>
                </nav>
            </header>
            <div className="h-1 bg-midnight-blue"></div>
        </div>


    )

}

export default Header