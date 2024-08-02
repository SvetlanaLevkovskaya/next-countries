import axios from 'axios';
import { Country } from '@/types';

export async function fetchCountries(): Promise<Country[] | string> {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    return 'Не удалось загрузить список стран. Попробуйте позже.';
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
      return 'Страна не найдена. Попробуйте другой запрос.';
    }
  } catch (error) {
    console.error(`Error fetching country with slug ${slug}:`, error);
    return 'Не удалось загрузить данные о стране. Попробуйте позже.';
  }
}
