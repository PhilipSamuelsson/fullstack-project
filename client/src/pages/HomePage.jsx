import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroImage from '../components/HeroImage/HeroImage'
import Bookingform from '../components/bookingform/bookingform'
import Card from '../components/Card/Card'
import '../../src/main.css'
function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroImage/>
            <div className='bookingSection'>
            <Bookingform />
            </div>
            <div className="cardSection">   <Card/>
            <Card/>
            <Card/></div>

        </div>
    )
}

export default HomePage
