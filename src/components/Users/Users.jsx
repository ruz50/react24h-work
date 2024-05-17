import { useSelector } from 'react-redux';

const Users = () => {
  const { users } = useSelector((state) => state.usersData);

  return (
    <div>
      {users.map((el) => (
        <div key={el.id}>{el.name}</div>
      ))}
    </div>
  );
};

export default Users;
