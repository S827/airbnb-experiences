import React from 'react'
import Img from '../images/photo-grid.png'
export default function Hero() {
    return (
        <section className='hero'>
            <img className='hero-img' src={Img} />
            <h1 className='hero-heading'>Online Experiences</h1>
            <p className='hero-content'>
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}