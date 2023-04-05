import React from 'react'
import logo from "../../assets/image6.png"
import { AiFillFacebook } from "react-icons/ai"
import { FaInstagramSquare } from "react-icons/fa"
import { AiFillTwitterSquare } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import "./secondFooter.scss"

const SecondFooter = () => {
    return (
        <>
            <div className="second__container" id='footer'>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='links'>
                    <ul>
                        <li>
                            <a href="#nav">Home</a>
                        </li>
                        <li>
                            <a href="#nav">Profile</a>
                        </li>
                        <li>
                            <a href="#nav">Reports</a>
                        </li>
                        <li>
                            <a href="#nav">Insights</a>
                        </li>
                    </ul>
                </div>
                <div className='link'>
                    <ul>
                        <li><a href="#nav">Information centre</a></li>
                        <li><a href="#nav"> Terms & conditions</a></li>
                        <li><a href="#nav">privacy policy</a></li>
                    </ul>
                </div>
                <div className='social__links'>
                    <div className="social">
                        <a href="#nav"><AiFillFacebook className='icons' /></a>
                        <a href="#nav"><AiFillLinkedin className='icons' /></a>
                        <a href="#nav"><AiFillTwitterSquare className='icons' /></a>
                        <a href="#nav"><FaInstagramSquare className='icons' /></a>
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