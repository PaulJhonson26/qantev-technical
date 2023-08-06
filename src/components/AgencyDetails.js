import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data_sample.json';

function AgencyDetails() {
  const { id } = useParams();
  const agency = data.find((a) => a.id == id)
  return (
    <div>
      <h1>{agency.name}</h1>
      <p>Address: {agency.address}</p>
      <p>Phone: {agency.phone_number}</p>
      <p>Coords: {agency.coordinates[0]}, {agency.coordinates[1]}</p>
      <p>Total Cost: {agency.total_cost}</p>
      <p>Avg Patient Age: {agency.average_patient_age}</p>
      <p>In Claim Cost: {agency.average_inpatient_claim_cost}</p>
      <p>Out Claim Cost: {agency.average_outpatient_claim_cost}</p>
    </div>
  );
}
export default AgencyDetails
