import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [theme, setTheme] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(theme));
  }, [theme]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    return savedMode || false;
  }

  return (
    <div className={theme ? 'dark-mode' : 'light-mode'}>
      <nav>
        <div className='toggle-container'>
          <button onClick={() => setTheme((prevMode) => !prevMode)}>
            Toggle
          </button>
        </div>
      </nav>
      <main>
        <h1>{theme ? 'Dark Mode' : 'Light Mode'}</h1>
        <h2>Push button to change theme</h2>
      </main>
    </div>
  );
}

export default App;
