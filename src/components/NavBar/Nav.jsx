import React from 'react'
import logo from "../../assets/image6.png"
import "./nav.scss"
import { GrMenu } from "react-icons/gr"
import { useState } from 'react'

const Nav = () => {

    const [use, changeState] = useState("no")

    function change() {
        if (use === "no") {
            changeState("active");
        } else {
            changeState("no");
        }
    }

    return (
        <>
            <div className='nav__container' id="nav">
                <div className='logo__section'>
                    <img src={logo} alt="this is a logo" />
                </div>
                <div className={`links ${use}`}>
                    <div className='link__section'>
                        <ul>
                            <li>
                                <a href="#footer">Home</a>
                            </li>
                            <li>
                                <a href="#footer">Profile</a>
                            </li>
                            <li>
                                <a href="#footer">Reports</a>
                            </li>
                            <li>
                                <a href="#footer">Insights</a>
                            </li>
                        </ul>
                    </div>
                    <div className='button__section'>
                        <a href="#footer"><button> Login</button></a>
                        <a href="#footer"><button> Get Started</button></a>
                </div>
            </div>
            <div className="menu">
                <GrMenu id='menu' onClick={change} />
            </div>
        </div >
        </>
    )
}

export default Nav