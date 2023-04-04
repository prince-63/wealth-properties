import React from 'react'
import logo from "../../assets/image6.png"
import facebook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"
import "./secondFooter.scss"

const SecondFooter = () => {
  return (
    <>
        <div className="second__container">
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='links'>
                <ul>    
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Reports</li>
                    <li>Insights</li>
                </ul>
            </div>
            <div className='link'>
                <ul>
                    <li>Information centre</li>
                    <li>Terms & conditions</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className='social__links'>
                <div className="social">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linkedin" />
                </div>
                <div className="copyRight">
                    <span>©2022 wealth properties.</span>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default SecondFooter