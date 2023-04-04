FROM node:16-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci
COPY . .
RUN npm run lint & npm run test
RUN npm run build

# create fresh image
FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci --production
COPY --from=BUILD_IMAGE /app/dist ./dist

EXPOSE 8080

CMD [ "npm", "run", "start" ]