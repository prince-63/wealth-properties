import React from 'react'
import Nav from '../NavBar/Nav'
import "./firstView.scss"
import Banner from "../Banner/Banner"

function FirstView() {
    return (
        <>
            <div className="firstView___container">
                <div className='one'></div>
                <div className='two'></div>
                <div className='three'></div>
                <div className='compon'>
                    <Nav />
                    <Banner />
                </div>
            </div>
        </>
    )
}

export default FirstView