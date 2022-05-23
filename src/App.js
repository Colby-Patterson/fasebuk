import './App.css';
import Post from "./Post";

let users = [
  {id:1, name:"Bob", post:"This is test post 1"},
  {id:2, name:"Joe", post:"This is test post 2"},
  {id:3, name:"George", post:"This is test post 3"},
]

function App() {
  const renderPosts = ()=>{
    return users.map((user)=>{
      return <Post key={user.id} name={user.name} post={user.post} />
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
