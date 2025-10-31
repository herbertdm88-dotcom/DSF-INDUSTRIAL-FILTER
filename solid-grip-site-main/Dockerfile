FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npx", "serve", "dist", "-p", "3000", "-l", "0.0.0.0"]
