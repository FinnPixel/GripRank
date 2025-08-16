import { Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "./Map.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import { IPark } from "./Park";

interface IMap {
  parks: IPark[];
}

function Map({ parks }: IMap) {
  const MarkerClickHandler = ({ park }: any) => {
    const map = useMap();
    return (
      <Marker
        key={park.id}
        position={[park.coordinates.x, park.coordinates.y]}
        eventHandlers={{
          click: () => {
            map.setView([park.coordinates.x, park.coordinates.y], 14);
          },
        }}
      >
        <Popup>
          {park.title}
          <br />
          {park.address}
        </Popup>
      </Marker>
    );
  };

  return (
    <Box>
      <MapContainer
        className="full-height-map"
        center={[48.137154, 11.576124]}
        zoom={12}
        minZoom={3}
        maxZoom={19}
        maxBounds={[
          [-85.06, -180],
          [85.06, 180],
        ]}
        attributionControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        <MarkerClusterGroup>
          {parks.map((park: IPark) => (
            <MarkerClickHandler park={park} key={park.id} />
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </Box>
  );
}

export default Map;
