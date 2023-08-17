# Choice of image
Used alpine since the container environment has a small footprint and One of the requirement was to have smaller images.

# Dockerfile Directives
A dockerfile usually start with with a FROM directive to set base image for the subsequent instructions

# Docker-compose Networking
Port allocation done as per the requirements on the application

# Docker-compose Volume
Defined the Volumes for the apllication

# Git Workflow
Have included all the commits while adding the dockerfiles and docker-compose

# Successful Running Application
The backend application runs successful and connects to the database. However the client exits with 0 error while running the development server, we can leverage it with stdin_open: true on the docker-compose to keep the terminal open.

# Docker image Tag
The images will have Versions i.e V1.0.0

# Docker images on the dockerhub
awuorm/yolo_app
awuorm/yolo_backend
