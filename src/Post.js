import React, { useState } from "react";
const Post = (props) => {
  let [likes, setLikes] = useState(props.initialLikes || 0);
  const like = () => {
    setLikes(likes + 1)
  };

  return (
    <div className="container">
      <div>
        <strong><p>{props.name}</p></strong>
        <i><p>{props.post}</p></i>
        <p>Likes: {likes}</p>
        <button onClick={like}>Like</button>
      </div>
    </div>  
  )
}

export default Post