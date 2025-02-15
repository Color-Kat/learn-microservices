FROM node:16-alpine as node

# React app dependencies
WORKDIR /app/apps/app
COPY ./apps/app/package.json ./package.json
RUN npm install

# Monorepo (contracts) dependencies
WORKDIR /app
COPY . .
RUN npm install

# Build react app
WORKDIR /app/apps/app
ARG env=prod
RUN PUBLIC_URL=http://127.0.0.1:3001 npm run build

# Serve static build files
FROM nginx:alpine
COPY --from=node /app/apps/app/build /usr/share/nginx/html
COPY ./apps/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
