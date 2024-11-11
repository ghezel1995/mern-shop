import React from 'react'
import { useGetUsersQuery } from '../slices/usersApiSlice'
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import userProfile from '../assets/user-profile.png'

const UsersPreview = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();
    
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message> {error}</Message>
      ) : (
        <ListGroup>
          {users.map((user) => (
            <ListGroup.Item key={user._id}>
              <Row>
                <Col md={4}>
                  <Image
                    src={userProfile}
                    alt={user.name}
                    fluid
                    roundedCircle
                  />
                </Col>
                <Col md={8} className='p-0'>
                  <strong>{user.name}</strong>
                  <div>
                    {user.isAdmin ? (
                      <small className='bg-success text-light px-1 m-2 rounded'>
                        Is Admin
                      </small>
                    ) : (
                      <small className='bg-warning text-light px-1 m-2 rounded'>
                        Is not Admin
                      </small>
                    )}
                  </div>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default UsersPreview