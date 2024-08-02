'use client';

import Link from 'next/link';
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Country } from '@/types';
import { useCallback, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Countries = ({ countries }: { countries: Country[] | string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [visibleCount, setVisibleCount] = useState(21);

  const { ref: inViewRef } = useInView({
    threshold: 0,
    delay: 1000,
    onChange: (inView) => {
      if (inView) {
        loadMore();
      }
    },
  });

  const setRefs = (node: HTMLDivElement) => {
    ref.current = node;
    inViewRef(node);
  };

  const loadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 12);
  }, []);

  if (typeof countries === 'string') {
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Alert variant="danger">{countries}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <Row>
        {countries &&
          countries.length > 0 &&
          countries.slice(0, visibleCount).map((country, index) => (
            <>
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>{country.name.common}</Card.Title>
                    <Link
                      href={`/${country.name.common}`}
                      className="btn btn-warning btn-sm"
                    >
                      Подробнее
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              {index === visibleCount - 1 && (
                <div
                  ref={setRefs}
                  className="d-flex justify-content-center mt-4"
                >
                  <Spinner
                    animation="border"
                    color="gray"
                    variant="secondary"
                  />
                </div>
              )}
            </>
          ))}
      </Row>
    </Container>
  );
};

export default Countries;
