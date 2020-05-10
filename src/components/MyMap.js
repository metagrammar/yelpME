import React, { useState } from "react";
import { Map, Marker, TileLayer, Popup } from "react-leaflet";
import '../App.css'
import { Typography } from "@material-ui/core";


const MyMap  = ({ mapData }) => {

    const [activeRestaurant, setActiveRestaurant] = useState(null);
    
    const berlin = [52.5200, 13.4050]

    return (
    <Map center={berlin} zoom={13} className='leaflet-container'>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
       { mapData.map(item => (
        <Marker 
            position={item.coordinates} 
            key={item.id}
            onClick ={() => {
                setActiveRestaurant(item)
            }}
        />
        ))}
        {activeRestaurant && (
        <Popup 
            position={activeRestaurant.coordinates}
            onClose={() =>{
                setActiveRestaurant(null);
            }}
            >
            <Typography variant='h6'>{activeRestaurant.name}</Typography>
            <Typography variant='subtitle1'>{activeRestaurant.cuisine}</Typography>
            <Typography variant='caption text'>Rating: {activeRestaurant.rating} | {activeRestaurant.price}</Typography>
            </Popup>)}
    </Map>
    );
};

export default MyMap;