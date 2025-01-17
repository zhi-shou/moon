import React from 'react';
import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename="/moon">
      <Home />
    </BrowserRouter>
  );
}

export default App;
