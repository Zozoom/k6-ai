# Use Ubuntu as the base image
FROM ubuntu:latest

# Set a working directory
WORKDIR /usr/src/app

# Update and install necessary packages (gnupg for handling keys)
RUN apt-get update && apt-get install -y gnupg2 curl

# Import the public key for k6
RUN gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69

# Add the k6 repository
RUN echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list

# Install k6
RUN apt-get update && apt-get install -y k6

# Optionally copy your test scripts into the container
# COPY loadtest.js ./

# Command to run when the container starts
# You can replace this with your k6 command or use sleep for an idle container
CMD ["sleep", "infinity"]