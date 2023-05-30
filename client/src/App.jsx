import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import React from 'react';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';


import { Route, Routes } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import DeparturesPage from './pages/DeparturesPage';

createBrowserRouter([{ path: '/' }, {}])

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bookings" element={<BookingPage />} />
                <Route path="/departures" element={<DeparturesPage />} />

            </Routes>
        </div>
    )
}

export default App
