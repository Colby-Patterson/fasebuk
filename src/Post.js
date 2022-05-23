import React, { useState } from "react";
const Post = (props) => {
  let [showComments, setShowComments] = useState(false);
  let [likes, setLikes] = useState(props.initialLikes || 0);
  const like = () => {
    setLikes(likes + 1)
  };

  return (
    <div className="container">
      <div>
        <div className="userName">
          <strong><p>{props.name}</p></strong>
        </div>
        <p>{props.post}</p>
        <p className="inline">Likes: {likes}</p>
        <button className="likeButton" onClick={like}>Like</button>
        <div className="commentDiv">
          <button className="commentButton"
            onClick={() => {
              setShowComments(!showComments);
            }}
          >
            {showComments ? 'Hide Comments':'Show Comments'}
            </button>
            {showComments && <p>{props.comments}</p>}
        </div>
      </div>
    </div>  
  )
}

export default Post