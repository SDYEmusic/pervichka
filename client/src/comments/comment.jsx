import React, { useState, useEffect } from "react";
import './comment.css';

function Comment() {
    const [comments, setComments] = useState([]); // Состояние для хранения комментариев
    const [newComment, setNewComment] = useState(""); // Состояние для нового комментария
    const [username, setUsername] = useState(""); // Состояние для имени пользователя

    // Загрузка комментариев из localStorage
    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setComments(savedComments);
    }, []);

    // Функция для добавления нового комментария
    const handleAddComment = () => {
        if (newComment.trim() !== "" && username.trim() !== "") {
            const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1);
            const commentWithAuthor = {
                author: formattedUsername, // Преобразованное имя
                text: newComment,
            };

            const updatedComments = [...comments, commentWithAuthor];
            setComments(updatedComments);

            // Сохраняем комментарии в localStorage
            localStorage.setItem("comments", JSON.stringify(updatedComments));

            // Очищаем поля ввода
            setNewComment("");
            setUsername("");
        }
    };

    return (
        <div className="comment">
            <h3 className="com-h3">Комментарии:</h3>

            {/* Отображение списка комментариев */}
            {comments.length > 0 ? (
                <ul className='comment-ul'>
                    {comments.map((comment, index) => (
                        <li key={index} className='comment-li'>
                            <strong>{comment.author}:</strong> {comment.text}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="com-p">Нет комментариев.</p>
            )}
            <div className="input">
                {/* Поле для ввода имени пользователя */}
                <div className="com-in-in-name">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Введите ваше имя..."
                        className="com-in-name"
                    />
                </div>

                {/* Поле для ввода текста комментария */}
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Добавьте комментарий..."
                    rows="3"
                    className="com-in"
                />

                {/* Кнопка для отправки комментария */}
                <button
                    onClick={handleAddComment}
                    className="com-btn"
                >
                    Отправить
                </button>
            </div>
        </div>
    );
}

export default Comment;