"use client";

import { Button, Col, Container, Row, Table, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
          >
            <i className="fa fa-calendar text-muted"></i>
            <span className="text-muted">Hoje</span>
          </div>
          <h1 className="text-danger fw-bold">Home</h1>
          <Button variant="primary" className="mt-5 ">
            Click Me
          </Button>
        </Col>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
