const Post = (props) => {
  
  return (
    <div className="container">
      <div>
        <h3>User Name</h3>
        <p>{props.name}</p>
        <p>{props.post}</p>
      </div>
    </div>  
  )
}

export default Post