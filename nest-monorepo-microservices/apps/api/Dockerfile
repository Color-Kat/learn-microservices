FROM node:16-alpine as build

WORKDIR /app

COPY *.json ./

RUN npm install

COPY . .

RUN npm run build api # Will create folder in ./dist/apps/api

FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN npm install --only=prod

COPY --from=build /app/dist/apps/api ./dist

CMD ["node", "./dist/main.js"]