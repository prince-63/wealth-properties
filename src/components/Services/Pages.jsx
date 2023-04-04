import React from 'react'
import "./services.scss"

const Pages = ({ img, title, body, item1, item2, item3, item4, item5, id }) => {
    return (

        <>
            {
                id === "0" ?
                    <div className="pages__container">
                        <div className="img__section">
                            <img src={img} alt="this is a pic" />
                        </div>
                        <div className="text__container">
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <div>
                                <ul>
                                    <li>{item1}</li>
                                    <li>{item2}</li>
                                    <li>{item3}</li>
                                    <li>{item4}</li>
                                    <li>{item5}</li>
                                </ul>
                            </div>
                            <div>
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="pages__container" id='reverse'>
                        <div className="text__container">
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <div>
                                <ul>
                                    <li>{item1}</li>
                                    <li>{item2}</li>
                                    <li>{item3}</li>
                                    <li>{item4}</li>
                                    <li>{item5}</li>
                                </ul>
                            </div>
                            <div>
                                <button>Get Started</button>
                            </div>
                        </div>
                        <div className="img__section">
                            <img src={img} alt="this is a pic" />
                        </div>
                    </div>
            }

        </>
    )
}

export default Pages