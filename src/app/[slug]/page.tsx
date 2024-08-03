import { fetchCountry } from '@/services/clientApi';
import CountryDetails from '@/pages/CountryDetails';
import { MapProvider } from '@/lib/proveders/map-provider';

const CountryDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const country = await fetchCountry(slug);

  return (
    <MapProvider>
      <CountryDetails country={country} />
    </MapProvider>
  );
};

export default CountryDetailsPage;
