import React, { useState, useEffect } from 'react';
import ReactMapGL, {
    Marker,
    GeolocateControl,
    NavigationControl,
} from 'react-map-gl';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const Loc = styled.img`
    height: 20px;
    width: 20px;
`;

const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg';

const Map = () => {
    const [customerCoords, setCustomerCoords] = useState({});
    const [placeName, setPlaceName] = useState('');
    // const data = JSON.parse(localStorage.getItem('Coordinates'));
    const data = {}
    data.lat = 13.014509199999999
    data.long = 77.6677641

    const [viewPort, setViewPort] = useState({
        width: '450px',
        height: '450px',
        latitude: 13.014509199999999,
        longitude: 77.6677641,
        zoom:13 ,
    });

    const geolocateStyle = {
        position: 'absolute',
        right: -3,
        bottom: 30,
        margin: 10,
    };

    const navStyle = {
        position: 'absolute',
        right: -3,
        bottom: 70,
        margin: 10,
    };
    // console.log(customerCoords);

    useEffect(() => {
        Geolocation(customerCoords);
    }, [customerCoords]);

    const Geolocation = (data) => {
        var config = {
            method: 'get',
            url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${data.long},${data.lat}.json?country=IN&access_token=${MAPBOX_TOKEN}`,
            headers: {},
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                getLocation(response.data.features);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getLocation = (data) => {
        data.map((item, i) => {
            if (i === 1) {
                var long = item.center[0];
                var lat = item.center[1];
                var place_name = item.place_name;
                setPlaceName(place_name);

                const Coordinates = {
                    lat,
                    long,
                    place_name,
                };
                // console.log(Coordinates);
                localStorage.setItem(
                    'CustomerCurrentLoc',
                    JSON.stringify(Coordinates),
                );
            }
        });
    };

    return (
        <>
            <ReactMapGL
                {...viewPort}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(viewport) => {
                    setViewPort(viewport);
                }}
            >
                <Marker
                    key={data.lat}
                    latitude={data.lat}
                    longitude={data.long}
                >
                    <i class="fas fa-home"></i>
                    {data.area}
                </Marker>
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    showUserLocation={true}
                    onGeolocate={(e) => {
                        setCustomerCoords({
                            lat: e.coords.latitude,
                            long: e.coords.longitude,
                        });
                    }}
                />

                <div style={navStyle}>
                    <NavigationControl />
                </div>
            </ReactMapGL>
            <div
                className='col mb-5'
                style={{
                    padding: '0px',
                }}
            >
                <TextField
                    label='Address'
                    placeholder=''
                    fullWidth
                    variant='outlined'
                    style={{
                        marginLeft: '0px',
                        marginTop: '5px',
                        borderRadius: '0px',
                    }}
                    value={placeName}
                />
            </div>
        </>
    );
};

export default Map;