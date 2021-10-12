import React from 'react'
import GoogleMapReact from 'google-map-react'
import "./style.scss"

import { MdLocationOn } from 'react-icons/md'
const defaultProps = {
    center: {
        lat: 13.004829544638373,
        lng: 77.51468633773463,
    },
    zoom: 19,
}
// 13.004829544638373, 77.51468633773463

const LocationPin = ({ text }) => (
    <div className="pin">
        <div className="pin-icon">
            <MdLocationOn />
        </div>
        <p className="pin-text">{text}</p>
    </div>
)

const GoogleMap = () => (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
            // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
            bootstrapURLKeys={{ key: 'AIzaSyC_sX29btEF6rMUJr3ks0JhjTadevDdX44' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <LocationPin
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text={'No. 26, 21st Cross, Doddanna Industrial Estate, Near Peenya 2nd Stage, Bangalore 560091, India'}
            />
        </GoogleMapReact>
    </div>
)

export default GoogleMap
