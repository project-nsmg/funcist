FROM node
MAINTAINER sorpa'as plat <me@sorpaas.com>

RUN mkdir /src
WORKDIR /src

COPY . /src

EXPOSE 8080
CMD npm install && node index.js
