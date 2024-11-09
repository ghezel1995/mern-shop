import { useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  ListGroup,
  Card,
} from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi2';
import { AiOutlineProduct } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';

const cards = [
  {
    name: 'Products',
    color: '#4f9da6',
  },
  {
    name: 'Users',
    color: '#facf5a',
  },
  {
    name: 'Orders',
    color: '#ff5959',
  },
];

const AdminScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <ListGroup>
            <h3>Admin Dashboard</h3>
            <ListGroup.Item>
              <Link to='/' className='text-decoration-none'>
                <IoHomeOutline /> Home
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/admin/productlist' className='text-decoration-none'>
                <AiOutlineProduct /> Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/admin/userlist' className='text-decoration-none'>
                <HiOutlineUsers /> Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to='/admin/orderlist' className='text-decoration-none'>
                <BsCart3 /> Orders
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;
