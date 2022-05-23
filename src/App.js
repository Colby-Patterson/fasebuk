import './App.css';
import Post from "./Post";

let users = [
  {id:1, name:"Bob", post:"Loving the weather today!", initialLikes: 0, comments: ['This is comment 1', 'This is comment 2']},
  {id:2, name:"Joe", post:"This is a much longer test post than the others.", initialLikes: 0},
  {id:3, name:"George", post:"Just joined. Who else is on here?", initialLikes: 0},
  {id:4, name:"Jane", post:"Utah Jazz FTW!", initialLikes: 0},
  {id:5, name:"Joanne", post:"Just bought a new car", initialLikes: 0},
  {id:6, name:"Eric", post:"Starting my new job today. Wish me luck!", initialLikes: 0},
  {id:7, name:"Debra", post:"What's everyone doing for Memorial Day weekend?", initialLikes: 0},
  {id:8, name:"Scott", post:"Any advice on where to find good mangoes?", initialLikes: 0},
]

function App() {
  const renderPosts = ()=>{
    return users.map((user)=>{
      return <Post key={user.id} name={user.name} post={user.post} likes={user.initialLikes} comments={user.comments} />
    })
}
  

  return (
    <>
      <h1>Fasebuk</h1>
      {renderPosts()}
    </>
  );
}

export default App;
