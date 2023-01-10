# Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`
- Docker (https://docs.docker.com/desktop/install/windows-install/)

## Navigate to the Client Folder 
 `cd client`

## Run the folllowing command to install the dependencies 
 `npm install`

## Run the folllowing to start the app
 `npm start`

## Open a new terminal and run the same commands in the backend folder
 `cd ../backend`

 `npm install`

 `npm start`

## Created Dockerfile for /client application and log in to hub.docker.com docker login -u="" -p=""
   1) cd client
   2) docker build -t tomno-clinton-app .
   3) docker tag tomno-clinton-app:latest engtomno/tomno-clinton-app:latest
   4) docker push engtomno/tomno-clinton-app:latest
## Created Dockerfile for /backend application and log in to hub.docker.com docker login -u="" -p=""
   1) cd backend
   2) ddocker build -t tomno-clinton-app-backend .
   3) docker tag tomno-clinton-app-backend:latest engtomno/tomno-clinton-app-backend:latest
   4) docker push engtomno/tomno-clinton-app-backend:latest
   
   
## Created the docker-compose.yml file in the root directory which contains 3 services
   1) Service for client app hosted in 3000 port
   2) Service for backend service hosted in 5000 port
   3) Service for mongoDB which backend service will connect to and add the product information
   

Client appliction is for the Frontend part where user can add/remove/edit any Product
Backend Service is to Proceed the restAPI Calls and connect with DB and add/remove/edit any Product
MongoDB Service is the DB service where Product Data will recide

  
   

   

 
 