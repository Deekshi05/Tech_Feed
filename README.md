# 📰 Techefeed – Personalized Tech Feed & Dev Community Platform

Techefeed is a full-stack MERN application that delivers personalized tech content from across the internet and enables real-time discussions through community channels — like Dev.to + GitHub Trending + Discord + Hacker News in one place.

---

## 🚀 Features

### 🔐 Authentication
- Email/password login
- Google/GitHub OAuth
- JWT-based session management
- Role-based access: User, Moderator, Admin

### 📰 Personalized Tech Feed
- Aggregates content from:
  - Dev.to
  - Hacker News
  - GitHub Trending
  - YouTube (via RSS or API)
- Smart tagging system (`#ai`, `#cloud`, `#react`)
- Bookmarks and emoji reactions
- “For You” tab (ML-based recommendation)

### 💬 Real-Time Channels
- Public & private chat rooms by topic (`#webdev`, `#ai-news`)
- WebSocket-based live chat with:
  - Markdown + code blocks
  - Mentions (`@username`)
  - Link/image previews
  - Pinned messages

### 🧠 ML Recommendation Engine (Phase 2)
- Learns from:
  - User interests, followed tags
  - Bookmark/reaction history
  - Channel participation
- Suggests:
  - Posts, users, and channels

---

## 🛠️ Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| Frontend     | React, Tailwind/MUI, Axios    |
| Backend      | Node.js, Express.js, Socket.io|
| Database     | MongoDB + Mongoose            |
| Auth         | JWT, Google/GitHub OAuth      |
| ML Engine    | (Optional) Python, FastAPI    |
| Dev Tools    | Postman, VSCode, Nodemon      |
