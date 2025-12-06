# === Build stage ===
FROM node:14-slim AS build

LABEL author="Paul Muchiri"

ARG buildversion

# Evironment variables
ENV port=80
ENV build=$buildversion
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --prod --omit=dev 
# RUN npm ci --omit=dev

COPY . .

# Build 
RUN npm run build

# === Runtime stage ===
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/src/app

# reduce image size by copying only necessary files
# COPY --from=build /usr/src/app/package*.json ./
# COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/build /usr/share/nginx/html

EXPOSE $port

RUN echo "Build version: $build"

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
