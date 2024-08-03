'use client';

import Link from 'next/link';
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Country } from '@/types';
import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Countries = ({ countries }: { countries: Country[] | string }) => {
  const [visibleCount, setVisibleCount] = useState(30);

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 300,
  });

  const loadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 12);
  }, []);

  useEffect(() => {
    if (inView && visibleCount < (countries as Country[]).length) {
      loadMore();
    }
  }, [inView, loadMore, visibleCount, countries]);

  if (typeof countries === 'string') {
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Alert variant="danger">{countries}</Alert>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row>
        {countries?.slice(0, visibleCount).map((country) => (
          <Col key={country.cca3} xs={12} md={6} lg={4} className="mb-4">
            <Card className="shadow h-100">
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Card.Title>{country.name.common}</Card.Title>
                <Link
                  href={`/${country.name.common}`}
                  className="btn btn-warning btn-sm text-white mt-auto"
                >
                  Details
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {visibleCount < countries?.length && (
        <Row className="justify-content-center mt-4 overflow-hidden">
          <Col xs="auto">
            <div ref={ref as (node: HTMLDivElement | null) => void}>
              <Spinner animation="border" variant="secondary" />
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Countries;
