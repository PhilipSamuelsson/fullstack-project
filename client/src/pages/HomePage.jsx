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
            <h2 className='sistaMinuten'> Sista minuten </h2>
            <div className="cardSection">

              <Card
              img="https://images.unsplash.com/photo-1558204692-5f402fe220b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              destination="Stockholm"
              price="595:-"
              />
            <Card
            img="https://images.unsplash.com/photo-1545460463-afdcfb3a3e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            destination="Malmö"
            price="495:-"
            />
            <Card
            img="https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            destination="Umeå"
            price="399:-"/></div>
            <Footer />
        </div>
    )
}

export default HomePage
