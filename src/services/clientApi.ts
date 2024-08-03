import axios from 'axios';
import { Country } from '@/types';

export async function fetchCountries(): Promise<Country[] | string> {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return 'Failed to load the list of countries. Please try again later.';
  }
}

export async function fetchCountry(slug: string): Promise<Country | string> {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${slug}`,
    );
    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
      return 'Country not found. Please try a different query.';
    }
  } catch (error) {
    console.error(`Error fetching country with slug ${slug}:`, error);
    return 'Failed to load country data. Please try again later.';
  }
}
