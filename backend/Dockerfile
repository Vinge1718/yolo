# STAGE 1: Build
FROM node:14-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

# STAGE 2: Runtime
FROM alpine:3.16.7

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY --from=build /usr/src/app /app

EXPOSE 5000

CMD ["node", "server.js"]
