import React from 'react'
import NavBar from '../components/NavBar/NavBar'

import Bookingform from '../components/bookingform/bookingform'
// import FlightSchedule from '../components/FlightSchedule/FlightSchedule'
import Footer from '../components/Footer/Footer'
import '../../src/main.css'
import BookingImage from '../components/BookingImage/BookingImage'


function BookingPage() {
  return (
    <div>
        <NavBar/>
        <BookingImage/>
        <h2 className="bookingTitle">Boka din resa genom att fylla i formuläret nedan</h2>
        <Bookingform/>
        {/* <FlightSchedule/> */}
        <Footer/>
    </div>
  )
}

export default BookingPage
