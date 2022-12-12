# Yolomy Application
## Author   :: Gilbert Bett
### Application Description
This is an ecommerce web app for both male and female.
## Requirements
Make sure that you have the following installed:
- [node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) 
- npm 
- [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) and start the mongodb service with `sudo service mongod start`

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

 ### Go ahead a nd add a product (note that the price field only takes a numeric input)


 ## Technologies used
    * BackEnd: * Nodes 
    * FontEnd:  React 
    * Database * Mongo
    * Docker containerization

 ## Using Docker Compose
 ###   Procedure.
 * Create <code> docker-compose.yml </code> file
 * cd into backend and add <code> Dockerfile </code> and add neccessary port(5000) for nodejs
 * cd into front-end and add <code> Dockerfile </code> and add neccessary port(3000) for react app
 * ensure you have installed docker compose in your system if not follow this [link](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04) for linux system.
 * run <i><code>  sudo docker-compose build </code></i> to start building
 * the run <i><code> sudo docker-compose up </code></i> to start application

## Contact Information 

For more inquiries and support reach me out on [gilbertkalo.kalo@gmail.com](gilbertkalo.kalo@gmail.com)

# Licence

Click to  [MIT License](Licence) view

 Copyright (c) 2022 | Gilbert Bett
