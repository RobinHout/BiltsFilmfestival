# Step 1: Install dependencies and build the app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Run the app using a lightweight image
FROM node:18-alpine

WORKDIR /app

# Copy built files and node_modules from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

# Expose port
EXPOSE 8080

# Start Next.js app
CMD ["npm", "start"]
