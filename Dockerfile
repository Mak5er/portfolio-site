FROM alpine:3.20

ENV NODE_VERSION 22.4.1

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . /app

RUN npm run build

RUN npm install -g serve

ENTRYPOINT ["serve", "-s", "build", "-l", "4040"]
