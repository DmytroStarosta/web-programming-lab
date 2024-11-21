import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/trees';


export const getTrees = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};
