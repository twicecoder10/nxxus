#!/bin/bash

echo "========================================"
echo "  Starting NXXIM Email API Server"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
fi

echo "Starting server..."
echo ""
npm start

