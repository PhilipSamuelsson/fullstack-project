import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FlightSchedule from '../components/FlightSchedule/FlightSchedule'
import '../../src/main.css'


function DeparturesPage() {
  return (
    <div>
        <NavBar/>
        <div className='departurePic'>
            <FlightSchedule/>
        </div>

    </div>
  )
}

export default DeparturesPage
