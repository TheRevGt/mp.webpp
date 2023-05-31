import React, {Fragment} from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'


function App() {
  return (
    <Fragment>
      <Navbar title='Fiscalias de ministerio publico'/>
      <Home />
    </Fragment>
  );
}

export default App;
