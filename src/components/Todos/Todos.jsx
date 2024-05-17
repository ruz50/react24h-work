import { useSelector } from 'react-redux';

const Todos = () => {
  const { todos } = useSelector((state) => state.todosData);

  return (
    <div>
      {todos.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};

export default Todos;
