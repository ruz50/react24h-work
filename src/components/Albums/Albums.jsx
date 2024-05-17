import { useSelector } from 'react-redux';

const Albums= () => {
  const {album} = useSelector((state) => state.albumData);

  return (
    <div>
      { album.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};

export default Albums;
