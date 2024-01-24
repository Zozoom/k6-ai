# K6 Performance Testing Project

## Overview

This project contains a suite of performance testing scripts developed using K6. It is designed to provide a structured approach to performance testing, with scripts for different types of tests like load, stress, spike, and soak tests.

## Project Structure

- `/tests`: Contains all the K6 test scripts.
- `/config`: Includes configuration files for tests.
- `/utils`: Utility functions to support testing scripts.
- `README.md`: This file, providing documentation for the project.

## Getting Started

### Prerequisites

- K6 installed on your machine. Visit [K6 Installation Guide](https://k6.io/docs/getting-started/installation/) for instructions.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.

### Running Tests

To run a test, use the k6 command line:

```bash
k6 run tests/[test-script].js
