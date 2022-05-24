import './App.css';
import Post from "./Post";

let users = [
  {id:1, name:"Bob", post:"Loving the weather today!", initialLikes: 0, comments: ['This is comment 1', 'This is comment 2', 'This is comment 3']},
  {id:2, name:"Joe", post:"This is a much longer test post than the others.", initialLikes: 0, comments: []},
  {id:3, name:"George", post:"Just joined. Who else is on here?", initialLikes: 0, comments: []},
  {id:4, name:"Jane", post:"Utah Jazz FTW!", initialLikes: 0, comments: []},
  {id:5, name:"Joanne", post:"Just bought a new car", initialLikes: 0, comments: []},
  {id:6, name:"Eric", post:"Starting my new job today. Wish me luck!", initialLikes: 0, comments: []},
  {id:7, name:"Debra", post:"What's everyone doing for Memorial Day weekend?", initialLikes: 0, comments: []},
  {id:8, name:"Scott", post:"Any advice on where to find good mangoes?", initialLikes: 0, comments: []},
  {id:9, name:"Carl", post:"This is another test post", initialLikes: 0, comments: []},
  {id:10, name:"Daniele", post:"This is another test post", initialLikes: 0, comments: []},
  {id:11, name:"Arnold", post:"This is another test post", initialLikes: 0, comments: []},
  {id:12, name:"Anne", post:"This is another test post", initialLikes: 0, comments: []}
]

function App() {
  const renderPosts = ()=>{
    return users.map((user)=>{
      return <Post key={user.id} name={user.name} post={user.post} likes={user.initialLikes} comments={user.comments} />
    })
}
  

  return (
    <>
      <h1>My App</h1>
      {renderPosts()}
    </>
  );
}

export default App;
