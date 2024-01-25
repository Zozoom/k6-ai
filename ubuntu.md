# First stage: Use the official Grafana k6 image
FROM grafana/k6:latest as k6stage

# Second stage: Start with the Alpine base image
FROM alpine:latest

# Install dependencies required by k6
# This might include ca-certificates, libc6-compat, or others depending on k6's requirements
RUN apk add --no-cache ca-certificates libc6-compat

# Copy the k6 binary from the first stage
COPY --from=k6stage /usr/bin/k6 /usr/bin/k6

# Set entrypoint to k6
ENTRYPOINT ["k6"]