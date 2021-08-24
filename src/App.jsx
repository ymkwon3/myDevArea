import './css/App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import ReactDOM from 'react-dom';

function Welcome(props) {
  return <h1>어, {props.name}이 어서오고!</h1>;
}

function App() {
  return (
    <div className="App flex-column-center" id="app">
      <Welcome name="영민"/>
      <Welcome name="잉민"/>
      <div className="flex-column-center footer">
        <Footer className="footer"/>
      </div>
    </div>
  );
}

export default App;