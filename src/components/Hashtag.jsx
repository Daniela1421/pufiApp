import React from 'react'
import cart from "../images/cart.jpg";
import puff from "../images/puff.jpg";
import nap from "../images/nap.jpg";
import rain from "../images/rain.jpg";
import landingrain from "../images/landingrain.jpg"
import landingcart from "../images/landingcart.jpg"

export default function Hashtag() {
  return (
    <div className='hashtag_container'>
       <p className='hashtagName'>INSTAGRAM</p> 
       <p>#ESPUFI</p>
        <section className='hashtagImages'>
            <img src={rain} alt='rain'></img> 
            <img src={cart} alt='rain'></img> 
            <img src={landingrain} alt='rain'></img> 
            <img src={nap} alt='rain'></img> 
            <img src={landingcart} alt='rain'></img> 
            <img src={puff} alt='rain'></img> 
        </section>
    </div>
  )
}
