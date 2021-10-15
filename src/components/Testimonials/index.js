import React from 'react'
import Slider from "react-slick";
import "./style.scss"

export default function Testimonials() {


    const settings = {

        dots: false,
        arrows: false,
        infinite: true,

    };

    return (
        <div className="content">
            <Slider {...settings}>
                <div className='quote-container'>
                    <div class='quote'>
                        <blockquote>
                            <p>Incredible Service and Amazing Customer Services.</p>
                            <cite>
                                <span>Mr. ABC </span>
                                <br />
                                ABC Company

                            </cite>
                        </blockquote>
                    </div>
                </div>
              


            </Slider>
        </div>
    )
}
