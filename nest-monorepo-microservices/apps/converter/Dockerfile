FROM node:14-alpine as build
WORKDIR /app

COPY *.json ./
RUN npm install

COPY . .
RUN npm run build converter # Will create folder in ./dist/apps/converter

FROM node:14-alpine
WORKDIR /app

COPY package.json ./
RUN npm i --only=prod

COPY --from=build /app/dist/apps/converter ./dist
CMD ["node", "./dist/main.js"]
