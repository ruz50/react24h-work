import { useSelector } from 'react-redux';
import './Photo.css'


const Photos= () => {
  const { photo } = useSelector((state) => state.photoData);

  return (
    <div>
      {photo.map((el) => (
        <img key={el.id} src={el.url}/>
      ))}
    </div>
  );
};

export default Photos;
