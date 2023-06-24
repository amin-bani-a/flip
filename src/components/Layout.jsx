import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function Layout() {
    return (
        <div className=' bg-cyan-200 min-h-1000 px-20 my-10 flex-col justify-center w-full min-h-full'>

            <Header />
            <Main />
            <Footer />

        </div>
    )
}

export default Layout