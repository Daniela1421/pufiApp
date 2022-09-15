import React from 'react'
import cart from "../images/cart.jpg";
import puff from "../images/puff.jpg";
import nap from "../images/nap.jpg";
import rain from "../images/rain.jpg";

export default function Hashtag() {
  return (
    <div className='hashtag_container'>
       <p className='hashtagName'>INSTAGRAM</p> 
       <p>#ESPUFI</p>
        <section className='hashtagImages'>
            <img src={rain} alt='rain'></img> 
            <img src={cart} alt='rain'></img> 
            <img src={puff} alt='rain'></img> 
            <img src={nap} alt='rain'></img> 
            <img src={puff} alt='rain'></img> 
            <img src={rain} alt='rain'></img> 
        </section>
    </div>
  )
}
