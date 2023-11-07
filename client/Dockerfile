FROM node:16-alpine

LABEL maintainer="Rajab <abdulhakim.rajab@studentmoringaschool.com>"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
