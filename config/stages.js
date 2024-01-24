// Load Testing Stages
export const loadStages = [
    { duration: '2m', target: 50 },  // Ramp up to 50 users over 2 minutes
    { duration: '5m', target: 50 },  // Stay at 50 users for 5 minutes
    { duration: '2m', target: 0 },   // Ramp down to 0 users over 2 minutes
];

// Stress Testing Stages
export const stressStages = [
    { duration: '2m', target: 100 }, // Ramp up to 100 users over 2 minutes
    { duration: '5m', target: 100 }, // Stay at 100 users for 5 minutes
    { duration: '2m', target: 200 }, // Ramp up to 200 users over 2 minutes
    { duration: '5m', target: 200 }, // Stay at 200 users for 5 minutes
    { duration: '2m', target: 0 },   // Ramp down to 0 users over 2 minutes
];

// Spike Testing Stages
export const spikeStages = [
    { duration: '1m', target: 50 },  // Ramp up to 50 users over 1 minute
    { duration: '1m', target: 200 }, // Spike to 200 users over 1 minute
    { duration: '2m', target: 50 },  // Drop back to 50 users over 2 minutes
    { duration: '2m', target: 0 },   // Ramp down to 0 users over 2 minutes
];

// Soak Testing Stages
export const soakStages = [
    { duration: '20m', target: 100 }, // Sustain 100 users for 20 minutes
    { duration: '10m', target: 0 },   // Ramp down to 0 users over 10 minutes
];

