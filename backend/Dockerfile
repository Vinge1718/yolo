FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY  package*.json ./


RUN npm install

COPY . ./app

EXPOSE 6000

CMD [ "npm", "run", "start" ]