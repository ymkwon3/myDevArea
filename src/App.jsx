import './css/App.css';
import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import Footer from './components/Footer';
import WhoAmI from './components/WhoAmI';
import Menu from './components/Menu'
import Header from './components/Header';

function App() {
  const [MousePosition, setMousePosition] = useState({
    left:0,
    top:0
  });

  function handleMouseMove(ev) {
    setMousePosition({left: ev.pageX, top: ev.pageY});
  };

  return (
    <div className="App flex-column-center" id="app" onMouseMove={(ev)=>handleMouseMove(ev)}>
      <div className="header">{window.location.pathname.substr(1)}</div>
      <div className="flex-column-center body">
        <BrowserRouter>
          <Route exact path="/">
              <Redirect to="/Menu" />
          </Route>
          <Route path="/Menu" render={() => <Menu/>}/>
          <Route path="/WhoAmI" render={() => <WhoAmI x={MousePosition.left} y={MousePosition.top}/>}/>
        </BrowserRouter>
      </div>
      <div className="flex-column-center footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;