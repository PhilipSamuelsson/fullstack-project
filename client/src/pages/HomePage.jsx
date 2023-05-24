import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroImage from '../components/HeroImage/HeroImage'
import Bookingform from '../components/bookingform/bookingform'

function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroImage/>
            <Bookingform />
        </div>
    )
}

export default HomePage
