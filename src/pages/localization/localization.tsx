import React, { useEffect, useRef, useState } from "react";
import styles from "./localization.module.css";

const GoogleMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [path, setPath] = useState<google.maps.Polyline | null>(null);
  const [locations, setLocations] = useState<google.maps.LatLng[]>([]);
  const [previousLocation, setPreviousLocation] =
    useState<google.maps.LatLng | null>(null);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current) {
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: { lat: 37.5665, lng: 126.978 }, // Center on Seoul by default
          zoom: 13,
          mapTypeId: "satellite",
        });

        const pathInstance = new google.maps.Polyline({
          geodesic: true,
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        });

        pathInstance.setMap(mapInstance);
        setMap(mapInstance);
        setPath(pathInstance);

        updateMap();
        setInterval(updateMap, 5000); // Update the map every 5 seconds
      }
    };

    const fetchGPSData = async () => {
      try {
        const response = await fetch("/ublox_c099_f9p/navpvt");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching GPS data:", error);
        return null;
      }
    };

    const updateMap = async () => {
      const data = await fetchGPSData();
      if (data && data.lat && data.lon) {
        const lat = data.lat / 10000000; // Assuming lat and lon are in microdegrees
        const lon = data.lon / 10000000;
        const newLocation = new google.maps.LatLng(lat, lon);

        if (map && path) {
          // Add new marker and update path
          const marker = new google.maps.Marker({
            position: newLocation,
            map: map,
            title: `Latitude: ${lat}, Longitude: ${lon}`,
          });

          if (previousLocation) {
            setLocations((prevLocations) => {
              const updatedLocations = [
                ...prevLocations,
                previousLocation,
                newLocation,
              ];
              path.setPath(updatedLocations);
              return updatedLocations;
            });
          }

          // Update the map center and path
          map.setCenter(newLocation);
          setPreviousLocation(newLocation);
        }
      }
    };

    initMap();
  }, [map, path, previousLocation]);

  return <div id="map" ref={mapRef} className={styles.map}></div>;
};

export default GoogleMap;
