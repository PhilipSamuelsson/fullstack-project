import React from 'react'
import { useEffect } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBarTest() {
    useEffect(() => {
        const navTrigger = document.querySelector('.navTrigger')
        const mainListDiv = document.querySelector('#mainListDiv')

        navTrigger.addEventListener('click', function () {
            this.classList.toggle('active')
            console.log('Clicked menu')
            mainListDiv.classList.toggle('show_list')
            if (mainListDiv.classList.contains('show_list')) {
                mainListDiv.style.display = 'block'
                mainListDiv.style.opacity = '1'
            } else {
                mainListDiv.style.opacity = '0'
                setTimeout(() => {
                    mainListDiv.style.display = 'none'
                }, 300) // Fade out duration is 300ms
            }
        })

        return () => {
            navTrigger.removeEventListener('click', () => {
                this.classList.toggle('active')
                console.log('Clicked menu')
                mainListDiv.classList.toggle('show_list')
                if (mainListDiv.classList.contains('show_list')) {
                    mainListDiv.style.display = 'block'
                    mainListDiv.style.opacity = '1'
                } else {
                    mainListDiv.style.opacity = '0'
                    setTimeout(() => {
                        mainListDiv.style.display = 'none'
                    }, 300) // Fade out duration is 300ms
                }
            })
        }
    }, [])

    return (
        <nav className="nav">
            <div className="containerNav">
                <div className="logo">
                    {/* <h2>AirVenture</h2> */}
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                        <li>
                            <Link to="/">Hem</Link>
                        </li>

                        <li>
                            <Link to="/bookings">Boka</Link>
                        </li>
                        <li>
                            <Link to="/contact"> Avgångar </Link>
                        </li>
                        <li>
                            <Link to="/contact"> Kontakt </Link>
                        </li>
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    )
}

export default NavBarTest
