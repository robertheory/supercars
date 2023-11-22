# Use the official Python image
FROM python:3.10

# Set the working directory in the container
WORKDIR /server

# Install and upgrade pip, setuptools, wheel and uvicorn
# RUN pip install --no-cache-dir --upgrade pip setuptools wheel uvicorn

# Copy the requirements file into the container at /app
COPY ./requirements.txt /server/requirements.txt

# Source the virtual environment and install the requirements
RUN pip install --no-cache-dir --upgrade -r /server/requirements.txt

# Copy the current directory contents into the container at /app
COPY . /server

# Expose the port the app runs on
EXPOSE 8000
