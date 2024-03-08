FROM 758880085468.dkr.ecr.us-east-1.amazonaws.com/ecr-public/docker/library/node:18.18.2-alpine

WORKDIR /app

ARG ENV

COPY package.json yarn.lock ./
RUN apk update \
    && apk upgrade \
    && yarn install

COPY . .

ENV NODE_ENV production
ENV ENV $ENV

ARG BRANCH=none
ARG COMMIT=none
LABEL branch=$BRANCH commit=$COMMIT env=$ENV

EXPOSE 3000

CMD [ "yarn", "storybook" ]
