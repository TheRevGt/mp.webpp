import React, {Fragment, useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from "./Components/layouts/app.js"
import Home from "./Components/page/Home.js"
import Register from "./Components/page/Form.js"
import AdminHome from "./Components/page/Fiscalis.js"
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/registro' element={<Register/>} />
          <Route path='/fiscalias' element={<AdminHome/>} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
