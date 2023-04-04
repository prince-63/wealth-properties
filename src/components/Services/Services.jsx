import React from 'react'
import data from "./data.js"
import Pages from './Pages.jsx'
import "./services.scss"

const Services = () => {

  return (
    <>
      <div className="services_container" id='change'>
        {
          data.map((item)=> <Pages key={item[0]} img={item[0]} title={item[1]} body={item[2]} item1={item[3][0]} item2={item[3][1]} item3={item[3][2]} item4={item[3][3]} item5={item[3][4]} id={item[4]} />)
        }

      </div>
    </>
  )
}

export default Services