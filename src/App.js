import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Form from './Components/Form';


function App() {

  const [cites, setCites] = useState([])

  useEffect(() =>{
    const getCites = () => {
      fetch('http://localhost:9000/oficinas')
      .then(res => res.json())
      .then(res => setCites(res))
    }
    getCites()
  }, [])
  return (
    <Fragment>
      <Navbar title='Fiscalias de ministerio publico'/>
      {/* <Home cites={cites} /> */}
      <Form/>
    </Fragment>
  );
}

export default App;
