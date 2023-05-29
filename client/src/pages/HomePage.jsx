import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroImage from '../components/HeroImage/HeroImage'

import Footer from '../components/Footer/Footer'

import Card from '../components/Card/Card'
import '../../src/main.css'

function HomePage() {
    return (
        <div>
            <NavBar />
            <HeroImage/>
            <h2 className='sistaMinuten'> Våra destinationer </h2>
            <div className="cardSection">

              <Card/>
            <Card/>
            <Card/></div>
            <Footer />
        </div>
    )
}

export default HomePage
