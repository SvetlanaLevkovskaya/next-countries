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
    { label: 'Столица', value: country?.capital?.[0] || 'Нет данных' },
    { label: 'Регион', value: country?.region || 'Нет данных' },
    { label: 'Подрегион', value: country?.subregion || 'Нет данных' },
    {
      label: 'Население',
      value: country?.population.toLocaleString() || 'Нет данных',
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
            <Card className="flex-row  shadow">
              <Image
                src={country.flags.svg || ''}
                alt={`Флаг ${country?.name.common || ''}`}
                className="m-3 rounded border object-fit-cover"
                width={250}
                height={250}
              />
              <Card.Body>
                <Card.Title className="pb-3">
                  <strong>{country?.name?.common || 'Нет данных'}</strong>
                </Card.Title>

                {countryDetails &&
                  countryDetails.length > 0 &&
                  countryDetails.map(({ label, value }, index) => (
                    <Card.Text key={index}>
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
