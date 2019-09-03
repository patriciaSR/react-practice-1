import React from 'react';
import logo from '../../images/logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className="card">
          <div className="card-header">
            <div className="image-profile">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="user-data">
              <h1 className="name">Lola Perez</h1>
              <span className="date">26 de octubre de 2018</span>
            </div>
          </div>
          <div className="card-main">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptates aut, inventore ex unde quis obcaecati. Nulla amet cum perferendis culpa, iste nesciunt odit assumenda commodi libero praesentium alias id.
        </p>
            <div className="card-footer">
              <a href="#complete-article" className="read-more">Leer más...</a>
              <span className="likes">31</span>
            </div>
          </div>
        </div>
      </body>
    </div>

  );
}

export default App;
