# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY client/package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY client/ ./

# Build the React app (if you have a build script)
RUN npm run build

# Expose port 3000 for the React app
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "start" ]
