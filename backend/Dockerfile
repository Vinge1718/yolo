FROM node

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean

WORKDIR /backend

RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]