import './App.css';
import Feed from './Feed';
import Header from './Header';
import React from 'react';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
