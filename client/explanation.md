# Explanation for Containerization IP

## 1) Choice of base image
- Backend & Client: `node:18-alpine` — small, stable, minimal layers.
- Database: `mongo:4.2` — selected for compatibility with VM CPU (no AVX requirement).

## 2) Dockerfile directives
- `FROM`, `WORKDIR`, `COPY package*.json`, `RUN npm ci`, `COPY . .`, `EXPOSE`, `CMD`.
- Multi-layer order to leverage build cache and reduce final image size.

## 3) Docker Compose networking
- Custom bridge network `app-net` defined and used by all services.
- Services refer to each other by service name (e.g., backend uses `mongodb://mongo:27017/yolomy`).
- Host port mappings: frontend 3000, backend 5000, mongo 27017.

## 4) Volumes
- Named volume `mongo-data` mounted at `/data/db` to persist products.

## 5) Git workflow
- Use feature branches and descriptive commits; sample commit messages listed in repo.
- Tag images using semver (e.g., `1.0.0`).

## Debugging & Good practices
- Logs: `docker compose logs <service>`, `docker logs <container>`.
- Use `sleep` in backend start to give DB time to init.
- Avoid `latest` only tags; push semver tags to DockerHub.
# Explanation for Containerization IP

## 1) Choice of base image
- Backend & Client: `node:18-alpine` — small, stable, minimal layers.
- Database: `mongo:4.2` — selected for compatibility with VM CPU (no AVX requirement).

## 2) Dockerfile directives
- `FROM`, `WORKDIR`, `COPY package*.json`, `RUN npm ci`, `COPY . .`, `EXPOSE`, `CMD`.
- Multi-layer order to leverage build cache and reduce final image size.

## 3) Docker Compose networking
- Custom bridge network `app-net` defined and used by all services.
- Services refer to each other by service name (e.g., backend uses `mongodb://mongo:27017/yolomy`).
- Host port mappings: frontend 3000, backend 5000, mongo 27017.

## 4) Volumes
- Named volume `mongo-data` mounted at `/data/db` to persist products.

## 5) Git workflow
- Use feature branches and descriptive commits; sample commit messages listed in repo.
- Tag images using semver (e.g., `1.0.0`).

## Debugging & Good practices
- Logs: `docker compose logs <service>`, `docker logs <container>`.
- Use `sleep` in backend start to give DB time to init.
- Avoid `latest` only tags; push semver tags to DockerHub.
