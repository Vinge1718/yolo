base image node:13-alphine on both containers client and backend 
navigate to client  in the terminal run 
create a docker file with the following 
### touch Dockerfile 

### touch Dockerfile

### FROM node:13-alpine 

### WORKDIR /usr/src/app

### COPY package*.json ./

### COPY . .

### expose  3000

### RUN npm install

### CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]

### docker build -t ivymachogu/yolo-client:v1.1.1 .

running the container 

### docker run -p 3000:3000 ivymachogu/yolo-client:v1.1.1

incase you encounter an error  run
### docker run -  -it -p 3000:3000 ivymachogu/yolo-client:v1.1.1

navigate to backend 

create a dockerfile with the following 
### touch Dockerfile

### FROM node:13-alpine 

### WORKDIR /usr/src/app

### COPY package*.json ./

### COPY . .

### expose  3000

### RUN npm install

### CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]

creating base image  

### docker run -p 5000:5000 ivymachogu/yolo-backedn:v1.1.1 .

running the container 


### docker run  -it -p 5000:5000 ivymachogu/yolo-backend:v1.1.1

navigate to yolo create docker-composer.yaml
 add the following 

 version: '3.8'

services:
  yolo.client:
    build: ./client
    ports:
      - "3000:3000"
    networks:
      -  yolo_network

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    networks:
      - yolo_network

networks:
  yolo_network:
    driver: bridge


   *** run the command in the terminal to up the composer  
### docker compose up  --build 

incase you get the port confilicting run 
###  docker ps -a
 ### docker stop "container id "
and  then run 
### docker composer up --build 

