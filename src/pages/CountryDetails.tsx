'use client';

import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { Country } from '@/types';
import { MapComponent } from '@/components/Map';

const CountryDetails = ({ country }: { country: Country | string }) => {
  const defaultMapCenter = { lat: 53, lng: 28 };
  const mapCenter =
    typeof country !== 'string' && country?.latlng?.length === 2
      ? { lat: country.latlng[0], lng: country.latlng[1] }
      : defaultMapCenter;

  if (typeof country === 'string') {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <Alert variant="danger">{country}</Alert>
      </Container>
    );
  }

  const countryDetails = [
    { label: 'Capital', value: country?.capital?.[0] || 'No data' },
    { label: 'Region', value: country?.region || 'No data' },
    { label: 'Subregion', value: country?.subregion || 'No data' },
    {
      label: 'Population',
      value:
        country?.population &&
        (country.population.toLocaleString() || 'No data'),
    },
  ];

  console.log(mapCenter);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-4 min-vh-100">
      {country && (
        <Row className="justify-content-center ">
          <Col>
            <Card className="flex-column shadow flex-md-row px-3">
              <Image
                src={country.flags.svg || 'No data'}
                alt={`Флаг ${country?.name?.common || 'No data'}`}
                className="m-3 rounded border object-fit-cover mx-auto"
                width={250}
                height={250}
                priority
              />
              <Card.Body>
                <Card.Title className="pb-3">
                  <strong>{country?.name?.common || 'No data'}</strong>
                </Card.Title>

                {countryDetails.map(({ label, value }) => (
                  <Card.Text key={label}>
                    <strong>{label}:</strong> {value}
                  </Card.Text>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      <MapComponent mapCenter={mapCenter} />
    </Container>
  );
};

export default CountryDetails;
