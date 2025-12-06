# Use an official Node runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

#Add multi-stage build
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app .

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run your app
CMD ["node", "server.js"]