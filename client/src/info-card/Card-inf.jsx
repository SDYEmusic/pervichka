import { useState } from 'react'
import './card-inf.css'
import likes from '../assets/likes.png'
// import reactLogo from '../assets/react.svg'

function Card_inf(progs) {
    const { title, prince } = progs
    return (
        <>
            <div className="content-item-inf">
                <h2 className="item-h2">{title}</h2>
                <p className='item-p'>{prince}</p>
            
            </div>
        </>
    )
}

export default Card_inf