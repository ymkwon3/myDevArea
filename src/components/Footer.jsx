import '../css/App.css';
import ReactDOM from 'react-dom';

function Tick() {
  const timer = (
    <div>어...현재...시간이...{new Date().toLocaleTimeString()}...이넴...</div>
  )
  ReactDOM.render(timer, document.getElementById('timer'));
}

function App() {
  return (
      <div id="timer"/>
  );
}

setInterval(Tick, 1000);

export default App;