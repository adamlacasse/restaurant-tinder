import { useMemo } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

export default function Map() {
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const { isLoaded } = useLoadScript({ 
        googleMapsApiKey: '',
        libraries: ['places']
    });
    
    if (!isLoaded) {
        return <>Loading...</>;
    }
    
    return (
        <>
            <GoogleMap 
                zoom={10} 
                center={center} 
                mapContainerClassName="map-container" 
            />
        </>
    );
}
