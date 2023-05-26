import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

export default function Map({ lat, long, key }: { lat: number, long: number, key: number }) {
    const [center, setCenter] = useState<[number, number]>([lat, long])
    const [keyS, setKey] = useState(0);
    
    return (
        <>
            <MapContainer key={keyS} center={center} zoom={6} style={{ height: '68vh', width: '100vw' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} />

            </MapContainer>
        </>
    )
}