import '../css/App.css';

function App(props) {
    let height = window.innerHeight / 2;
    let width = window.innerWidth / 2;
    function xhandler() {
        return -50 - (props.x - width) / 100;
    }
    function yhandler() {
        return -50 - (props.y - height) / 30;
    }
    return (
    <div className="main-fontSize"  style={{transform: "translate(" + xhandler() + "%," + yhandler() +"%)"}}>
        Hi, My name is Kwon, Yeong-min!<br/>
    </div>
    );
}

export default App;