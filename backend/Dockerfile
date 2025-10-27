# Stage 1 Bulding stages 
FROM node:10-alpine AS build

LABEL author="Paul Muchiri"

ARG buildversion
# Environment variables
ENV port=5000
ENV build=$buildversion
ENV NODE_ENV=production

# Working path for the hosting app
WORKDIR /usr/src/app

# Copy dependency files
COPY package*.json ./
# Install prod dependencies only to reduce image size omitting dev dependencies
RUN npm install --prod --omit=dev
# RUN npm ci --omit=dev



# Copy entire source code from the host to the working directory of container
COPY . .

RUN npm install mongoose@5.13.15
# stage 2 - Running stage
FROM alpine:3.16.7 AS prod
# Working path for container
WORKDIR /usr/src/app


# not caching the package index to keep image size small
RUN apk update && apk add --update nodejs && apk add --no-cache nodejs npm

# copy files from build stage to working dir of container
COPY --from=build /usr/src/app ./

EXPOSE $port

RUN echo "Build version: $build"
# Start the server
CMD ["node", "server.js"]