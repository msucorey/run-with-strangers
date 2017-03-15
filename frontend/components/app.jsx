import React from 'react';
import { Link } from 'react-router';
import HomeScrollContainer from './home_scroll/home_scroll_container';

const App = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Run With Strangers</h1>
      </Link>
      <HomeScrollContainer />
    </header>
    {children}
  </div>
);

export default App;
