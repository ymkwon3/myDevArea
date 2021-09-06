import './css/App.css';
import ReactDOM from 'react-dom';
import React, {useState, useRef} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Menu from './components/Menu'
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  const [MousePosition, setMousePosition] = useState({
    left:0,
    top:0
  });

  function handleMouseMove(ev) {
    setMousePosition({left: ev.pageX, top: ev.pageY});
  };

  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");
    window.addEventListener('scroll', cursor)
    window.addEventListener('mousemove', cursor);
    function cursor(e) {
      mouseCursor.style.left = e.pageX - 25 + "px";
      mouseCursor.style.top = e.pageY - window.scrollY - 25 + "px";
    }
  });

  return (
    <>
      <div className="App flex-column-center" id="app" onMouseMove={(ev)=>handleMouseMove(ev)}>
        <div className="heading">{window.location.pathname.substr(1)}</div>
        <div className="flex-column-center body">
          <BrowserRouter>
            <Route exact path="/">
                <Redirect to="/Menu" />
            </Route>
            <Route path="/Menu" render={() => <Menu/>}/>
            <Route path="/AboutMe" render={() => <AboutMe x={MousePosition.left} y={MousePosition.top}/>}/>
          </BrowserRouter>
        </div>
        <div className="flex-column-center footer">
          <Footer/>
        </div>
      </div>
      <div className="cursor"/>
    </>
  );
}

export default App;