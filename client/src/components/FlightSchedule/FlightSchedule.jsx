import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlightTable from './FlightTable';

const FlightSchedule = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flights from the API endpoint
    axios
      .get('http://Localhost:8000')
      .then((response) => {
        setFlights(response.data);
      })
      .catch((error) => {
        console.error('Error fetching flights', error);
      });
  }, []);

  return (
    <div>
      <h1>Flight Schedule</h1>
      <FlightTable
        flights={flights.map((flight) => ({
          id: flight.id,
          departure_city: flight.departure_city,
          arrival_city: flight.arrival_city,
          departure_time: flight.departure_time,
          arrival_time: flight.arrival_time,
        }))}
      />
    </div>
  );
};

export default FlightSchedule;
