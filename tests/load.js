import http from 'k6/http';
import { sleep } from 'k6';
import { loadStages } from './k6/config/stages';

export let options = {
    stages: loadStages,
    thresholds: {
        'http_req_duration': ['p(95)<500'], // 95% of requests should be below 500ms
    },
};

export default function () {
    http.get('https://www.google.com');
    sleep(1);
}
