import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data_sample.json';

function AgencyList() {
  return (
        <table className= "table-agencies">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((agency) => (
                <tr>
                  <td>
                    <Link to={`/element/${agency.id}`}>
                    {agency.name}
                    </Link>
                  </td>
                  <td>
                    {agency.address}
                  </td>
                  <td>
                    {agency.phone_number}
                  </td>
                </tr>

          ))}
        </tbody>
        </table>

  );
}

export default AgencyList
