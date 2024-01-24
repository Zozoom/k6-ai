docker build -t k6-load-test:latest .

kubectl apply -f deployment.yaml

kubectl get deployments

kubectl logs <pod-name>

kubectl scale deployment k6-load-test --replicas=<number-of-replicas>

kubectl delete -f deployment.yaml

alias kgetpo='kubectl get po'

________________________________

kubectl create configmap k6-test-script --from-file=./tests/load.js

kubectl apply -f k6-job.yaml

kubectl get jobs

kubectl logs <pod-name>

kubectl delete job k6-test-job

k6 run -o experimental-prometheus-rw=http://localhost:9090/api/v1/write ./entry-test.js