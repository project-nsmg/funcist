FROM node
MAINTAINER sorpa'as plat <me@sorpaas.com>

RUN mkdir /src
WORKDIR /src

RUN npm install -g nodemon
COPY . /src

EXPOSE 8080
CMD npm install && nodemon index.js
