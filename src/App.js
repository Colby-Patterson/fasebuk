import './App.css';
import Post from "./Post";

let users = [
  {id:1, name:"Bob", post:"This is test post 1", initialLikes: 0},
  {id:2, name:"Joe", post:"This is test post 2", initialLikes: 0},
  {id:3, name:"George", post:"This is test post 3", initialLikes: 0},
  {id:4, name:"Jane", post:"This is test post 4", initialLikes: 0},
  {id:5, name:"Joanne", post:"This is test post 5", initialLikes: 0},
  {id:6, name:"Eric", post:"This is test post 6", initialLikes: 0},
  {id:7, name:"Debra", post:"This is test post 7", initialLikes: 0},
  {id:8, name:"Scott", post:"This is test post 8", initialLikes: 0},
]

function App() {
  const renderPosts = ()=>{
    return users.map((user)=>{
      return <Post key={user.id} name={user.name} post={user.post} likes={user.initialLikes} />
    })
}
  

  return (
    <>
      <h1>Posts</h1>
      {renderPosts()}
    </>
  );
}

export default App;
