# Explanation of Docker Setup and Architecture

## 1. Overview
This document explains how the YOLO web application was containerized and deployed using Docker.  
The project consists of **three microservices**:

1. **Frontend** – a React application.
2. **Backend** – a Node.js + Express API.
3. **Database** – MongoDB.

All services run in containers and communicate through a Docker bridge network.

---

## 2. Base Images and Justification

### **Frontend (client)**
- **Base image:** `node:14-alpine` for building → `nginx:1.25-alpine` for serving.
- **Why:**  
  - The Node Alpine image is lightweight and efficient for building React apps.  
  - Nginx is used for fast, production-grade static file hosting.  
  - Multi-stage builds minimize image size.

### **Backend (server)**
- **Base image:** `node:14-alpine` for building → `alpine:3.16.7` for running.  
- **Why:**  
  - Node 14 is stable and supports all required libraries.  
  - Using Alpine in the runtime stage ensures a small and secure final image.  
  - Multi-stage builds separate dependencies from the runtime environment.

### **Database**
- **Base image:** `mongo` (official image).  
- **Why:**  
  - Provides a ready-to-use MongoDB server optimized for Docker.  
  - Persistent storage is handled through volumes.

---

## 3. Networking
A user-defined bridge network (`app-net`) allows inter-container communication.  
All services connect via container names instead of IPs.

Example:
- The backend connects to MongoDB using the hostname `app-ip-mongo`, which resolves automatically within the network.

**Network configuration snippet:**
```yaml
networks:
  app-net:
    driver: bridge
    attachable: true

4. Volumes

A named volume (app-mongo-data) stores MongoDB data persistently.
Even if the container stops or rebuilds, data remains available.

Volume configuration snippet:

volumes:
  app-mongo-data:
    driver: local

5. Image Tagging and Versioning

Images are tagged for easy version control and pushing to Docker Hub.

Examples:

waitheramacharia/yolo-client:v1.0.0

waitheramacharia/yolo-backend:v1.0.0

Using semantic versioning (v1.0.0) helps track future updates.

6. Docker Compose

The docker-compose.yaml file automates building and running all services together.

Commands used:

docker compose build
docker compose up


Compose ensures that the backend waits for the database, and the frontend waits for the backend.

7. Multi-Stage Builds

Both frontend and backend Dockerfiles use multi-stage builds:

Stage 1: Build (Node)

Stage 2: Runtime (Alpine/Nginx)

This reduces image size and improves security by excluding unnecessary build tools.

8. Testing and Verification

After running docker compose up, the following endpoints can be tested:

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/products

MongoDB: Connected internally via the Docker network.

Test data can be added with:

curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Product",
    "description": "Docker Test Product",
    "price": 10.99,
    "quantity": 5,
    "category": "demo"
  }'

9. Docker Hub

Both images were pushed to Docker Hub:

Frontend: https://hub.docker.com/r/waitheramacharia/yolo-client

Backend: https://hub.docker.com/r/waitheramacharia/yolo-backend

10. Challenges and Solutions
Challenge	Solution
Port conflicts during build	Stopped old containers before rebuild (docker compose down)
npm ci failing	Replaced with npm install --production
Database not connecting	Used correct internal hostname (app-ip-mongo) instead of localhost
11. Conclusion

This Docker setup provides an efficient, reproducible, and portable environment for the YOLO application.
Using Docker Compose, the full stack (frontend, backend, and database) runs seamlessly across environments with minimal configuration.


---

## 🧾 **`README.md` (for users — how to run the app)**

```markdown
# 🛍️ YOLO Web Application

YOLO is a simple full-stack web app built with:
- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MongoDB  
Containerized and deployed using **Docker Compose**.

---

## 🚀 Features
- REST API for managing products.
- React frontend for viewing and adding products.
- Persistent MongoDB storage.
- Fully containerized microservices setup.

---

## 🏗️ Project Structure


yolo/
├── backend/ # Node.js Express API
│ ├── Dockerfile
│ └── server.js
├── client/ # React frontend
│ ├── Dockerfile
│ └── src/
├── docker-compose.yaml # Multi-service orchestration
├── explanation.md # Technical report (for grading)
└── README.md # User guide


---

## ⚙️ Prerequisites
- Docker  
- Docker Compose  

---

## 🧩 Setup and Run Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<yourusername>/yolo.git
cd yolo

2. Build Containers
docker compose build

3. Start the Application
docker compose up

4. Access the App

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/products

MongoDB: runs internally at mongodb://app-ip-mongo:27017

🧪 Testing the API

You can test using curl:

curl -X GET http://localhost:5000/api/products


Or add a product:

curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Sample","price":20,"quantity":2,"category":"test"}'

🐳 Docker Hub Images

Backend: waitheramacharia/yolo-backend

Frontend: waitheramacharia/yolo-client

📸 Screenshot

(Include a screenshot showing your running containers or app UI here.)

🧑‍💻 Author

Waithera Macharia