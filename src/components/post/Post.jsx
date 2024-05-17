import { useSelector } from 'react-redux';

const Post = () => {
  const { posts } = useSelector((state) => state.postData);

  return (
    <div>
      {posts.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};

export default Post;
