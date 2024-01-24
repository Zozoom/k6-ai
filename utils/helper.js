// Utility functions for K6 performance tests

// Function to generate random data (e.g., usernames, emails)
export function randomData(prefix, length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = prefix;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Custom logging function
export function logMessage(message, level = 'INFO') {
    console.log(`${level}: ${message}`);
}

// Function to check the response status and log details
export function checkResponseStatus(response, expectedStatus) {
    const result = response.status === expectedStatus;
    if (!result) {
        logMessage(`Expected status ${expectedStatus}, but got ${response.status}`, 'ERROR');
    }
    return result;
}

// Function to simulate wait or delay (useful in user scenarios)
export function customSleep(duration) {
    console.log(`Sleeping for ${duration} seconds...`);
    sleep(duration);
}

// Function to generate a unique email address
export function generateUniqueEmail(domain = 'example.com') {
    const timestamp = new Date().getTime();
    return `testuser${timestamp}@${domain}`;
}

// More utility functions can be added as per the test requirements
