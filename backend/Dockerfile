FROM node:16-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npm run
CMD ["node", "server.js"]