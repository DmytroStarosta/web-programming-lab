import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/trees';

export const getTrees = async (filters) => {
  if (typeof filters !== 'object' || filters === null) {
    throw new Error("Filters must be a valid object");
  }

  const params = new URLSearchParams();
  if (filters.material) params.append('material', filters.material);
  if (filters.color) params.append('color', filters.color);
  if (filters.priceMin !== undefined && filters.priceMin !== '') params.append('priceMin', filters.priceMin);
  if (filters.priceMax !== undefined && filters.priceMax !== '') {
    const sanitizedPriceMax = filters.priceMax.replace(/[^0-9.]/g, '');
    params.append('priceMax', sanitizedPriceMax);
  }
  if (filters.search) params.append('search', filters.search);

  const url = `${API_BASE_URL}?${params.toString()}`;
  console.log("Generated URL: ", url);

  const response = await axios.get(url);
  console.log("API Response: ", response.data);
  return response.data;
};



