import './App.css';
import React, { useState } from 'react' ;

function App() {

  const [count, setCount] = useState(0);

  return (

    <div className="App">

      <div id="container">

     <h1>{count}</h1>

     <button onClick={ () => setCount( count + 1 ) } >Increase</button>

     <button onClick={ () => setCount( count - 1 ) } >Decrease</button>

     </div>
     
    </div>

    );

}

export default App;
