import { useDispatch, useSelector } from 'react-redux';
import { clearUsers, fetchUsers } from '../redux/actions/userActions';

const Users = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users.loading);
  const users = useSelector((state) => state.users.userList);
  return (
    <div>
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users </button>
      <button onClick={() => dispatch(clearUsers())}>Clear Users </button>
      {loading && <h2>Loding ...</h2>}
      {!users ? (
        <div>
          <h2>No users to show</h2>
        </div>
      ) : (
        users.map((user) => (
          <li>
            {user.id} : {user.name}
          </li>
        ))
      )}
    </div>
  );
};

export default Users;

// here we have used useDispatch and useSelector hooks instead of high-order connect method provided by react-redux
