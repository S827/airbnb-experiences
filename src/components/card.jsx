import React from 'react'
// import Katie from '../images'
// import Katie from '../images/katie-zaferes.png'
// import Katie from '../images/katie-zaferes.png'

import Star from '../images/star.png'
export default function Card(props) {
    const Katie = '../images'
    return (
        <div className='card'>
            <img src={`${Katie}/${props.img}`} />
            {/* <h1>Hello</h1> */}
            <div>
                <img src={Star} />
                <span className=''>{props.rating}</span>
                <span className='gray'>{props.reviewCount}</span>
                <span className='gray'>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}