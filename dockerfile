
# Stage 1

FROM node:10-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/job /usr/share/nginx/html



# FROM node:latest as build
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# EXPOSE 4200 49153
# CMD npm run start


# # ts===> js ====>nodeJS
# ## use official nodejs image from docker hub
# FROM node:latest as build

# #set the working dir D:/PracCode/EdAngMarB2Proj/app
# WORKDIR /usr/local/app 
# #copy entire source code D:/PracCode/EdAngMarB2Proj/app
# COPY ./ /usr/local/app 
# COPY package.json package-lock.json ./

# #install all the dependencies
# RUN NPM install

# # to GENERATE the build

# RUN NPM RUN build 

# # TO Run this application we need server tomcat/nginx server
# # for nodejs NGINX server is prefered

# FROM nginx:latest

# # where we can get our build for our application?
# # build will be in dist folder 
# #D:/PracCode/EdAngMarB2Proj/app/dist/client /usr/share/nginx/html

# COPY --from=build /usr/local/app/dist/client  /usr/share/nginx/html

# #expose port 80
# EXPOSE 80

# #image: to build the images we have to fire command docker build
# # run below in command prompt or powershell of vs
# #docker build -t client-image:latest .



