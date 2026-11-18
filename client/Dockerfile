# Use an official Node runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

#To avoid the OpenSSL error
ENV NODE_OPTIONS=--openssl-legacy-provider

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
RUN npm ci --only=production

# Copy the rest of the application code to the container and build the app
COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Configure Nginx as a reverse proxy for the backend API
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port the app runs on
EXPOSE 80

# Define the command to run your app
CMD ["nginx", "-g", "daemon off;"]