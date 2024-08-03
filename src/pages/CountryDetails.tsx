'use client';

import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
import { Country } from '@/types';

const CountryDetails = ({ country }: { country: Country | string }) => {
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

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
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
              />
              <Card.Body>
                <Card.Title className="pb-3">
                  <strong>{country?.name?.common || 'No data'}</strong>
                </Card.Title>

                {countryDetails &&
                  countryDetails.length > 0 &&
                  countryDetails.map(({ label, value }) => (
                    <Card.Text key={label}>
                      <strong>{label}:</strong> {value}
                    </Card.Text>
                  ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CountryDetails;
