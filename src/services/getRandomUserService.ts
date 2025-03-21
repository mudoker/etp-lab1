import axios from 'axios';

export const getRandomUser = async () => {
  try {
    const payload = await axios.get('https://randomuser.me/api/?results=20');
    return payload.data;
  } catch {
    console.log('Error fetching data: ');
  }
};
