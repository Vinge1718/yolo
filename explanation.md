# Choice of Base Image
1. Client Directory

I chose node Version slim since its a light image necessary to run the npm commands and can run successfully a basic http web application.

2. Backend Directory

I chose Mongo-express latest version since the web application uses node js running npm and MongoDB for database.

# Dockerfiles Directive
## Client Image
FROM alpine:3.14 -> This shows the base image selected and the version.

WORKDIR /client -> This shows the working directory when the commands will be run.

RUN npm install -> This an instruction of installing npm dependancy necessary for running the app.

CMD [ "npm","start" ] -> This is a command to start running the npm to open the web app on broswer.

## Backend Image
FROM mongo-express:latest -> This shows the base image of the selected and the version.

WORKDIR /backend -> It is the directory where the commands are been executed.

COPY . . -> This is copying the source directory to the current destination directory.

RUN npm install -> This is a command to install npm dependancies.

CMD [ "npm","start" ] -> This is a command to run the application.

# Docker-compose Networking
This majorly set up for multiple containers to be able to communicate to each other where necessary. Necessary ports and environment are set in the docker-compose file.

# Docker-compose Volume and Usage Defination
This is meant to allocate storage of data in the containers. The advantage of it is that container can be deleted but the data may still remain and be used in future containers.

# Git Workflow Used

git clone (url repo)

git add .

git commit -m "decription in each development"

git push 