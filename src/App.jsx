import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactContainer } from './components/components';
import { Home, About, Projects, Error } from './pages/pages';

import './index.css';
import SharedMainLayout from './shared/SharedMainLayout';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedMainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={'#contact'} />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </>
);
ReactDOM.render(<App />, document.getElementById('app'));
