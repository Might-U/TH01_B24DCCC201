import { useState } from 'react';

function Post({ text, initialLikes = 0, initialDislikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <p>{text}</p>
      <div>
        <button onClick={handleLike}>👍 {likes}</button>
        <button onClick={handleDislike}>👎 {dislikes}</button>
      </div>
    </div>
  );
}

export default Post;
