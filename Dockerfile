# Step 1: Use an official Nginx image as the base image
FROM nginx:alpine

# Step 2: Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Step 3: Copy the current directory (your app) to Nginx's HTML folder
COPY . /usr/share/nginx/html

# Step 4: Expose port 80 (default Nginx port)
EXPOSE 80

# Step 5: Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
