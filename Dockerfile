FROM node:16-alpine
WORKDIR /app
COPY package.json package-lock.json ./
# RUN npm ci will delete node_modules, so it has a quite annoying penalty for ci pipelines by removing the cache
RUN npm ci
COPY . .
EXPOSE 4000
CMD npm start dev