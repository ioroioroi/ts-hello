FROM node:13.8.0-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm @vue/cli && \
    npm install -g typescript
