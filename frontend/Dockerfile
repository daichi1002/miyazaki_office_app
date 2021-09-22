FROM node:14.15.0-alpine3.10

ENV APP_PATH /miyazaki_office_app
RUN mkdir $APP_PATH
WORKDIR $APP_PATH

COPY package.json yarn.lock $APP_PATH/
RUN yarn

COPY . $APP_PATH/