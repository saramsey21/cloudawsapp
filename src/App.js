import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/signup';


function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
