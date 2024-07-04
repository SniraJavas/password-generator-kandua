#!/bin/bash

# Navigate to the deployment directory
cd $HOME/site/wwwroot

# Install Node.js packages
echo "Installing Node.js packages..."
npm install

# Build the React application
echo "Building React application..."
npm run build

# (Optional) Set environment variables
# export REACT_APP_API_URL=https://api.yourdomain.com

# (Optional) Run additional commands if needed
# echo "Running additional commands..."
