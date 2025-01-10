# Use a specific Node.js version instead of 'latest' for better reproducibility
# Alpine-based images are much smaller and generally more secure
FROM node:18-alpine

# Add a non-root user for better security
# The node user is already available in the node image
USER node

# Create and set working directory with proper permissions
WORKDIR /home/node/app

# Copy package files with explicit owner
# We copy these first to leverage Docker's cache layers
COPY --chown=node:node package*.json ./

# Install dependencies
# Use 'npm ci' instead of 'npm install' for more reliable builds
# Use --production flag to skip dev dependencies if you're not using them in the build
RUN npm ci

# Copy the rest of the application code
# The --chown ensures proper file ownership
COPY --chown=node:node . .

# Build the application
# Running this as a separate step helps with layer caching
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Start the application
CMD ["node", "build"]