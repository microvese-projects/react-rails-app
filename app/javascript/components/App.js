import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react';
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App