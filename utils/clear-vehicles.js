import 'dotenv/config';

const apiUrl = `${process.env.API_URL}/cars`;
const bearerToken = process.env.BEARER_TOKEN;

// incrementally delete all cars starting from ID 1 until get a 404

let hasMoreCars = true;

const sendRequest = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log('Data sent successfully:', id);
  } catch (error) {
    console.error('Error sending data:', error.message);

    hasMoreCars = false;
  }
};

const deleteCars = async () => {
  let id = 1;

  while (hasMoreCars) {
    await sendRequest(id);
    id++;
  }
};

deleteCars();
