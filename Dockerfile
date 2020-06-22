# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
ARG TODO_OAUTH_KEY
ENV REACT_APP_GG_CLIENT_ID ${TODO_OAUTH_KEY}
ARG TODO_PROTOCAL
ENV REACT_APP_BE_PROTOCAL ${TODO_PROTOCAL}
ARG TODO_BE_HOST
ENV REACT_APP_BE_HOST ${TODO_BE_HOST}
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]