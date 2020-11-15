import React, { useState, useEffect } from 'react';
import ReactMapGL, {
    Marker,
    GeolocateControl,
    NavigationControl,
} from 'react-map-gl';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';

const Loc = styled.img`
    height: 20px;
    width: 20px;
`;

const MAPBOX_TOKEN =
    'pk.eyJ1IjoiZmFoZHNoYWlraCIsImEiOiJja2gzYzB3a3YwaXlsMnJvaWJ3ZDdiYzBpIn0.EC5-vAFFL-32D0ZCkCkQFg';

const Map = ({mobile , setMobile}) => {
    const [customerCoords, setCustomerCoords] = useState({});
    const [placeName, setPlaceName] = useState('');
   
    let locationGot = useSelector((state) => state.mapReducer.getLocation)
    // const data = JSON.parse(localStorage.getItem('Coordinates'));
    const data = {}
    data.lat = 13.014509199999999
    data.long = 77.6677641
    // console.log(placeName)
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: '200px',
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

    useEffect(()=>{
        setPlaceName(locationGot)
    },[locationGot])
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
            if (i ===0) {
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
              <div className="container mt-2">
                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3">
                        <span className="input-group-text rounded-0 bg-white border border-right-0"><img src="./searchicon.svg" alt=""/></span>
                        <input type="text" className="form-control rounded-0 border-left-0" aria-label="Recipient's username"   value={placeName} aria-describedby="button-addon2"/>
                            
                            <div className="input-group-append">
                                
                                <button className="btn btn-outline-secondary rounded-0" type="button" id="button-addon2"><img src="./LocateMe.svg" alt="Locate Me" /> Locate Me</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Door number, Floor Number and Building name" aria-label="Example text with button addon" aria-describedby="button-addon1" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="input-group mb-3">
                            <input type="text" value={mobile} class="form-control" placeholder="10 digit Mobile Number" onChange = {(e) =>setMobile(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-4">
                                <button type="button" class="btn border border-secondary"><img src="./HouseForCheckout.svg" alt="House"/></button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <button type="button" class="btn border border-secondary"><img src="./MobileForCheckout.svg" alt="Mobile"/></button>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <button type="button" class="btn border border-secondary"><img src="./others.svg" alt="Others"/></button>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </>
    );
};

export default Map;