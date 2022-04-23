import React from 'react';
import { Home, N5, N4, Result, NotFound } from './pages'
import { Navbar, Footer } from './components';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/N5' element={<N5 />}></Route>
        <Route path='/N4' element={<N4 />}></Route>
        <Route path='/result' element={<Result />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
