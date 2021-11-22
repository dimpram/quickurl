FROM node:16-alpine
WORKDIR /usr/src/app
COPY ./package.json ./
RUN npm install
COPY . . 
RUN chmod -R 777 /usr/src/app/node_modules
EXPOSE 3000
CMD [ "npm", "start" ]