# SuperCars Server

## Installation

### Prerequisites

- Python 3.10
- Thunder Client extension for Visual Studio Code (optional, for API testing)

## Setup Virtual Environment

Create and activate a virtual environment in the project directory:

```bash
python3 -m venv venv

source venv/bin/activate  # On Windows, use "venv\Scripts\activate"
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Run the server

Before running the server, ensure you have the required environment variables set if needed for authentication or other purposes.

See the file `.env.example` for a list of environment variables that can be set.

```bash
uvicorn app.main:app --reload
```

## API Documentation

### Swagger UI

- http://localhost:8000/docs
- http://localhost:8000/redoc

### Thunder Client

The project includes a file named `thunder-collection_supercars.json` on `/app` directory that contains Thunder Client requests. These requests are intended for testing the API in Visual Studio Code.

#### To use Thunder Client:

- Open Visual Studio Code.
- Install the Thunder Client extension.
- Open Thunder Client from the sidebar.
- Import the collection using the "Import" feature in Thunder Client and select the `thunder-collection_supercars.json` file.

## Testing the API

Once the project is running, you can use Thunder Client to send HTTP requests to the API endpoints. The collection file includes pre-configured requests for testing various API functionalities.

Ensure you have the required environment variables set if needed for authentication or other purposes.

License
This project is licensed under the terms of the [MIT license](/LICENSE).
