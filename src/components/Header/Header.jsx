import React from 'react'
import Logo from "../../images/Logo.png"
import './style.scss';

export default function Header() {
    return (
        <div className="header-container">
            <img src={Logo} alt="Hittites" className="logo-img" />
        </div>
    )
}
