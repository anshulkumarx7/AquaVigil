"use client";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMaps = ({
  apiKey,
  defaultCenter = { lat: 40.756795, lng: -73.954298 },
  defaultZoom = 17,
  setFetchedLocation,
}) => {
  const [currentCenter, setCurrentCenter] = useState(defaultCenter);
  const [marker, setMarker] = useState({
    position: defaultCenter,
    draggable: true,
    title: "Hello World!",
  });

  const [myMarker, setMyMarker] = useState(null);
  const [myCityCircle, setMyCityCircle] = useState(null);
  const [lastGeocodeTime, setLastGeocodeTime] = useState(null); // Track last geocode fetch time

  const handleMarkerDragEnd = (newPosition) => {
    console.log(newPosition.lat);
    console.log(newPosition.lng);
    setMarker({ ...marker, position: newPosition });
  };

  const isLoaded = (map, maps) => {
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map: map,
      center: currentCenter,
      radius: 100,
      draggable: true,
    });

    setMyCityCircle(cityCircle);

    let newMarker = new google.maps.Marker({
      ...marker,
      map: map,
      position_changed: () => handleMarkerDragEnd(marker.position),
    });

    setMyMarker(newMarker);
  };

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // If 5 seconds haven't passed since the last fetch, return
        if (Date.now() - lastGeocodeTime < 5000) {
          console.log(
            "Skipping geocode fetch due to recent request:",
            Date.now() - lastGeocodeTime
          );
          return;
        }

        setLastGeocodeTime(Date.now()); // Update last fetch time

        try {
          const response = await fetch(
            `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&api_key=${process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY}`
          );

          if (response.ok) {
            const geocodeData = await response.json();
            console.log(geocodeData);
            setFetchedLocation(geocodeData.display_name);
          } else {
            console.error("Geocode fetch failed:", response.statusText);
          }
        } catch (error) {
          console.error("Geocode fetch error:", error);
        }

        // Update location regardless of geocode fetch
        setMarker({
          ...marker,
          position: { lat: latitude, lng: longitude },
        });
        setCurrentCenter({ lat: latitude, lng: longitude });

        myMarker.setPosition({ lat: latitude, lng: longitude });
        myCityCircle.setCenter({ lat: latitude, lng: longitude });

        console.log(latitude, longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="w-full h-screen relative">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}` }} // Replace with your API key
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => isLoaded(map, maps)}
        center={currentCenter}
      />
      <div
        className="flex justify-center hover:cursor-pointer transition-all duration-200 items-center p-5 bg-blue-500 rounded-lg text-white font-semibold absolute bottom-10 left-[50%] translate-x-[-50%]"
        onClick={getCurrentLocation}
      >
        Get Current Location
      </div>
    </div>
  );
};

export default GoogleMaps;
