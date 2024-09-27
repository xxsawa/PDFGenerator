# Use official Node.js image as base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app runs on
ENV PORT=4201

# Run the application
CMD ["node", "src/index.js"]
