# Use an official Node runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

#Add multi-stage build
FROM node:18-alpine

WORKDIR /app

COPY --from=build /usr/src/app /app

# Expose the port the app runs on
EXPOSE 5000


ENV MONGODB_URI=mongodb://mongo:27017/yolomy

# Define the command to run your app
CMD ["node", "server.js"]