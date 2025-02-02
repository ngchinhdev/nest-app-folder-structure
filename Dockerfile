# Development stage
FROM node:20-alpine AS development
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci -f
COPY --chown=node:node . .
USER node

# Build stage
FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
RUN npm ci -f --only=production && npm cache clean --force
USER node

# Production stage
FROM node:20-alpine AS production
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
CMD [ "node", "dist/main.js" ]


