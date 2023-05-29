import React from 'react';
import PropTypes from 'prop-types';

const FlightTable = ({ flights }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Avgång</th>
          <th>Ankomst</th>
          <th>Avgångstid</th>
          <th>Ankomsttid</th>
        </tr>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <tr key={flight.flight_id}>
            <td>{flight.departure_city}</td>
            <td>{flight.arrival_city}</td>
            <td>{flight.departure_time}</td>
            <td>{flight.arrival_time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

FlightTable.propTypes = {
  flights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      departure_city: PropTypes.string.isRequired,
      arrival_city: PropTypes.string.isRequired,
      departure_time: PropTypes.string.isRequired,
      arrival_time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FlightTable
