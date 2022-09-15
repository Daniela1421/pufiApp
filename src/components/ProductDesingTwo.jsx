import React from 'react'

export default function productDesingTwo({image, icon, name}) {
  return (
    <div className='products_container'>
        <div className='information'>
            <img src={icon} alt='rain'></img>
            <h2>{name}</h2>
            <p>___</p>
            <p>Descripción del producto. Este es <br></br> un texto simulado</p>
            <h3> {'> '}VER MAS</h3>
        </div>
        <div className='image'>
            <img src={image} alt='rain'></img>
            <button>SHOP</button>
        </div>
    </div>
  )
}
