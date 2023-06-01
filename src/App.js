import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Form from './Components/Form';
import Fiscalis from './Components/Fiscalis';


function App() {
  return (
    <Fragment>
      <Navbar title='Fiscalias de ministerio publico'/>
      {/* <Form/> */}
      <Home/>
      {/* <Fiscalis/> */}
    </Fragment>
  );
}

export default App;
