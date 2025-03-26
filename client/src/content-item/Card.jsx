import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./card.css";

function Card({ title, prince, post }) {
    const [likesCount, setLikesCount] = useState(0);
    const navigate = useNavigate();

    // Загрузка начального количества лайков из localStorage
    useEffect(() => {
        const savedLikes = JSON.parse(localStorage.getItem(`post-${post}-likes`)) || 0;
        setLikesCount(savedLikes);
    }, [post]);

    // Функция для увеличения лайков
    const increaseLikesByOne = (e) => {
        e.stopPropagation();
        e.preventDefault();

        const updatedLikes = likesCount + 1;
        setLikesCount(updatedLikes);

        // Сохраняем лайки в localStorage
        localStorage.setItem(`post-${post}-likes`, JSON.stringify(updatedLikes));
    };

    // Обработчик для кнопки "Комментарии"
    const handleCommentsClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        navigate(`/post/${post}`);
    };

    return (
        <Link className="content-item" to={`/post/${post}`} style={{ textDecoration: "none", color: "inherit" }}>
            <h2 className="item-h2">{title}</h2>
            <p className="item-p">{prince}</p>
            <div className="card-footer">
                <a className="more-btn" onClick={handleCommentsClick}>
                    Комментарии
                </a>
                <a className="reaction-btn" onClick={increaseLikesByOne}>
                    &#128402; {likesCount}
                </a>
            </div>
        </Link>
    );
}

export default Card;