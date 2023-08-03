FROM node:18

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
COPY src /app/src

RUN npm ci
RUN npm run build
CMD ["node", "./dist/server.js"]
