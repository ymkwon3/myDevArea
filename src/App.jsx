import './css/App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import ReactDOM from 'react-dom';

function WhoAmI(props) {
  return <div>
  <h2>이름: {props.name}</h2>
  <h2>좋아하는 것: 게임을 좋아하는 것으로 추정</h2>
  <h2>잘하는 것: 꾸준히 찾아보는 중...</h2>
  </div>;
}

function App() {
  return (
    <div className="App flex-column-center" id="app">
      <WhoAmI name="권영민"/>
      <div className="flex-column-center footer">
        <Footer className="footer"/>
      </div>
    </div>
  );
}

export default App;