import './css/App.css';
import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Menu from './components/Menu'
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Hobby from './components/Hobby';


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
      <div className="cursor"/>
      <div className="App flex-column-center" id="app" onMouseMove={(ev)=>handleMouseMove(ev)}>
        <BrowserRouter>
          <Route render={() => <Header/>}/>
          <div className="flex-column-center body">
              <Route exact path="/">
                  <Redirect to="/Menu" />
              </Route>
              <Route path="/Menu" render={() => <Menu/>}/>
              <Route path="/AboutMe" render={() => <AboutMe x={MousePosition.left} y={MousePosition.top}/>}/>
              <Route path="/Skill" render={() => <Skill x={MousePosition.left} y={MousePosition.top}/>}/>
              <Route path="/Hobby" render={() => <Hobby/>}/>
          </div>
        </BrowserRouter>

        <div className="flex-column-center footer">
          <Footer/>
        </div>
      </div>
      
    </>
  );
}

export default App;