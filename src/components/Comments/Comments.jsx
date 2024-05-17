import { useSelector } from 'react-redux';

const Comments= () => {
  const { comm } = useSelector((state) => state.commData);

  return (
    <div>
      {comm.map((el) => (
        <div key={el.id}>{el.body}</div>
      ))}
    </div>
  );
};

export default Comments;
