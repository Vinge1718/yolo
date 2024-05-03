FROM node:13-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

expose  5000

RUN npm install

CMD ["npm", "start"]

