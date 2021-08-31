FROM node:14.15.0-alpine3.10
WORKDIR /usr/src/app
RUN apk update && \
    apk add git yarn build-base autoconf automake libtool pkgconfig nasm && \
    yarn global add gatsby-cli && \
    gatsby options set package-manager yarn && \
    yarn add gatsby-plugin-typescript typescript
EXPOSE 8000 9000 