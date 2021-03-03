FROM node:15.8.0-alpine3.12

WORKDIR /app

# Installing dependencies
RUN apk add git

# Copying source files
COPY . ./

RUN yarn install

ENV NODE_OPTIONS="--max-old-space-size=5120"
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Building app
RUN yarn build
EXPOSE 80

USER node

CMD ["yarn", "start", "-p", "80"]
