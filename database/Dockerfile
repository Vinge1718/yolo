# MongoDB base image
FROM mongo:3.0
LABEL author="Paul Muchiri"
ARG buildversion
ENV port=27017
ENV build=$buildversion
ENV NODE_ENV=production

EXPOSE ${port}

RUN echo "Build version: ${build}"
CMD ["mongod"]
