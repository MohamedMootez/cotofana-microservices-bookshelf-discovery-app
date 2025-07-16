
# 📚 Cotofana – Visual Book Discovery & Organization App

**Cotofana** is a Pinterest-inspired web application built for book lovers to visually discover, save, and organize books. Users can create themed “book boards,” pin their favorite titles, and explore collections from others. Built using the MERN stack and microservices, Cotofana combines clean UI with a scalable backend design.

---

## 🏗️ Architecture Overview

* **Frontend** – Monolithic React app
* **API Gateway (Proxy)** – Handles routing and communication between frontend and microservices
* **Microservices (Backend)**:

  * `User Service` – Handles authentication and user data
  * `Book Service` – Manages book-related data
  * `Board Service` – Handles creation and organization of book boards

All services communicate via HTTP using REST APIs and are designed to run independently.

---

## 🔧 Tech Stack

* **Frontend:** React.js, Axios, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (each service can have its own DB or shared cluster)
* **Auth:** JWT-based authentication
* **Architecture:** Microservices behind an API proxy

---

## 🚀 Features

* 🔐 User authentication & registration
* 📚 Pin books with metadata and cover images
* 🗂️ Create and organize books into boards
* 🔍 Browse and discover pinned books
* 📡 Scalable backend with microservice separation

---

## 📁 Project Structure

```plaintext
cotofana/
│
├── client/               # React frontend
├── gateway/              # API Gateway / Proxy server
├── services/
│   ├── user-service/     # Handles users & auth
│   ├── book-service/     # Manages books
│   └── board-service/    # Manages boards
└── README.md
```

---

## ⚙️ Running the App

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/cotofana.git
   cd cotofana
   ```

2. **Install dependencies**
   Run `npm install` inside each service and the `client` folder.

3. **Start services**
   You can run each service separately or use a process manager like `concurrently` or `Docker Compose` (if configured).

4. **Start the proxy (gateway)**
   The gateway will route frontend requests to the appropriate backend service.

5. **Start the frontend**

   ```bash
   cd client
   npm start
   ```

---

## 📌 Future Improvements

* Add Docker support for containerized deployment
* Implement CI/CD pipeline
* Add real-time features with WebSockets
* Improve search and recommendation system

---

## 🪪 License

MIT License. See `LICENSE` file for details.
