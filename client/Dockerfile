FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

COPY . /app

RUN npm install

RUN npm run

EXPOSE 3001

CMD [ "npm", "start" ]