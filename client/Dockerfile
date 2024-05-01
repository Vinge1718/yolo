# Use the official Node.js Alpine image as the base image
FROM node:alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json file  to the working directory in the container
COPY package.json .

# Install the dependencies specified in the package.json file
RUN npm install

# Copy all the files to the working directory in the container
COPY . .

# Expose port 3000 to allow incoming connections to the container
EXPOSE 3000

# Set the command to run when the container starts
CMD ["npm", "start"]