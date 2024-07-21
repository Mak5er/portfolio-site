<h2 align="center">
  Portfolio Website <br/>
  <a href="https://makser.pp.ua" target="_blank">makser.pp.ua</a>
</h2>
<div align="center">
  <img alt="Demo" src="https://teldrive.makser.pp.ua/api/files/b83Eto09QKDZDzem/download/portfolio-site-preview.png?hash=88633ba21744274593615c0a0819b955" style="border-radius: 15px;" />
</div>

## Built With

My personal portfolio with some of my GitHub projects and technical skills.<br>

This project was built using these technologies.

- React.js
- Node.js
- MUI5
- CSS3
- WebStorm

## Features

📖 Multi-Page Layout

🎨 Styled with React-Bootstrap and CSS with easy-to-customize colors

📱 Fully Responsive

## Getting Started

Clone down this repository. You will need `node.js` and `git` installed globally on your machine.

## 🛠 Installation and Setup Instructions

1. Installation: `npm install`

2. In the project directory, you can run: `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

## GitHub Actions

This project uses GitHub Actions to automate the build and deployment of the Docker image. The workflow builds the
Docker image and pushes it to GitHub Container Registry.

## Docker Usage

1. You can start production server using: `docker compose up -d`

2. To use your local image, update `docker-compose.yml` to:

```yaml
version: '3.9'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/app
    container_name: portfolio-site
    ports:
      - '4040:4040'
    restart: always
```

### Show your support

Give a ⭐ if you like this website!