import React from 'react'
import './style.scss';

export default function Footer() {
    return (
        <div className="footer-container">
            <div>
                <a href="mailto:sales@hittitestechnology.com">sales@hittitestechnology.com</a>
            </div>
            <div>
                <p>© {new Date().getFullYear()} Hittites Technology India Limited. | All Rights Reserved</p>
            </div>
            <div>
                <a href="tel:+919620018180"> +91 962-001-8180</a>
            </div>
        </div>
    )
}
