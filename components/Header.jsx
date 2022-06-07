import * as React from 'react'

const Header = () => {
    return (
        <div>
            <header className="flex h-10 justify-between">
                <div className="flex h-full gap-6 items-center">
                    <img className="max-h-full" src="./logo1.png" alt="" />
                    <p className="text-dim-gray">Evidence based pet care advice for every pet-lover</p>
                </div>
                <nav className="z-50">
                    <ul className="flex h-full">
                        <li><a className="hover:bg-midnight-blue hover:text-white h-full px-5 flex items-center" href="./index.html">Home</a></li>
                        <li className="group"><a className="hover:bg-midnight-blue group-hover:text-white text-black flex items-center px-5  h-full group-hover:bg-midnight-blue" href="#">Pets</a>
                            <ul className="text-black  group-hover:visible bg-midnight-blue block invisible">
                                <li><a className="px-5 py-3 block hover:bg-blue-sky group-hover:text-white" href="#">Dogs</a></li>
                                <li><a className="px-5 py-3 block hover:bg-blue-sky group-hover:text-white" href="./cat.html">Cats</a></li>
                            </ul>
                        </li>
                        <li><a className="text-black hover:bg-midnight-blue hover:text-white flex items-center px-6 whitespace-nowrap h-full" href="#">Contact Us</a></li>
                        <li><a className="text-black flex hover:bg-midnight-blue hover:text-white items-center px-6  h-full" href="#">FAQ</a></li>
                    </ul>
                </nav>
            </header>
            <div className="h-1 bg-midnight-blue"></div>
        </div>


    )

}

export default Header