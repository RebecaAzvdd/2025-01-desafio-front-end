FROM node:22.13.1

RUN apt-get update && apt-get install -qq -y --no-install-recommends

ENV INSTALL_PATH /app-siapesq

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]