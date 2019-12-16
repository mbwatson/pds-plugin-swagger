FROM node:10.15.2

RUN apt-get update && apt-get install nano tree -y

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Path to local installs
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# Path to global installs
ENV PATH /usr/local/node_modules/.bin:$PATH

RUN npm install -g swagger
COPY ./package*.json ./
RUN npm install -g

COPY ./ ./

CMD ["npm", "start"]