import { Row, Card, Col } from 'react-bootstrap';

const Cards = () => {
  return (
    <Row>
      <Col>
        <Card
          style={{
            color: '#ecf0f1',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage: 'linear-gradient(300deg, #4f9da6, #a7f1e3)',
            }}
          >
            Products
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            color: '#ecf0f1',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage: 'linear-gradient(300deg, #facf5a, #4f9da6)',
            }}
          >
            Users
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            color: '#ecf0f1',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage: 'linear-gradient(300deg, #ff5959, #facf5a)',
            }}
          >
            Orders
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Cards;
