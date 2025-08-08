# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Build the Next.js application
RUN npm run build

# Set environment variables
ENV NODE_ENV production

# Expose the application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]