import React from 'react'
import NavBar from '../components/NavBar/NavBar'

import Bookingform from '../components/bookingform/bookingform'

import Footer from '../components/Footer/Footer'
import '../../src/main.css'
import BookingImage from '../components/BookingImage/BookingImage'


function BookingPage() {
  return (
    <div>
        <NavBar/>
        <BookingImage/>
        <Bookingform/>
        <Footer/>
    </div>
  )
}

export default BookingPage
