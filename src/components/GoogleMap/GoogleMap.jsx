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
    </div>
)

export default GoogleMap
