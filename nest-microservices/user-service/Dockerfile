# Development
FROM node:18-alpine AS development

# Working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Start the application
CMD ["npm", "run", "start:dev"]

# Production
FROM node:18-alpine as production

WORKDIR /app

COPY package*.json .
# install only production dependencies from package-lock.json
RUN npm install

ENV NODE_ENV=production

COPY . .

# Generate Prisma Client
RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start:prod"]