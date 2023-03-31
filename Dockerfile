FROM node

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean

WORKDIR /client

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]