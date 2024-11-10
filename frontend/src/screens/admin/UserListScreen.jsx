import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes, FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetUsersQuery } from '../../slices/usersApiSlice';
import { MdArrowBack } from 'react-icons/md';

const UserListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const deleteHandler = (id) => {
    console.log('delete', id);
  };
  return (
    <>
      <h1>Users</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: '#46c9b0' }} />
                  ) : (
                    <FaTimes style={{ color: '#ff5959' }} />
                  )}
                </td>

                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm text-info'>
                      <FaEdit />
                    </Button>
                  </LinkContainer>

                  <Button
                    variant='light'
                    className='btn-sm ms-2'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <FaTrash className='text-danger' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <LinkContainer to='/admin/dashboard'>
        <Button>
          <MdArrowBack /> Back
        </Button>
      </LinkContainer>
    </>
  );
};

export default UserListScreen;
