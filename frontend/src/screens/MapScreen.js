import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { LoadScript, GoogleMap, Marker, StandaloneSearchBox } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store'
import { Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function MapScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const defaultLocation = { lat: 34.672501, lng: -58.449722 };
  const libs = ["places"];

  const navigate = useNavigate();

  const [googleApiKey, setGoogleApiKey] = useState("");
  const [center, setCenter] = useState(defaultLocation);
  const [location, setLocation] = useState(center);

  const mapRef = useRef();
  const placeRef = useRef();
  const markerRef = useRef();


  const getUserCurrentLocation = () => { 
    if (!navigator.geolocation) { 
      alert("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }

  useEffect(() => {
    const fetch = async () => { 
      const { data } = await axios.get("/api/keys/google", {
        headers: { Authorization: `BEARER ${userInfo.token}` },
      });
      setGoogleApiKey(data.key);
      getUserCurrentLocation();
    };

    fetch();
    ctxDispatch({ type: 'SET_FULLBOX_ON' })
  }, [ctxDispatch, userInfo]);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  const onIdle = () => {
    setLocation({
      lat: mapRef.current.center.lat(),
      lng: mapRef.current.center.lng(),
    });
  };

  const onLoadPlaces = (place) => { 
    placeRef.current = place;
  }

  const onPlacesChanged = () => {
    const place = placeRef.current.getPlaces()[0].geometry.location;
    setCenter({
      lat: place.lat(),
      lng: place.lng(),
    });
    setLocation({
      lat: place.lat(),
      lng: place.lng(),
    });
  }

  const onMarkerLoad = (marker) => {
    markerRef.current = marker;
  };

  const onConfirm = () => { 
    const places = placeRef.current.getPlaces() || [{}];
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS_MAP_LOCATION",
      payload: {
        lat: location.lat,
        lng: location.lng,
        address: places[0].formatted_address,
        name: places[0].name,
        vicinity: places[0].vicinity,
        googleAddresId: places[0].place_id,
      }
    });
    toast.success('location selected successfully');
    navigate('/shipping');
  }

  return (
    <div className='full-box'>
      <LoadScript
        libraries={libs}
        googleMapsApiKey={googleApiKey}
      >
        <GoogleMap
          id="sample-map"
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={15}
          center={center}
          onLoad={onLoad}
          onIdle={onIdle}
        >
          <StandaloneSearchBox
            onLoad={onLoadPlaces}
            onPlacesChanged={onPlacesChanged}
          >
            <div className='map-input-box'>
              <input
                type="text"
                placeholder="Enter your address"
              />
              <Button
                type="button"
                onClick={onConfirm}
              >
                Confirm
              </Button>
            </div>
          </StandaloneSearchBox>
          <Marker
            position={location}
            onLoad={onMarkerLoad}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  )
}
