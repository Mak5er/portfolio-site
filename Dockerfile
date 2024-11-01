FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app

RUN npm run build

RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "build", "-l", "4040"]
