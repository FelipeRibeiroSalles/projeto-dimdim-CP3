FROM node:18

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN useradd -m devopsuser

USER devopsuser

ENV APP_ENV=production

EXPOSE 3000

CMD ["npm", "start"]
