FROM node:14.7.0-alpine3.12

# Set working directory
WORKDIR /home/node/app

# Install git - required to install some packages
RUN apk update && apk add git

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./

# Install dependencies
RUN npm install --production

# Remove git
RUN apk del git

# Copy required files
COPY ./.next ./.next
COPY ./public ./public

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node
