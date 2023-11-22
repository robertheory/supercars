# SuperCars Web

## Installation

### Prerequisites

Before you start, ensure you have the following installed on your machine:

- Node.js: Make sure you have Node.js installed. You can download the installer from [nodejs.org](https://nodejs.org/en/download/).
- Yarn: Yarn is a package manager for your code. You can download the installer from [yarnpkg.com](https://yarnpkg.com/getting-started/install).

### How to Execute

First initialize the server by following the instructions in the [server README](../server/README.md).

After the server is running, you can run the web app by following these steps:

1. Setup environment variables:

```bash
cp .env.example .env.local
```

2. Open the `.env.local` file and set the environment variables as needed.
3. Open a terminal and navigate to the project directory.
4. Install the dependencies:

```bash
yarn install
```

5. Run the development server:

```bash
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Ensure you have the required environment variables set if needed for authentication or other purposes.

License
This project is licensed under the terms of the [MIT license](/LICENSE).
