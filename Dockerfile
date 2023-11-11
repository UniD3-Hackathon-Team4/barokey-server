FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -D

COPY . .
RUN npx tsc

ENV PORT=3000
EXPOSE 3000
ENTRYPOINT ["node", "dist/server.js"]
