import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroImage from '../components/HeroImage/HeroImage'
import Bookingform from '../components/bookingform/bookingform'
import Footer from '../components/Footer/Footer'

function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroImage/>
            <Bookingform />
            <Footer />
        </div>
    )
}

export default HomePage
