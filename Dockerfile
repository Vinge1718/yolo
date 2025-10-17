# Stage 1 - Build the app
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package files from the correct folder
COPY client/package*.json ./
RUN npm install --silent

# Copy rest of yolo code
COPY client ./

EXPOSE 3000
CMD ["npm", "start"]
