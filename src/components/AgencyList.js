import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data_sample.json';

function AgencyList() {
  return (
    <div>
      <h2 className = "table-title">Medical Providers</h2>
      <table className= "table-agencies">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map((agency) => ( /*add each agency to the table*/
                <tr>
                  <td>
                    <Link to={`/agency/${agency.id}`}>
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
    </div>


  );
}

export default AgencyList
