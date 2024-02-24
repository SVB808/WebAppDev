import React from 'react';
import './App.css';
import { useState } from 'react';

function MyButton(props){
  const {count, handleClick} = props;
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

function App() {
  const headerClass='heading';
  //user map
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  const user = {
    name:'Joseph',
    age:25,
    address:'United States of America',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize:200
  };

const courses = [
  {id:1, name:'React',isElective:true},
  {id:1, name:'Angular',isElective:false},
  {id:1, name:'Vue',isElective:true}
]

  let content;
  if(user.age>=18){
    content=<MyButton count={count} handleClick={handleClick}/>;
  }
  return ( 
    <>
      <h1 className={headerClass}>React App</h1>
      <img src={user.imageUrl} alt="user" style={{width:user.imageSize, height:user.imageSize}}/>
      <h2>By {user.name} </h2>
      <MyButton count={count} handleClick={handleClick}/>
      {content}
<ul>
  {courses.map((course) => (
    <li key={course.id} style={{color:course.isElective?'blue':'green'}}>
      {course.name}
    </li>
  ))}
</ul>
    </>
   );
}

export default App;