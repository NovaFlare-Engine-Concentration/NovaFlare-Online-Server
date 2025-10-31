FROM node:latest

WORKDIR /usr/src/app

RUN npm config set package-lock true

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 2567

CMD [ "npm", "start" ]