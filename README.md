# SuperCars System

SuperCars is a comprehensive system comprising a server and a web interface. This dynamic platform enables users to access and explore a curated list of registered supercars. Additionally, for administrators, the system provides robust tools for efficiently managing the car database.

Key Features

- Car Listing: Users can effortlessly browse through a curated list of supercars, accessing essential details and specifications.

- Administrator Access: With appropriate administrator privileges, users can log in to access advanced functionalities for managing the cars in the system.

- Efficient Management: The system provides administrators with powerful tools to efficiently manage and update car information, ensuring an up-to-date and accurate database.

## Running with Docker

The SuperCars System can be run using Docker. To do so, follow the steps below:

1. Install Docker on your machine. You can find instructions for your operating system [here](https://docs.docker.com/get-docker/).
2. Clone the repository to your local machine.
3. Navigate to the root directory of the repository.
4. Run `docker-compose build` to build the images.
5. Run `docker-compose up` to start the containers.
6. Navigate to `localhost:3000` in your browser to access the web interface.

## Running without Docker

The SuperCars System can also be run without Docker. To do so, follow the steps below:

1. Clone the repository to your local machine.
2. Follow the instructions in the README file on the server component to set up and run the server.
3. Follow the instructions in the README file on the client component to set up and run the client.
4. Navigate to `localhost:3000` in your browser to access the web interface.
5. Navigate to `localhost:8000/docs` in your browser to access the API documentation.

## Components

### [Server (Backend)](/server/README.md)

The server is the main component of the system. It is responsible for handling all the requests from the clients and responding to them accordingly. It is also responsible for handling the database and the business logic of the system.

### [Client (Frontend)](/web/README.md)

The client is the component that the users interact with. It is responsible for displaying the data to the users and sending requests to the server.

### [Utils](/utils/README.md)

The utils component of the SuperCars System consists of scripts designed to generate fake data for testing purposes on the backend. These scripts can be found in the Utils README. They include:

- generate-fake-data.js: Creates a specified quantity of fake car data.
- clear-vehicles.js: Clears the database by deleting all generated cars.

Feel free to explore each component for detailed instructions on setting up, running, and contributing to the SuperCars System. If you have any questions or would like to contribute, please refer to the individual README files for each component.
