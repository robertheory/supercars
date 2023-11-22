import 'dotenv/config';

import { faker } from '@faker-js/faker';

const apiUrl = `${process.env.API_URL}/cars`;
const bearerToken = process.env.BEARER_TOKEN;

const generateRandomCarData = () => {
  return {
    name: faker.vehicle.model(),
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.type(),
    year: faker.number.int({ min: 1990, max: 2021 }),
    color: faker.vehicle.color(),
    image: faker.image.dataUri({
      width: 300,
      height: 300,
      color: faker.vehicle.color(),
      type: 'png',
    }),
    price: faker.number.float({ min: 10000, max: 100000 }),
  };
};

const sendRequest = async (data) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('Data sent successfully:', data);
  } catch (error) {
    console.error('Error sending data:', error.message);
  }
};

const numberOfRequests = 250;

for (let i = 0; i < numberOfRequests; i++) {
  const randomCarData = generateRandomCarData();
  sendRequest(randomCarData);
}
