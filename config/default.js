// Default options for K6 tests
export const defaultOptions = {
    // VUs and duration for a simple test
    vus: 10,
    duration: '1m',

    // Thresholds for performance metrics
    thresholds: {
        http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
        http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
        'http_req_waiting': ['p(95)<200'] // 95% of requests should wait less than 200ms
    },

    // HTTP-specific options
    httpDebug: 'full', // Set to 'full' for verbose HTTP logging

    // Other configurations
    noConnectionReuse: false,
    userAgent: 'K6 Performance Testing (https://k6.io/)',

    // Tags and extra options
    tags: {
        project: 'K6 Performance Testing',
        env: 'staging'
    }
};

// You can define other configurations as needed
