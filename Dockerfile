FROM node:10.13-alpine
# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
COPY . .

# Build for production.


# Install `serve` to run the application.


# Set the command to start the node server.
CMD npm start

# Tell Docker about the port we'll run on.
EXPOSE 80
