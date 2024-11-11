import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi2';
import { AiOutlineProduct } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cards from '../../components/Cards';
import chartSample from '../../assets/data-chart.png';
import UsersPreview from '../../components/UsersPreview';

const AdminScreen = () => {

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
          <Row className='mt-3'>
            <Col md={9}>
              <Image src={chartSample} fluid rounded />
            </Col>
            <Col md={3}><UsersPreview /></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;
