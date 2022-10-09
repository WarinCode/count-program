// import react
import React from 'react';

// import style
import './style/App.css';

// import lib
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/remixicon/fonts/remixicon.css';

// import component(default)
import Navbar from './component/navbar';
import Content from './component/content';
import Footer from './component/footer';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
        <Content/>
      <Footer/>
    </React.Fragment>
  )
}

export default App;
