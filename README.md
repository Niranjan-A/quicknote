# 📝 QuickNote
A simple note-taking app with full CRUD functionality and a clean, responsive UI. Built using the **MERN** stack and best practices, QuickNote is a lightweight yet functional project that showcases full-stack development skills.

---

## 🔧 Features
- 📝 Create, Read, Update, and Delete (CRUD) notes
- 📱 Fully responsive design for mobile and desktop
- ✅ Data modeling with Mongoose schemas
- 🚫 Rate limiting with Upstash (100 requests/minute)

---

## 🛠️ Tech Stack

- **MongoDB + Mongoose** – NoSQL database and data modeling  
- **Node.js + Express** – Backend REST API  
- **React (with Vite)** – Fast, modern frontend  
- **Tailwind CSS + daisyUI** – Utility-first styling with accessible UI components  
- **Lucide React** – Icon library  
- **Upstash** – Serverless Redis for rate limiting  

---

## 📚 Motivation
QuickNote was built to learn the MERN stack and demonstrate full-stack web development skills through a hands-on project.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Niranjan-A/quicknote.git
```

### 2. Navigate into the Project Directory

```bash
cd quicknote
```

---

## 🧪 Environment Variables Setup

### Backend (`/backend`)
Create a `.env` file in the `/backend` directory with the following variables:

```env
MONGO_URI=<your_mongo_uri>
UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>
NODE_ENV=development
```

---

## 🖥️ Run the Application

### 🔁 Run the Backend

```bash
cd backend
npm install
npm run dev
```

### 🌐 Run the Frontend

Open a new terminal window/tab:

```bash
cd frontend
npm install
npm run dev
```

Once both servers are running, you can access the frontend at:

```
http://localhost:5173
```
And backend at:
```
http://localhost:5501
```
