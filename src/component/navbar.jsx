import React from "react";

// img
import logo from '../logo.svg'

const Navbar = ()=>{
    return (

      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <img src= {logo} alt=""  width={'55px'} height= {'55px'} />
          <h3 className="navbar-brand mt-2">React-project</h3>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
          </div>
        </div>
      </nav>
      </>
        
    );
};

export{Navbar}