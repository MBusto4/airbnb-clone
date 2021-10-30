import React, { useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function Map({ searchResults }) {

    const [selectedLocation, setSelectedLocation] = useState({})


    //transform the search results object to have lattitude and longitude

    const coordinates = searchResults.map((result) => (
        {
            longitude: result.long,
            latitude: result.lat
        }
    ))
    const center = getCenter(coordinates)
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10
    })

    return (
        <ReactMapGl
            mapStyle='mapbox://styles/mbusto4/ckvdx61lm1a9t14t2u42isygf'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p onClick={() => setSelectedLocation(result)} className='text-2xl animate-bounce cursor-pointer'>
                            📍
                        </p>
                    </Marker>
                    {/*popup that should show when we click the marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => selectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}
                </div>
            ))}
        </ReactMapGl>
    )
}

export default Map
