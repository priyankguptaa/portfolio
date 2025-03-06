import React from 'react'
import "./Cards.css"


function Cards({
    title,
    decription,
    videoSource, 

}){

  return (
    <div className='card_main_div'>
            <div className='card_sub_div'>
                <video autoPlay loop >
                  <source src={videoSource} type="video/mp4"/>
                </video>
                <div className='data_cards'>
                <h2>{title}</h2>
                <p>{decription}</p>
                </div>
            </div>
        </div>
  )
}

export default (Cards)
