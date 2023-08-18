import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const[value,setValue]=useState('');
  function changeHandler(event){
    setValue(event.target.value);
  }

  // for the every Render
  // useEffect(()=>{
  //   console.log("hi i am rendered");
  // })

  // for the frist time only
  // useEffect(()=>{
  //   console.log("Hi i am rendered");
  // },[]);


  // whenever dependencies change
  useEffect(()=>{
    console.log("Hi i am rendered");
  },[value]);

  // to handle unmounting of the component
  useEffect(()=>{
    console.log("listner is added");

    return()=>{
      console.log('listner is removed');
    }
  },[value]);


  return (
    <div className="App">
      <input onChange={changeHandler}></input>
    </div>
  );
}

export default App;
