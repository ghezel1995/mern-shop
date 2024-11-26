FROM node:21.7.3-alpine3.20 

WORKDIR /app/

# Copy only the main package.json for the root dependencies
COPY ./package*.json ./

# Install root dependencies
RUN npm install

# Change to the frontend directory
WORKDIR /app/frontend

# Copy only the frontend package.json
COPY ./frontend/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the project files
WORKDIR /app/
COPY . .

# Build the frontend
RUN npm run build --prefix frontend

EXPOSE 8000
EXPOSE 3000

CMD ["npm", "run", "dev"]
