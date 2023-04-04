import React from 'react'
import img8 from "../../assets/image8.png"
import "./footer.scss"
const Footer = () => {
    return (
        <>
            <div className="footer__container">
                <div className='image__container'>
                    <img src={img8} alt="this is a pic" />
                </div>
                <div className='text__container'>
                    <h2>Let Us Help You Find Your Ideal Buyer!</h2>
                    <p>Interior brings 41 years of interior designs experience right to your home or office. Our design professionals are equipped to help you determine the products and design that work best for our customers.</p>
                    <div>
                        <button>Register Now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer