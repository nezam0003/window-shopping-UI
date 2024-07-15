"use client"
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import styles from './Carousel.module.css'; // Import the CSS module
import { carouselItems } from './data';

const Carousel = () => {
    const settings = {
        centerMode: false, // Disable center mode to make the images full width
        dots: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        autoplay: true,
        slidesToShow: 1,
        pauseOnHover: true,
        slidesToScroll: 1,
        cssEase: "linear"
    };

    return (
        <div className='custom-carousel'>
            <Slider {...settings} className={styles.slider}>
                {carouselItems?.map((item, index) => {
                    return (
                        <div key={index} className={styles.slide}>
                            <Image
                                style={{ objectFit: "cover" }}
                                src={item.src}
                                alt="Image 1"
                                fill // This makes the image take the full width and height of its container
                                sizes="100vw" // Optional: Tell the browser to make the image full-width
                            />
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
}

export default Carousel;
