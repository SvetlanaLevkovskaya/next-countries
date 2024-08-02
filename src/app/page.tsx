import { fetchCountries } from '@/services/clientApi';
import Countries from '@/pages/Countries';

export default async function Home() {
  const countries = await fetchCountries();

  return <Countries countries={countries} />;
}
