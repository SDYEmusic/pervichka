import { useState } from 'react'
import './card.css'
import likes from '../assets/likes.png'
// import reactLogo from '../assets/react.svg'

function Card(progs) {
    const { title, prince, img } = progs
    const [likesCount, setlikseCount] = useState(0)

    const increaseLikesByOne = () => {
        setlikseCount(likesCount + 1)
    }
    return (
        <>
            <div className="content-item">
                <div className="img-d">
                    <img src={img} className="item-img"></img>
                </div>
                <h2 className="item-h2">{title}</h2>
                <p className='item-p'>{prince}</p>
                <div className="card-footer">
                <a className='more-btn' onClick="">Узнать больше</a>
                <a className='reaction-btn' onClick={increaseLikesByOne}><img src={likes} className='reaction-img' />{likesCount}</a>
                </div>
            </div>
        </>
    )
}

export default Card