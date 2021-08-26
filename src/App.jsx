import './css/App.css';
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import Menu from './components/Menu'
import Header from './components/Header'
import ReactDOM from 'react-dom';
import React, {useState} from 'react';

function App() {
  const [MousePosition, setMousePosition] = useState({
    left:0,
    top:0
  });
  function handleMouseMove(ev) {
    setMousePosition({left: ev.pageX, top: ev.pageY});
  }
  return (
    <div className="App flex-column-center" id="app" onMouseMove={(ev)=>handleMouseMove(ev)}>
      <div className="flex-column-center body">
        <Menu/>
        {/* <MainBody x={MousePosition.left} y={MousePosition.top}/> */}
      </div>
      <div className="flex-column-center footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;