import React from 'react'


export default function Products({image, icon, name}) {
  return (
    <div className='products_container'>
        <div className='image'>
            <img src={image} alt={name}></img>
            <button>SHOP</button>
        </div>
        <div className='information'>
            <img src={icon} alt={name}></img>
            <h2>{name}</h2>
            <p>___</p>
            <p>Descripción del producto. Este es <br></br> un texto simulado</p>
            <h3> {'> '}VER MAS</h3>
        </div>
    </div>
  )
}
