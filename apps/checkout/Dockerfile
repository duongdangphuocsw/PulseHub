# build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

# production stage
FROM nginx:stable-alpine as production
COPY --from=build /app/dist/checkout/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
