import React from 'react';
import './App.css';

function MyButton(){
  return <button>Click me</button>;
}

function App() {
  const headerClass='heading';
  //user map
  const user = {
    name:'John',
    age:25,
    address:'USA'
  };
  return ( 
    <>
      <h1 className={headerClass}>React App</h1>
      <h2>By {user.name} </h2>
      <MyButton/>
    </>
   );
}

export default App;