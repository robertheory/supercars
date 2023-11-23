# Use the official Python image
FROM python:3.10

# Set the working directory in the container
WORKDIR /server

# Install and upgrade pip, setuptools, wheel and uvicorn
RUN pip install --no-cache-dir --upgrade pip setuptools wheel uvicorn

# Copy the requirements file into the container
COPY . .

# Source the virtual environment and install the requirements
RUN pip install --no-cache-dir --upgrade -r /server/requirements.txt
