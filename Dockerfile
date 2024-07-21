FROM node:22-buster

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . /app

RUN npm run build

RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "build", "-l", "4040"]
