import React from 'react'
import "./banner.scss"
import BannerImage from "../../assets/image7.png"

const Banner = () => {
    return (
        <>
            <div className="banner__container">
                <div className="container_one"
                    data-aos="fade-right"
                    data-aos-duration="500"
                >
                    <div className='all__text__container'>
                        <h1>Buy your</h1>
                        <h1 className='bold'>dream home</h1>
                        <h1>in Kyiv!</h1>
                        <div>
                            <a href="#footer"><button>Get Started</button></a>
                        </div>
                    </div>
                    <div className='image__container'
                        data-aos="fade-left"
                        data-aos-duration="500"
                    >
                        <img src={BannerImage} alt="this is a banner img." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner