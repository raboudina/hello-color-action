FROM node:slim

# set directory "cd "
WORKDIR .

# install npm dependencies
COPY package.json package.json
RUN npm install

# copy code
COPY server.js server.js

# the program to run
ENTRYPOINT [ "npm", "start" ]