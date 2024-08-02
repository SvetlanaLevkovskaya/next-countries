import { fetchCountry } from '@/services/clientApi';
import CountryDetails from '@/pages/CountryDetails';

const CountryDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const country = await fetchCountry(slug);

  return <CountryDetails country={country} />;
};

export default CountryDetailsPage;
