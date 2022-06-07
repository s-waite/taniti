import * as React from 'react'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div>
        <Header></Header>
            <div className="w-4/6 mx-auto my-6">
                {children}
            </div>
        <Footer></Footer>
        </div>
    )
}

export default Layout