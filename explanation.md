Base images
Backend And Client Base Image
node:19-alpine - Alpine is much smaller than most distribution base images and thus leads to much slimmer images in general.

Database
mongo - The only available image for Mongo DB

Dockerfile directives

FROM	This is used to specify the parent image of our custom Docker image
WORKDIR	Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY and ADD instructions that follow it in the Dockerfile
RUN	Used to execute commands during the image build time
COPY	Copies new files or directories from and adds them to the filesystem of the container at the path
EXPOSE	Informs Docker that the container listens on the specified network ports at runtime
CMD	Used to provide this default initialization command that will be executed when a container is created from the Docker image

Docker-compose Networking
The network named bridge is the default network and provided by a bridge driver. The bridge driver provides intercontainer connectivity for all containers running on the same machine.
networks:
  tier-network:
    driver: bridge
##Running yolo-app
 After running docker-compose up, the yolo-app-microservice started and generated the below images

REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
ms-frontend   latest    0560f58bc022   14 hours ago   423MB
ms-backend    latest    a05d3cc6295d   20 hours ago   156MB
mongo         latest    9a5e0d0cf6de   4 weeks ago    646MB

##Dockerhub link
https://hub.docker.com/u/bchepngeno1
