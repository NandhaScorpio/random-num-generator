import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function GenerateRandomNum()
{
  var [randomNum,setRandomNum] = useState(0)

  function change()
  {
    var random = Math.floor(Math.random()*10)+1
    setRandomNum(random)
    console.log(random)
  }

  return(
    <div>
      <h1>{randomNum}</h1>
      <button onClick={change}>Random Number</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GenerateRandomNum/>
);