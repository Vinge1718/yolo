#   Overview
This file outlines a step-by-step procedure of how this
application was containerized using Docker 

#   Requirements
Make sure that you have the following installed:
- [Docker](https://docs.docker.com/engine/install/) 

#   Containerize the client/frontend
- Navigate to the client directory

  `cd client`

- Create a Dockerfile

  `touch Dockerfile`

- Configure the Dockerfile using a multi-stage build
  to ensure that the resultant image is lightweight

```
FROM node:14-slim AS build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .


FROM alpine:3.16.7

WORKDIR /app

RUN apk update && apk add npm

COPY --from=build /usr/src/app /app

EXPOSE 3000

CMD [ "npm", "start" ]
```


- Create a .dockerignore file

  `touch .dockerignore`

- In the .dockerignore file, specify which files 
  to exclude when building the Docker image

```
Dockerfile
/node_modules
.dockerignore
.gitignore
README.md
```

#   Containerize the backend
- Navigate to the backend directory

  `cd backend`

- Create a Dockerfile
- 
  `touch Dockerfile`

- Configure the Dockerfile using a multi-stage build
  to ensure that the resultant image is lightweight

```
FROM node:14-slim AS build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .


FROM alpine:3.16.7

WORKDIR /app

RUN apk update && apk add --update nodejs

COPY --from=build /usr/src/app /app

EXPOSE 5000

CMD [ "node", "server.js" ]
```


- Create a .dockerignore file

  `touch .dockerignore`

- In the .dockerignore file, specify which files 
  to exclude when building the Docker image

```
Dockerfile
/node_modules
.dockerignore
.gitignore
```

#   Configure the Microservice Architecture using Docker Compose
- Navigate to the root directory of the repository
  and create a docker-compose.yml file

  `touch docker-compose.yml`

- Configure the docker-compose.yml file as follows

```
version: "3.8"

services:

  #Creates the frontend microservice
  ecom-ip-client:
    image: mrmiano/ecom-client-image:v1.0.0
    container_name: ecom-client
    stdin_open: true
    tty: true
    ports:
      - "3000:3000"
    networks:
      - ecom-net

  #Creates the backend microservice
  ecom-ip-backend:
    image: mrmiano/ecom-backend-image:v1.0.0
    container_name: ecom-backend
    restart: always
    ports:
      - "5000:5000"
    depends_on: 
      - ecom-ip-mongo
    networks:
      - ecom-net

  #Creates the database microservice
  ecom-ip-mongo:
    image: mongo
    container_name: ecom-mongo
    ports:
      - "27017:27017"
    networks:
      - ecom-net
    volumes:
      - type: volume
        source: ecom-mongo-data
        target: /data/db

#Creates the network infrastructure necessary for the containers to communicate with each other
networks:
  ecom-net:
    name: ecom-net
    driver: bridge
    attachable: true
    ipam:
      config:
        - subnet: 10.3.0.0/28
          ip_range: 10.3.0.0/28

#Creates a Docker volume that persists all the data stored in the database
volumes:
  ecom-mongo-data:
    driver: local
```

#   Ensure connectivity between the client and backend containers
- Navigate to the package.json file in the client folder
  and change the "proxy" from "localhost" to the name of
  your backend container. In my case it was as follows

  `"proxy": "http://ecom-backend:5000",`

#   Ensure connectivity between the backend and the database containers
- Navigate to the server.js file in the backend folder
  and change the "mongodb_url" to point to your mongodb
  container instead of "localhost". In my case it was as follows

  `let mongodb_url = 'mongodb://ecom-mongo/';`

#   Build and start your microservices using Docker Compose Up
- Navigate to the root folder of the repository (where your
  docker-compose.yml file is located) and initialize your
  microservice application using the following command

  `sudo docker compose up`
  
#   Stop and spin down the application using Docker Compose Down
- In the same terminal where you launched your microservices,
  press "ctrl+c" to stop the application and terminate it using
  following command

  `sudo docker compose down`