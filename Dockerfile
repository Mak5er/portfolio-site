FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . /app

RUN yarn build

RUN yarn global add serve

ENTRYPOINT ["serve", "-s", "build", "-l", "4040"]
