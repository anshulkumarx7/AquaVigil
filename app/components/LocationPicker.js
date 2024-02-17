"use client";
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const GoogleMaps = ({
  defaultCenter = { lat: 40.756795, lng: -73.954298 }, // Default to New York else use user's location
  defaultZoom = 17,
  setFetchedLocation,
  isAdminPage = false,
  compplaintsData = [],
}) => {
  const [currentCenter, setCurrentCenter] = useState(defaultCenter);

  const [myMarker, setMyMarker] = useState(null);
  const [myCityCircle, setMyCityCircle] = useState(null);
  const [lastGeocodeTime, setLastGeocodeTime] = useState(null); // Track last geocode fetch time

  const handleMarkerDragEnd = async (newPosition, myCityCircle) => {
    try {
      const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${newPosition.lat()}&lon=${newPosition.lng()}&api_key=${
          process.env.NEXT_PUBLIC_GEOLOCATION_API_KEY
        }`
      );

      if (response.ok) {
        const geocodeData = await response.json();
        console.log(geocodeData);
        setFetchedLocation({
          success: true,
          data: geocodeData.display_name,
          latlng: { lat: newPosition.lat(), lng: newPosition.lng() },
        });
      } else {
        console.error("Geocode fetch failed:", response.statusText);
      }
    } catch (error) {
      console.error("Geocode fetch error:", error);
    }

    setCurrentCenter({ lat: newPosition.lat(), lng: newPosition.lng() });
    myCityCircle.setCenter({ lat: newPosition.lat(), lng: newPosition.lng() });
    setMyCityCircle(myCityCircle);
    console.log(newPosition.lat(), newPosition.lng());
  };

  const isLoaded = (map, maps) => {
    if (!isAdminPage) {
      const position = new google.maps.LatLng(
        currentCenter.lat,
        currentCenter.lng
      );
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
        // position: map.getCenter(),
        position: position,
        draggable: true,
        title: "Hello World!",
        map: map,
        // position_changed: () => handleMarkerDragEnd(newMarker.getPosition()),
      });
      newMarker.addListener(
        "dragend",
        async () =>
          await handleMarkerDragEnd(newMarker.getPosition(), cityCircle)
      );
      setMyMarker(newMarker);
    }
    else {
      compplaintsData.forEach((complaint) => {
        const position = new google.maps.LatLng(
          complaint.lat,
          complaint.lng
        );
        new google.maps.Marker({
          position: position,
          map: map,
          title: "Hello World!",
          fillColor: "#FF0000",
        });
      });
    }
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
            setFetchedLocation({
              success: true,
              data: geocodeData.display_name,
              latlng: { lat: latitude, lng: longitude },
            });
          } else {
            console.error("Geocode fetch failed:", response.statusText);
          }
        } catch (error) {
          console.error("Geocode fetch error:", error);
        }

        setCurrentCenter({ lat: latitude, lng: longitude });

        myMarker.setPosition({ lat: latitude, lng: longitude });
        myCityCircle.setCenter({ lat: latitude, lng: longitude });
        console.log("Circle: ", myCityCircle.getCenter());

        console.log(latitude, longitude);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div
      className={` ${
        isAdminPage ? "h-[80vh] w-[79vw] rounded-md" : "h-screen w-full"
      } relative`}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}` }} // Replace with your API key
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => isLoaded(map, maps)}
        center={!isAdminPage ? currentCenter : compplaintsData[0]} // later we have to change this to admin's coordinates or user's
      />
      {!isAdminPage && 
        <div
          className="flex justify-center hover:cursor-pointer transition-all duration-200 items-center p-5 bg-blue-500 rounded-lg text-white font-semibold absolute bottom-10 left-[50%] translate-x-[-50%]"
          onClick={getCurrentLocation}
        >
          Get Current Location
        </div>
      }
    </div>
  );
};

export default GoogleMaps;
