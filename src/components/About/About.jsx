import React from 'react'
import "./about.scss"
import icon4 from "../../assets/icon4.png"
import icon5 from "../../assets/icon5.png"
import icon6 from "../../assets/icon6.png"

const About = () => {
    return (
        <>
            <div className="about__container" id='about'>
                <div className="box1"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                >
                    <h3>
                        Explore the most attractive areas in Kyiv neighborhoods to buy a home
                    </h3>
                    <p>
                        We are very proud of the service we provide. Discover the hottest communities available in our portfolio. Look through the most popular areas. Our locations and services prove we are the best.
                    </p>
                    <p>
                        Kyiv is the capital and most populous city of Ukraine.The city`s name is said to derive from the name of Kyi, one of its four legendary founders. We rank amongst the Top 6 agencies in the world.
                    </p>
                </div>
                <div className="box"
                    data-aos="fade-left"
                    data-aos-duration="1200"
                >
                    <div className='icons'>
                        <div className="left">
                            <div className="icon">
                                <div  className='image_container'>
                                    <img src={icon4} alt="icon1" />
                                </div>
                                <div>
                                    <small>
                                    Personalized filters that make property search easier.
                                    </small>
                                </div>
                            </div>
                            <div className="icon">
                                <div className='image_container'>
                                    <img src={icon5} alt="icon1" />
                                </div>
                                <div>
                                    <small>
                                    Details info about the property that are in wishlist.
                                    </small>
                                </div>
                            </div>
                            <div className="icon">
                                <div className='image_container'>
                                    <img src={icon6} alt="icon1" />
                                </div>
                                <div>
                                    <small>
                                    QR scan code for retrieving property details..
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="icon">
                                <div className='image_container'>
                                    <img src={icon4} alt="icon1" />
                                </div>
                                <div>
                                    <small>
                                        Personalized filters that make property search easier.
                                    </small>
                                </div>
                            </div>
                            <div className="icon">
                                <div className='image_container'>
                                    <img src={icon5} alt="icon1" />
                                </div>
                                <div>
                                    <small>
                                        Details info about the property that are in wishlist.
                                    </small>
                                </div>
                            </div>
                            <div className="icon">
                                <div className='image_container'>
                                    <img src={icon6} alt="icon1" />
                                </div>
                                <div>
                                    <small>
                                        QR scan code for retrieving property details..
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='end__container'>
                        <p>With tons of benefits for customers. Go True People Wall is the ultimate place where a buyer will search for properties online.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About