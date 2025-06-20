# 📝 QuickNote

A simple note-taking app with CRUD functionality and responsive UI, built using the **MERN** stack. Ideal for developers learning full-stack development or anyone looking for a minimal, fast note app.

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

---

### 📦 Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (Recommended: LTS version)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### 🔧 Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/Niranjan-A/quicknote.git
```

#### 2. Navigate into the Project Directory

```bash
cd quicknote
```

---

## 🧪 Environment Variables Setup

### Backend (`/backend`)

Create a `.env` file inside the `backend` folder and add the following environment variables:

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
