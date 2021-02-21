import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import React from 'react';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
    {!user ? (
      <Login />
      ) : (
        <Login>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </Login>
    )}
    </div>
  );
}

export default App;
