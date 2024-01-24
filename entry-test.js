import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    vus: 10, // Number of virtual users
    duration: '5s', // Duration of the test
};

export default function () {
    let response = http.get('https://www.google.com');

    // Check if the response status was 200 (OK)
    check(response, { 'status was 200': (r) => r.status == 200 });
    sleep(1); // Wait for 1 second between requests
}
