import { useState } from 'react'
import './App.css'

function MyButton(){

  const [count , setCount] = useState(0); 

  function handleClick(){
    setCount(count + 1);
  }
  
  return (
    <div>
    <button onClick = {handleClick}>
    Clicked {count} times
    </button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyButton />
    <MyButton />
    <div>hello world</div>
    </>
  )
}

export default App
