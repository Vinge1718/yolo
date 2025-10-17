FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --silent
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]
