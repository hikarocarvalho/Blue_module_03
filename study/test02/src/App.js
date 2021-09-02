import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = count;
  },[count]);
  
  return (
    <div>
      <p>Score: {count}</p>
      <button id="button" onClick={() => setCount(count+1)} onMouseOver={(()=>{
          const button = document.getElementById("button").style;
          button.backgroundColor = "Yellow";
          button.height = "100px";
          button.width = "100px";
          button.border = "none";
          button.marginTop =""+ (Math.random() * (400 - 1) + 1) + "px";
          button.marginLeft =""+ (Math.random() * (1200 - 1) + 1) + "px";
      })}>Click Aqui</button>
    </div>
  );
}