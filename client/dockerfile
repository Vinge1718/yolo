FROM node:13-alpine 

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

expose  3000

RUN npm install

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--port", "3000"]

