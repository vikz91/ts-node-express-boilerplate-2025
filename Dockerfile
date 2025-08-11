# Multi stage nodejs 22 docker build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist .

EXPOSE 3000

CMD ["yarn", "start"]