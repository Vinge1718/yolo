# YOLO E-Commerce — Explanation

## Overview

This document explains the YOLO E-Commerce application (yolomy), a MERN-stack sample app composed of three microservices: frontend, backend (Node/Express) and database (MongoDB). 

The project is containerized with Docker and orchestrated using Docker Compose.

## Base Image Choice
- **_Backend_** :

    ~ used a `multi-stage build` using `node:10-alpine` building stanfe  and used `alpine:3.16.7`for runtime stage for a lightweight node environment keeping the final backend image size to **86.9MB**. The Alpine variants ensures a smaller footprint and faster building times.

    ~ Include npm for dependency installation. 

- **_Frontend_** :

    ~ I used a `multi-stage build` as well, using `node:14-slim` for the building stage and `nginx:alpine` for the runtime stage. The build image compiles the React code, and only the final static files are copied to the container. This reduces the final image size to just **54.8MB**, ensuring efficient serving of the frontend.

- **_Database_** :

    ~ Used `mongo:3.0`, which is quite small and  provides a stable and production-ready MongoDB setup. This builds a total image size of the database container to **232MB**, which is was required.
   

## Dockerfiles

Both backend and frontend Dockerfiles uses `multi-stage` builds to separate build and runtime stages for smaller and cleaner final images.

### Backend

- Used `RUN npm install --prod --omit=dev` to install only production dependencies and ommit test and test and dev dependancies if any.

- Defined `WORKDIR /usr/src/app` for project structure.

- Copied source code and launched the app with `CMD ["node", "server.js"]`.

### Frontend(Client)

- Built the app using `npm run build` in the build stage.

- Copied only the build dir to Nginx (`/usr/share/nginx/html`).

- Used `CMD ["nginx", "-g", "daemon off;"]` to keep Nginx running in the foreground

### database

- Pulls mongoDB image that will be use to create a custome database image.

## Docker Compose Networking

All microservices (frontend, backend, and database) communicate over a **custom bridge network** defined in `docker-compose.yml`.

 - backend-db-net: connects backend and database. This allows communication between services by service name,e.g., the backend connects to MongoDB via `mongodb://mongo:27017/yolo-db`.

 - frontend-backend-net: connects clinet to backend. Frontend communicate with backend which communicates with database. 
 
 - There is no direct communication of frontend and database

### Port mappings/binding:

- Frontend:`8080:80`

- Backend: `5000:5000`

- Database: `27017:27017`

## Docker Volume

### Database volume

I named database volume `mongo_data` and mounted at `/data/db` in the database container to persist product data even after container shutdown.

### Frontend volume

Named as `client-logs` and mounted at `/usr/src/app/logs` to gather logs.

### Backend volume

Named as `backend-logs` and mounted at `/usr/src/app/logs` to gather logs.

## Running and Debugging

### Running

- Running `docker-compose up --build` will successfully launch all containers.

- Visiting _`http://localhost:8080`_ loads the e-commerce web app, and adding products using the “Add Product” form will confirms backend–database connectivity.

- After restarting the containers, and still see products you added, it verifies persistent storage through the defined volume.

### Debugging

I used `docker logs container_name/container_id` to monitor output and `docker exec -it container_name/container_id sh` to inspect running containers interactively in  a shell.

## Image Tagging
All images were tagged using semantic versioning (semVer) for clarity:

```bash
pmcmuchiri/pmc-yolo-backend:v1.0.0 
pmcmuchiri/pmc-yolo-client:v1.0.0
pmcmuchiri/pmc-yolo-database:v1.0.0
```
- Images were built efficiently, resulting in small sizes (all under 400MB total)

- Tagging use `semVer` to simplify version management.

- I pushed Images to DockerHub using:(login to docker hub using `docker login` and follow instruciton to log in.)

```bash
        docker push pmcmuchiri/pmc-yolo-backend:v1.0.0
        docker push pmcmuchiri/pmc-yolo-client:v1.0.0
        docker push pmcmuchiri/pmc-yolo-database:v1.0.0
```
#### Semantic Versioning (SemVer)

The tagging convention follows `MAJOR.MINOR.PATCH`:

- `MAJOR`— Incompatible API changes (e.g., v2.0.0)

- `MINOR` — New features added in a backward-compatible manner (e.g., v1.1.0)

- `PATCH` — Bug fixes or small changes (e.g., v1.0.1)


## Quick start (local, Docker Compose)

1. Build and start all services (from the root directory):

```bash
docker-compose up --build
```

2. Run in detached mode:

```bash
docker-compose up -d --build
```

3. Stop and remove containers, networks and volumes:

```bash
docker-compose down -v
```

4. View logs:

```bash
docker-compose logs -f
```

5. to view last 50 logs

```bash
docker-compose logs -f --tail 50
```
6. verify containers are running
```bash
docker ps -a 
```
7. confirm custom networks created
```bash
docker network ls  
``` 
8. confirm volumes are persistent   
```bash
docker volume ls    
```   
9. confirm images are created

```bash
docker image ls    
```  
or 

```bash
docker images    
```  

## Image build test

Before you push to Dockerhub, build each images for test separately:

```bash
docker build -t yolo-client_test_image:v1.0.0 ./client
docker build -t yolo-backend_test_image:v1.0.0./backend
docker build -t yolo-db_test_image:v1.0.0 ./database
```

## Common troubleshooting

- Port conflicts: 
ensure ports used by services (e.g., 8080, 5000, 27017) are free.

- MongoDB authentication: 
confirm `MONGO_INITDB_ROOT_USERNAME` and `MONGO_INITDB_ROOT_PASSWORD` in the `.env` match what's referenced in the backend `MONGODB_URI`.

- MongoDB Connection Fails Inside Docker:
When starting the backend container, you may see this error in the logs:

```bash
MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
```

or 

```bash
MongoCompatibilityError: Server at pmc-yolo-database:27017 reports maximum wire version 3, but this version of the Node.js Driver requires at least 8 (MongoDB 4.2)
```

1. To fix this, Use the Docker service name as the hostname in your `.env` file and make sure both containers share the same network.

2. Version incompatibility between MongoDB and the Node.js drive: To fix this you can upgrage or downgrade mongoose.


- Persistent data: If data is unexpectedly missing, ensure volumes are configured correctly in `docker-compose.yaml`.

## Summary

The final containerized application runs successfully via Docker Compose command.

All components are properly orchestrated through custom bridge networks, with persistent data handled via Docker volumes. 

The use of lightweight base images, semantic and tagging ensures clean, efficient, and reproducible builds.

**Final Image Sizes:**

- Backend: 86.9MB  

- Frontend: 54.8MB  

- Database: 232MB  

Total combined size is under the 400MB

## Author & License

Author: [Paul Muchiri](https://github.com/pmc-muchiri)

The original project was forked from [yolo](https://github.com/Vinge1718/yolo).
