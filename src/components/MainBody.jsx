import '../css/App.css';

function App(props) {
    let trans = "translate(" + props.x + "%," + props.y +")";
    return (
    <div className="main-fontSize"  style={{transform: trans}}>
        Hi, My name is Kwon, Yeong-min!
    </div>
    );
}

export default App;