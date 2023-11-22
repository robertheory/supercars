import { Car } from '@/intefaces';

const API_URL = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;

export const listCars = async (): Promise<Car[]> => {
  const URI = `${API_URL}/cars`;

  const response = await fetch(URI, {
    method: 'GET',
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
      tags: ['cars-list'],
    },
  });

  const cars = (await response.json()) as Car[];

  return cars;
};

export const getCar = async (id: string): Promise<Car> => {
  const response = await fetch(`${API_URL}/cars/${id}`, {
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
      tags: [`car-${id}-details`],
    },
  });
  const car = (await response.json()) as Car;
  return car;
};

export const createCar = async (car: Omit<Car, 'id'>): Promise<Car> => {
  const response = await fetch(`${API_URL}/cars`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: JSON.stringify(car),
  });
  const newCar = (await response.json()) as Car;
  return newCar;
};

export const updateCar = async (car: Car, token: string): Promise<Car> => {
  const URI = `${API_URL}/cars/${car.id}`;

  const response = await fetch(URI, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(car),
  });

  const updatedCar = (await response.json()) as Car;

  return updatedCar;
};

export const deleteCar = async (id: string, token: string): Promise<void> => {
  const URI = `${API_URL}/cars/${id}`;

  await fetch(URI, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
