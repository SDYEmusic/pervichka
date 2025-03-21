import { useState } from 'react'
import './card.css'
import likes from '../assets/likes.png'
// import reactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'

function Card(progs) {
    const { title, prince, key, post } = progs
    const [likesCount, setlikseCount] = useState(0)

    const increaseLikesByOne = () => {
        setlikseCount(likesCount + 1)
    }
    return (
        <>
            
                <Link className="content-item" to={`/post/${post}`} key={key} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="img-d">
                    {/* <img src={img} className="item-img"></img> */}
                </div>
                <h2 className="item-h2">{title}</h2>
                <p className='item-p'>{prince}</p>
                <div className="card-footer">
                <a className='more-btn' onClick="">Комментарии</a>
                <a className='reaction-btn' onClick={increaseLikesByOne}>&#128402; {likesCount}</a>
                </div>
                </Link>
            
        </>
    )
}

export default Card