import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Packages.css';

const Packages = () => {
  return (
    <Container className="packages-container">
      <Row>
        <Col md={4}>
          <Card className="package-card">
            <Card.Body>
              <Card.Title>Monthly Package</Card.Title>
              <Card.Text>
                49$ <br></br> Excluding taxes
              </Card.Text>
              <Button variant="primary">Select</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="package-card">
            <Card.Body>
              <Card.Title>Half Yearly Package</Card.Title>
              <Card.Text>
                199$ <br></br> Excluding taxes
              </Card.Text>
              <Button variant="primary">Select</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="package-card">
            <Card.Body>
              <Card.Title>Yearly Package</Card.Title>
              <Card.Text>
                350$ <br></br> Excluding taxes
              </Card.Text>
              <Button variant="primary">Select</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Packages;
