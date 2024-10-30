FROM node:14-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

EXPOSE ${WEB_PORT}

CMD ["node", "server.js"]
