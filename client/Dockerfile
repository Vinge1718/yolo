FROM node:19-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run

EXPOSE 3000

CMD [ "npm", "start" ]