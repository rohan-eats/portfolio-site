import React from 'react'
import Slider from "react-slick";
import "./style.scss"

export default function Testimonials() {


    const settings = {

        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear"
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
                <div className='quote-container'>

                    <div class='quote'>
                        <blockquote>
                            <p>Best in market.</p>
                            <cite>
                                <span>Dina Anderson</span>
                                <br />
                                Blue Bottle
                            </cite>
                        </blockquote>
                    </div>
                </div>


            </Slider>
        </div>
    )
}
