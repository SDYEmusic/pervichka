import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CARD } from "../src/card.js"; // Импортируем массив CARD
import Card_inf from '../src/info-card/Card-inf.jsx'; // Компонент для отображения поста
import Comment from '../src/comments/comment'; // Компонент для комментариев

function PostPage() {
    const { id } = useParams(); // Получаем id из URL
    const [post, setPost] = useState(null); // Состояние для хранения выбранного поста

    // Загрузка данных поста
    useEffect(() => {
        const selectedPost = CARD.find((card) => card.id === Number(id)); // Ищем пост по id
        setPost(selectedPost); // Сохраняем найденный пост в состояние
    }, [id]);

    // Если пост еще не загружен, показываем сообщение "Загрузка..."
    if (!post) {
        return <p>Загрузка...</p>;
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Отображаем информацию о посте */}
            <Card_inf title={post.title} prince={post.prince} />

            {/* Раздел комментариев */}
            <Comment />
        </div>
    );
}

export default PostPage;