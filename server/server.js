const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Пути к JSON-файлам
const POSTS_FILE = path.join(__dirname, "posts.json");
const COMMENTS_FILE = path.join(__dirname, "comments.json");

// Создаем файлы, если они не существуют
if (!fs.existsSync(POSTS_FILE)) {
    fs.writeFileSync(POSTS_FILE, JSON.stringify([]));
}
if (!fs.existsSync(COMMENTS_FILE)) {
    fs.writeFileSync(COMMENTS_FILE, JSON.stringify([]));
}

// Статические файлы React (после сборки)
app.use(express.static(path.join(__dirname, "../client/dist")));

// API: Получить все посты
app.get("/api/posts", (req, res) => {
    const posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
    res.json(posts);
});

// API: Добавить новый пост
app.post("/api/posts", (req, res) => {
    const { title, prince } = req.body;
    const posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
    const newPost = { id: Date.now(), title, prince, likes: 0 };
    posts.push(newPost);
    fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
    res.status(201).json(newPost);
});


// API: Увеличить лайки для поста
app.post("/api/posts/:id/like", (req, res) => {
    const postId = Number(req.params.id);
    const posts = JSON.parse(fs.readFileSync(POSTS_FILE, "utf-8"));
    const post = posts.find((p) => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: "Пост не найден" });
    }

    post.likes = (post.likes || 0) + 1; // Увеличиваем количество лайков
    fs.writeFileSync(POSTS_FILE, JSON.stringify(posts, null, 2));
    res.json(post);
});

// API: Получить комментарии для поста
app.get("/api/posts/:id/comments", (req, res) => {
    const postId = Number(req.params.id);
    const comments = JSON.parse(fs.readFileSync(COMMENTS_FILE, "utf-8"));
    const postComments = comments.filter((c) => c.postId === postId);
    res.json(postComments);
});

// API: Добавить новый комментарий
app.post("/api/posts/:id/comments", (req, res) => {
    const postId = Number(req.params.id);
    const { author, text } = req.body;

    const comments = JSON.parse(fs.readFileSync(COMMENTS_FILE, "utf-8"));
    const newComment = { id: Date.now(), postId, author, text };
    comments.push(newComment);

    fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2));
    res.status(201).json(newComment);
});

// Обработка всех остальных маршрутов (React Router)
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});