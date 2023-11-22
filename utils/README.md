# SuperCars Generators

This Node.js project aims to assist in testing your server by generating fake data. It includes two main scripts:

- generate-fake-data.js: This script creates a specified quantity of fake car data.
- clear-vehicles.js: This script clears the database by deleting all generated cars.

## Getting Started

### Prerequisites

Before you start, ensure you have the following installed on your machine:

- Node.js (version 18.18.0): Make sure you have Node.js installed. You can download the installer from [nodejs.org](https://nodejs.org/en/download/).

### How to Execute

First initialize the server by following the instructions in the [server README](../server/README.md).

After the server is running, you can run the generator by following these steps:

1. Setup environment variables:

```bash
cp .env.example .env.local
```

2. Open the `.env.local` file and set the environment variables as needed.
   1. As the server needs authentication, you will need to use thee login route first and then provide the `BEARER_TOKEN` in the environment variables.
3. Open a terminal and navigate to the project directory.
4. Install the dependencies:

```bash
yarn install
```

5. Run the files:

```bash
node generate-fake-data.js
node clear-vehicles.js
```

Ensure you have the required environment variables set if needed for authentication or other purposes.

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
