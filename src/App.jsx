import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router';
import {Navbar, Footer} from './components';
import {Home, About, Projects, Error} from './pages'

import './index.css';

const App = () => (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='error' element={<Error/>}/>
  </Routes>
   <Footer/>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
