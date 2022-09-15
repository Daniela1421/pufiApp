import React from 'react'
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import qr from "../images/qr.png";
import safe from "../images/safe.jpg";
import brandlive from "../images/brandlive.jpg"

export default function Footer() {
    return (
        <div className='footer_container'>
            <div className='principalInformation'>
                <h2>Pufi</h2>
                <section className='info'>
                    <dd>PUFI RAIN</dd>
                    <dd>PUFI PUFF</dd>
                    <dd>PUFI CART</dd>
                    <dd>PUFI NAP</dd>
                </section>
                <section className='info'>
                    <dd>CONTACTO</dd>
                    <dd>AYUDA</dd>
                    <dd>CÓMO COMPRAR</dd>
                    <dd>TÉRMINOS {'&'} CONDICIONES</dd>
                </section>
                <section className='securePurchase'>
                    <dd>COMPRA 100% SEGURA</dd>
                    <div>
                        <img src={qr} alt='qr'></img>
                        <img src={safe} alt='safe'></img>
                        <p>COMPRÁ CON LA GARANTIA DE PUFI</p>
                    </div>
                </section>
                <section className='socialMedia'>
                    <dd>SEGUINOS EN </dd>
                    <img src={facebook} alt='facebook'></img>
                    <img src={twitter} alt='twitter'></img>
                    <img src={instagram} alt='instagram'></img>
                </section>
            </div>
            <div className='copyright'>
                <p>PUFI Copyright 2017 - Todos los derechos reservados</p>
                <img src={brandlive} alt='logo'></img>
            </div>
        </div>
    )
}
