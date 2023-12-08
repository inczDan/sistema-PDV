FROM node:hydrogen-alpine3.17

WORKDIR /app

COPY ./package*.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]