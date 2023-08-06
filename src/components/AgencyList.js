import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data_sample.json';

function AgencyList() {
  return (
    <div>
        <ul>
          {data.map((agency) => (
             <li>
              <Link to={`/element/${agency.id}`}>{agency.name}</Link>
            </li>
          ))}
        </ul>

      </div>
  );
}

export default AgencyList
