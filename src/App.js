import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Component/Nav';
import Routes from './Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;


