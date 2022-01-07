FROM node:14.16.1
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
ENV PORT=8080
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]