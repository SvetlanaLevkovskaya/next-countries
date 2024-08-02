import Countries from '@/pages/Countries';
import { fetchCountries } from '@/services/clientApi';

export default async function Home() {
  const countries = await fetchCountries();

  return <Countries countries={countries} />;
}
