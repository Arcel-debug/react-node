# Use an official node image as the base image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which the backend will run
EXPOSE 5000

# Command to run the app
CMD ["npm", "start"]
