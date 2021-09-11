FROM node:14.15.0-alpine3.10

ENV APP_PATH /miyazaki_office_app

RUN mkdir $APP_PATH
WORKDIR $APP_PATH

RUN apk update && \
    apk add git yarn build-base autoconf automake libtool pkgconfig nasm && \
    yarn global add gatsby-cli && \
    gatsby options set package-manager yarn && \
    yarn add gatsby-plugin-typescript typescript 

COPY . $APP_PATH
COPY ./package.json $DIRPATH/package.json
COPY ./yarn.lock $DIRPATH/yarn.lock
RUN yarn install

EXPOSE 8000