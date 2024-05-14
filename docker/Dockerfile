FROM node:20.13-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY tsconfig.json .
COPY public /app/public
COPY src /app/src

RUN npm run build

FROM nginx:1.25-alpine-slim

RUN apk add --no-cache curl=8.5.0-r0

COPY --from=build /app/build /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN chown nginx:root /run && \
    chmod 0770 /run

ENTRYPOINT ["nginx", "-g", "daemon off;"]
