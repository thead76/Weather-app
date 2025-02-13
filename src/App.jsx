import { useState } from 'react'
import './App.css'
import WeatherData from './components/WeatherData';

function App() {
  
  const [counter,setCounter]= useState(0);
  const [searchQuery,setsearchQuery]= useState("");


  const  clicked=() =>{
    setCounter(counter+1);
    console.log(counter);
  }

  const handleChange=(event)=>{
    setsearchQuery(event.target.value);
    console.log(searchQuery);
  }

  const clearSearch=()=>{
    setsearchQuery("");
  }


  return (
    <>
      <WeatherData />
    </>
  )
}

export default App;
