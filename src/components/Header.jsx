import '../css/App.css';
import { Link } from 'react-router-dom';

function App() {

    return (
        <>
            {window.location.pathname !== '/Menu' ? <Link to="/Menu" id="home-icon"><img src="images/home.svg" alt="home"/></Link> : null}
            <div className="heading">{window.location.pathname.substr(1)}</div>
        </>
    );
}

export default App;