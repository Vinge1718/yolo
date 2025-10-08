# Stage 1: Build React app
FROM node:14-alpine AS build

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy rest of the source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:1.25-alpine

# Copy compiled build from previous stage
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port Nginx runs on
EXPOSE 3000

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
