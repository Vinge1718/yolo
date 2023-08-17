FROM node:16-alpine

RUN mkdir /client

WORKDIR /client

COPY package.json /client/
COPY package-lock.json /client/

RUN npm install

COPY . /client/

EXPOSE 3000

CMD [ "npm", "start" ]