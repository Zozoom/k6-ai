#!/bin/bash
kubectl delete -f k6-job.yaml
docker build -t k6-load-test:latest .
kubectl apply -f k6-job.yaml
kubectl get po