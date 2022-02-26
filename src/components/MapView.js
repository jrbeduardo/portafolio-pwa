import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { IconLocation } from './IconLocation';

export const MapView = () => {
  const position = [19.44193, -99.09315];
  return (
    <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
    <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={IconLocation}>
      <Popup>
        Hola 🏠 <br /> Aquí vivo.
      </Popup>
    </Marker>
  </MapContainer>
  )
}
