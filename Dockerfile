# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app/frontend

# Copy package.json and package-lock.json to the container
COPY frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY frontend/. .

# Build the frontend app
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
