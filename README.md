# Overview
This project involves the containerization and deployment of a full-stack yolo application using Docker.
The process starts with installing Docker, as it's essential for all subsequent steps.


# Requirements
Before starting the containerization, you need to install Docker. Docker consists of three main components: Docker Engine (the core runtime for building and running containers), Docker CLI (the command-line interface for interacting with Docker), and Docker Compose (a tool for defining and running multi-container applications, now integrated as a CLI plugin).

To install:
- [Docker](https://docs.docker.com/engine/install/) 
- Download Docker Desktop from https://www.docker.com/products/docker-desktop (includes Engine, CLI, and Compose plugin) for Windows/Mac.
- For Ubuntu/Linux: Run `sudo apt update && sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin`.
- Verify installation: `docker --version` (checks Engine/CLI) and `docker compose version` (checks Compose).

Screenshot of Docker compose installation verification:
<img src="docker-install-verification-screenshot.png" alt="docker-installation-sucess">
<img src="docker-install-verification-screenshot2.png" 

- Start Docker service: On Linux, `sudo systemctl start docker`.

This setup ensures you have a complete environment for building and orchestrating containers.


# How to launch the application 
## Forking and Cloning the Repository
After installing Docker, fork the original repo to create your own copy for modifications. Forking allows independent work without affecting the source.

- Go to `https://github.com/Vinge1718/yolo` and click "Fork".
- Clone your fork: `git clone https://github.com/YOUR_USERNAME/yolo.git` (replace YOUR_USERNAME).
- Navigate: `cd yolo`.

Screenshot of fork confirmation: ![fork-screenshot.png](fork-screenshot.png)  
Screenshot of clone and branch: ![clone-branch-screenshot.png](clone-branch-screenshot.png)

- open the root directory in code editor like vscode
Screenshot of open vscode: ![clone-branch-screenshot.png](clone-branch-screenshot.png)

## Building Images with Docker Compose
From vscode click on terminal and chose new terminal
In the new terminal;
Run `docker compose build`—builds images from Dockerfiles in contexts (./client, ./backend). It tags them (e.g., majangajohn/john-yolo-client:v1.0.0). 

Screenshot of build output: ![build-output-screenshot.png](build-output-screenshot.png)

To check images: `docker images` (lists with sizes/tags). 

Screenshot: ![docker-images-screenshot.png](docker-images-screenshot.png)

## Running Containers with Docker Compose Up
Run `docker compose up -d`—starts containers in detached mode (-d). 
Pulls mongo if needed, creates network/volume, starts services in order (depends_on). 

Screenshot of up output: ![up-output-screenshot.png](up-output-screenshot.png)

List running: `docker ps` (shows ports, names). 

Screenshot: ![docker-ps-screenshot.png](docker-ps-screenshot.png)

## Volumes and Networks: Listing and Inspecting
Networks enable comms (same network for hostname resolution). 
List: `docker network ls`. 
Inspect: `docker network inspect yolo-net` (IPs, containers). 
We use same network for backend to reach mongo via 'app-ip-mongo'. 

Screenshot: ![network-inspect-screenshot.png](network-inspect-screenshot.png)

Volumes persist data. List: `docker volume ls`. 
Inspect: `docker volume inspect app-mongo-data` (mountpoint: /var/lib/docker/volumes/app-mongo-data/_data). 

Screenshot: ![volume-inspect-screenshot.png](volume-inspect-screenshot.png)

## Testing the Application and Persistence
Access frontend: Open browser to http://localhost:3000. Add product (e.g., name: "Test Shirt", price: 19.99, quantity: 10, description: "Test shirt").
 See listing. 

 Screenshot of adding: ![add-product-screenshot.png](add-product-screenshot.png). 
 
 Screenshot of list: ![product-list-screenshot.png](product-list-screenshot.png)

## checking for data persistence
Run `docker compose down`—stops/removes containers (but not volumes). 

Screenshot: ![down-output-screenshot.png](down-output-screenshot.png)

Run `docker compose up -d` again. 
Access browser, previous product persists. 
Add another; it saves. 
Persistence via volume (data in /data/db survives container removal). 

Screenshot of persisted product: ![persistence-screenshot.png](persistence-screenshot.png)

## Pushing Images to Docker Hub
- Create an account on docker hub (`https://hub.docker.com/`)
- From the vscode terminal, run:
Login: `docker login` (prompts for username/password). 
Verifies credentials. 

Screenshot: ![docker-login-screenshot.png](docker-login-screenshot.png)

- After successful verification back in the terminal in vs code run;
Push: `docker push majangajohn/john-yolo-client:v1.0.0` and same for backend,
`docker push majangajohn/john-yolo-backend:v1.0.0` (replace docker_hub_YOUR_USERNAME and containers name)

- Use semver tags (majangajohn/john-yolo-backend:v1.0.0) for versioning. Custom container names (john-yolo-backend) for easy `docker ps`. .dockerignore excluded junk. Multi-stage builds for slim images.

Screenshot of push: ![push-output-screenshot.png](push-output-screenshot.png)

On Docker Hub: 
See versions/sizes. 
My Dockerfiles use multi-stage, --only=production, Alpine to keep slim (e.g., discard devDeps). 

Screenshot of Hub: ![dockerhub-screenshot.png](dockerhub-screenshot.png)

Link to Docker Hub: https://hub.docker.com/u/majangajohn

# Modifying to Pull from Docker Hub Instead of Building Locally
- After you have pushed your image to docker hub, you can use remote images from docker hub instead of local ones
- To use remote images: Remove `build:` sections in docker-compose.yml, keep `image:`. It pulls from Hub.

Example modified yaml:
```
services:
  john-yolo-client:
    image: majangajohn/john-yolo-client:v1.0.0  # Pulls from Hub
    # No build:
    # ... rest

    john-yolo-backend:
    image: majangajohn/john-yolo-backend:v1.0.0  # Pulls from Hub
    # No build:
    # ... rest
```

Run `docker compose up -d`, pulls it not local. 

Screenshot of pull: ![pull-output-screenshot.png](pull-output-screenshot.png)


- Custom names (e.g., john-yolo-backend) aid tracking (`docker ps`). Change to your preference (e.g., my-backend) in yaml—still identifiable. Update tags/images accordingly. 

Screenshot of custom names in ps: ![custom-names-screenshot.png](custom-names-screenshot.png)