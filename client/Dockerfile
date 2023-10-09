#This Dockerfile conducts a multistage build to ensure the final image size is as small as possible

FROM node:14-slim AS build

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .


FROM alpine:3.16.7

WORKDIR /app

RUN apk update && apk add npm

COPY --from=build /usr/src/app /app

EXPOSE 3000

CMD [ "npm", "start" ]