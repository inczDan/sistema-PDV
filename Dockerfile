FROM node:hydrogen-alpine3.17

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "nodemon", "./src/index.js" ]