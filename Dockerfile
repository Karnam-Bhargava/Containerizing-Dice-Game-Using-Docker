# An official Nginx image as the base image
FROM nginx:alpine

# Removing default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copying the current directory to Nginx's HTML folder
COPY . /usr/share/nginx/html

# Expose port 80 (default Nginx port)
EXPOSE 80

# To Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
