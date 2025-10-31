FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g http-server
EXPOSE 3000
CMD ["http-server", "dist", "-p", "3000", "-a", "0.0.0.0"]
