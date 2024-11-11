import { Row, Card, Col } from 'react-bootstrap';
import { useGetUsersQuery } from '../slices/usersApiSlice';
import { useGetOrdersQuery } from '../slices/ordersApiSlice';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const Cards = () => {
  const { data: users } = useGetUsersQuery();
  const { data: products } = useGetProductsQuery();
  const { data: orders } = useGetOrdersQuery();

  const totalSale = orders
    ? orders.reduce((sum, order) => sum + order.totalPrice, 0)
    : 0;
  return (
    <Row>
      <Col>
        <Card
          style={{
            color: '#233142',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage:
                'linear-gradient(90deg, #4f9da6,#74b6be, #a7f1e3)',
            }}
          >
            Products ({products ? products.length : 0})
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            color: '#233142',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage:
                'linear-gradient(90deg, #ff5959,#ec7063, #ffb3b3)',
            }}
          >
            Users ({users ? users.length : 0})
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            color: '#233142',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage:
                'linear-gradient(90deg, #f5ab36,  #facf5a, #fce29c)',
            }}
          >
            Orders ({orders ? orders.length : 0})
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            color: '#233142',
            textAlign: 'center',
            fontSize: '1.5rem',
            border: 'none',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Card.Body
            style={{
              backgroundImage:
                'linear-gradient(90deg, #3498db,  #52a7e0, #a8d3f0)',
            }}
          >
            Total sales: <small>${totalSale.toFixed(0)}</small>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default Cards;
