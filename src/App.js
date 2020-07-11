import React from 'react';
import './App.css';
import Header from './Components/Navbar';
import Layout from './Components/News-list/Index';

function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Layout />
      </div>
    </React.Fragment>
  );
}

export default App;
