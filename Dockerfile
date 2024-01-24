# Use the official K6 image as a parent image
FROM grafana/k6:latest

# Set the working directory
WORKDIR /k6

# Copy the test scripts and config into the container
COPY ./tests /k6/tests
COPY ./config /k6/config
COPY ./utils /k6/utils
COPY ./entry-test.js /k6/entry-test.js

# Set the default command to run when starting the container
CMD ["run", "/k6/entry-test.js"] # Replace with your default test script