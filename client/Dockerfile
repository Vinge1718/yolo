# Build stage - Builds React app
# Use an official Node runtime as a parent image
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN npm ci --only=production

#update browserslist db
RUN npx update-browserslist-db@latest

# Copy the rest of the application code to the container
COPY . .

# enable legacy OpenSSL for webpack
ENV NODE_OPTIONS=--openssl-legacy-provider

# ADD: Embed API URL at build time for React
ENV REACT_APP_API_URL=http://localhost:5000  

# Runs the build script (creates optimized /build folder with static JS/CSS/HTML).
RUN npm run build

# Runtime stage - Serves static files with Nginx
# Lightweight web server (~10MB) for static content—no need for Node at runtime.
FROM nginx:alpine

# Copies built assets to Nginx's html dir .
COPY --from=builder /app/build /usr/share/nginx/html

 # Optional: Custom config for SPA routing (e.g., try_files for React Router).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Documents port (Nginx default is 80, but configured to 3000).
EXPOSE 3000

# Starts Nginx in foreground.
CMD ["nginx", "-g", "daemon off;"]