import React from 'react'
import bag from "../images/bag.svg";
import pillow from "../images/pillow.svg";
import puf from "../images/puf.svg";
import umbrella from "../images/umbrella.svg";

export default function Navbar() {
  return (
    <div className='navbar_container'>
        <div className='nav'>
        <h1>Pufi</h1>
        <ul className='menu'>
            <dd><img src={puf} alt='puf'></img>PUFI PUFF</dd>
            <dd className='navbar-menu'><img src={umbrella} alt='rain'></img>PUFI RAIN</dd>
            <dd className='navbar-menu'><img src={bag} alt='cart'></img>PUFI CART</dd>
            <dd className='navbar-menu'><img src={pillow} alt='nap'></img>PUFI NAP</dd>
        </ul>
        <ul className='account'>
            <dd className='navbar-menu'>MI CUENTA</dd>
            <dd>MI COMPRA</dd>
        </ul>
        </div> 
    </div>
  )
}
