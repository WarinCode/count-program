import React from 'react';

// style
import './style/App.css';

// lib
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/remixicon/fonts/remixicon.css'

// install libraries

/*
    - bootstrap
    - remixicon
*/

// component
import {Navbar} from './component/navbar'
import Content from './component/content' // default
import {Footer} from './component/footer'




const App = ()=> {
  return (
    
    <React.Fragment>
      <>
      <Navbar/>
      <Content/>
      <Footer/>
      </>
    </React.Fragment>
  );
};

export default App;


