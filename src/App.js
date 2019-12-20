import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className='App'>
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <main>
          <h1>{darkMode ? 'Dark Theme' : 'Light Theme'}</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
