import React from 'react';

import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        <div className='toggle-container'>
          <button>Toggle</button>
        </div>
      </nav>
      <main>
        <h1>Light Mode</h1>
        <h2>Push button to change theme</h2>
      </main>
    </div>
  );
}

export default App;
