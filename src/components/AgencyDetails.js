import React from 'react';
import logo from '../Qantev_Logo.png';
import { useParams } from 'react-router-dom';
import data from '../data_sample.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

function AgencyDetails() {
  const { id } = useParams();
  const agency = data.find((a) => a.id == id)
  console.log(data[0].coordinates)
  return (
    <div>
      <div className = "container-banner">
          <div>
            <img src = {logo} className = "logo-qantev"/>
          </div>
      </div>
      <div className="container-main">
        <div className = "container-content">
          <div className = "title-details">
            <h1>{agency.name}</h1>
            <p>Address: {agency.address}</p>
          </div>


          <MapContainer center={agency.coordinates} zoom={15} style={{ height: '400px', width: '100%'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={agency.coordinates} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
            </Marker>
          </MapContainer>
          <div className = "container-specific-details">
            <p>Phone: {agency.phone_number}</p>
            <p>Total Cost: {agency.total_cost}</p>
            <p>Avg Patient Age: {agency.average_patient_age}</p>
            <p>In Claim Cost: {agency.average_inpatient_claim_cost}</p>
            <p>Out Claim Cost: {agency.average_outpatient_claim_cost}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AgencyDetails
