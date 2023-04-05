FROM node:16-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
COPY . .
RUN npm run lint & npm run test
RUN npm run build


FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --production
COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/www ./www

EXPOSE 8080

CMD [ "node", "www/index.js" ]