🛍️ YOLO Web Application — README

YOLO is a simple full-stack product management web application built using:

Frontend: React

Backend: Node.js + Express

Database: MongoDB

The entire stack is containerized and deployed using Docker Compose.

🚀 Features

REST API for managing products

React frontend for viewing and adding products

Persistent MongoDB storage

Multi-container microservice setup with Docker Compose

🏗️ Project Structure
yolo/
├── backend/               # Node.js + Express API
│   ├── Dockerfile
│   └── server.js
├── client/                # React frontend
│   ├── Dockerfile
│   └── src/
├── docker-compose.yaml    # Multi-service orchestration
├── explanation.md         # Technical documentation
└── README.md              # User guide

⚙️ Prerequisites

Install:

Docker

Docker Compose

🧩 Setup and Run Instructions
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/yolo.git
cd yolo

2️⃣ Build Containers
docker compose build

3️⃣ Start the Application
docker compose up

4️⃣ Access the App

Frontend → http://localhost:3000

Backend API → http://localhost:5000/api/products

MongoDB → internal hostname mongodb://app-ip-mongo:27017/yolomy

🧪 Testing the API

List all products:

curl http://localhost:5000/api/products


Add a new product:

curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Sample","price":20,"quantity":2,"category":"test"}'

🐳 Docker Hub Images

Backend: waitheramacharia/yolo-backend

Frontend: waitheramacharia/yolo-client

📸 Screenshot

(Insert screenshot of the running app or containers here)

🧑‍💻 Author

Waithera Macharia

GitHub: @waitheramacharia

Docker Hub: waitheramacharia

🏁 Summary

This project demonstrates containerized deployment of a full-stack MERN application.
With a single command — docker compose up — the frontend, backend, and database start and interact seamlessly.

# Overview
This project involved the containerization and deployment of a full-stack yolo application using Docker.


# Requirements
Install the docker engine here:
- [Docker](https://docs.docker.com/engine/install/) 

## How to launch the application 


![Alt text](image.png)

## How to run the app
Use vagrant up --provison command
