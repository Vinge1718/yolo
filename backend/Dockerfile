FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY  package*.json /app


COPY . /app

RUN npm install 

EXPOSE 6000

CMD ["node", "server.js"]