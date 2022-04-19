# Choice of Base Image
1. Client Directory
I chose Alpine Version 3:14 since its a light image and can run successfully a basic http web application.

2. Backend Directory
I chose Mongo-express latest version since the web application uses MongoDB for database.

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
This majorly set up for multiple containers to be able to communicate to each other where necessary.

# Docker-compose Volume and Usage Defination


# Git Workflow Used

git clone (url repo)
git add .
git commit -m "decription in each development"
git push 