FROM node:alpine

WORKDIR /app

COPY . .


CMD ["node", "index.mjs"]

# There's no ability to create volumes in docker file
# So we need to create a volume in the docker run command
# docker run -v ${pwd}/data:/app/data nodejs-fs