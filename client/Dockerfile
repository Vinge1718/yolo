FROM node
RUN rm -rf  /root/.npm \
ENV APP_HOME /usr/apps
COPY / $APP_HOME/client
EXPOSE 3000
WORKDIR $APP_HOME/client
ENTRYPOINT ["sh", "-c"]
CMD ["npm install;npm start"]