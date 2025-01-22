# FROM node:18-alpine 
# WORKDIR /app 
# COPY . . 
# RUN npm install 
# CMD ["node", "index.js"] 

FROM node:18-alpine 
WORKDIR /app 
COPY . . 
RUN npm install 
EXPOSE 3001 
CMD ["node", "index.js"] 