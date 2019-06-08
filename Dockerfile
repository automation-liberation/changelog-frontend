FROM node:10.16.0-slim as build

RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
COPY . . 
COPY webpack.* ./

RUN npm install --silent
RUN npm install react-scripts -g --silent
RUN npm run build

FROM nginx:1.17-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]